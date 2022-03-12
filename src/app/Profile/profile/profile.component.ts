import { user } from './../../Login/login/login.component';
import { UserService } from 'src/app/UserServer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router,private userServe:UserService) { }
  user=<any>{}
  ngOnInit(): void {

    this.userServe.User()
    .subscribe((user:any)=>{

      this.user=user
    },(err)=>{

      console.log(err)

    })
  }

  UpdateProfile(){

this.router.navigate(['update-user'])



    
  }


  
  



}
