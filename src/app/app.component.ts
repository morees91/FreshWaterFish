import { user } from './Login/login/login.component';
import { Router } from '@angular/router';
import { Emitters } from './emitters/emitters';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/UserServer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FreshWaterApp';
  FullName: string = ""
  class: string = ''
  authenticated = false
  Role:string=""

  constructor(private server: UserService, private router: Router) { }

  ngOnInit(): void {

    this.router.navigate(['home'])
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {

        this.authenticated = auth
        this.getUser()

      }
    )

  }
  Logout() {

    this.server.logout()
      .subscribe((res) => {

        this.authenticated = false


        this.router.navigate(['home'])

      })


  }

  getUser() {

    this.server.User()
      .subscribe((res: any) => {

        console.log(res)

        this.FullName = res.FirstName + "." + res.LastName[0]
        this.Role=res.Role
     

      }, (err) => {

        console.log(err)

      })

  }



}
