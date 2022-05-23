import { ChatServerService } from './ClientServer/chat-server.service';
import { user } from './Login/login/login.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Emitters } from './emitters/emitters';
import { UserService } from 'src/app/ClientServer/UserServer.service';
import { Component } from '@angular/core';

import {  SocketIoConfig } from 'ngx-socket-io';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FreshWaterApp';
  FullName: string = ""
  user = <user>{}
  class: string = ''
  authenticated = false
  Role = false
  config: SocketIoConfig = {
    url: '',
    options: {
      transports: ['websockt']
    }
  }
  constructor
  (private server: UserService,
     private router: Router, private ActiveRouter: ActivatedRoute,
     private socket:Socket,private chatserver: ChatServerService) { }

  ngOnInit(): void {

   
   
    this.server.User()
    .subscribe((res: any) => {

     

      this.chatserver.connectedUser(res)

      this.user = res

      this.FullName = res[0].FirstName + "." + res[0].LastName[0]
      res[0].Role == 'Admin' ? this.Role = true : this.Role = false

      this.router.navigate(['home'])



    })

    Emitters.authEmitter.subscribe(
      (auth: boolean) => {

        this.authenticated = auth


      }
    )
  }
  Logout() {

    this.server.logout()
      .subscribe((res) => {

        this.authenticated = false

        this.getUser()
        this.router.navigate(['home'])


      })


  }



  getUser() {

  

  }



}
