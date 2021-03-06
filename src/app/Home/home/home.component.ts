import { ChatServerService } from './../../ClientServer/chat-server.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from './../../emitters/emitters';
import { UserService } from 'src/app/ClientServer/UserServer.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formContactsUs:any;
 loggedUser:any

  constructor
  (private server: UserService) {

  }

  ngOnInit(): void {
    
    this.server.User(sessionStorage.getItem('token')).subscribe((res: any) => {
     
      if(res.status==500)
      {
    
      sessionStorage.removeItem('token')

      Emitters.authEmitter.emit(false)

    }else{
  
  this.loggedUser=res.data[0]

  
      Emitters.authEmitter.emit(true)
    }

 


  })

 


}


}
