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
  constructor(private server: UserService,
     private router: Router, private ActiveRouter: ActivatedRoute,
     private socket:Socket,private chatserver: ChatServerService) { }

  ngOnInit(): void {

 

    this.server.User(sessionStorage.getItem('token'))
    .subscribe((res: any) => {

      this.chatserver.connectedUser(res)

      
      if(res.status==200)
      {
        
     
        
  this.user = res.data[0]
  this.FullName = res.data[0].FirstName + "." + res.data[0].LastName[0]
  res.data[0].Role == 'Admin' ? this.Role = true : this.Role = false

  this.router.navigate(['home'])
}


    })

    Emitters.authEmitter.subscribe(
      (auth: boolean) => {

        this.authenticated = auth


      }
    )
  }


  RemoveBadge(){
  
  }
  Logout() {


  

    this.server.logout()
      .subscribe((res) => {
      
        if(res.status==200)
        {
          
                  this.authenticated = false


          sessionStorage.removeItem('token')
          window.location.reload()
          this.getUser()
         
        }


      })


  }



  getUser() {

  

  }



}
