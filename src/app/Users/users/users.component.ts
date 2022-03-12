import { user } from './../../Login/login/login.component';
import { UserService } from 'src/app/UserServer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  userList:any
  constructor(private server:UserService) { }

  ngOnInit(): void {


    this.GetUsers()
  }


  GetUsers(){

    this.server.GetUser().subscribe((res)=>{

      console.log(res)
      this.userList=res

      
    })



  }

}
