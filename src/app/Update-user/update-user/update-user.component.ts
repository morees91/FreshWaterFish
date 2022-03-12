import { UserService } from 'src/app/UserServer.service';
import { Router } from '@angular/router';
import { user } from './../../Login/login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateuser=<any>{}
 _id:string=""
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.userService.User()
    .subscribe((res:any)=>{

      console.log(res)
      this._id=res._id

    },err=>{

      console.log(err)
    })
  
  }


  UpdateUser(){

    console.log(this.updateuser)

this.userService.UpdateUser(this.updateuser,this._id)
.subscribe((res)=>{

  console.log(res)

})

this.router.navigate(['profile'])

    
  }

}
