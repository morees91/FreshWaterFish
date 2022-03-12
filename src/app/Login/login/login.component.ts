import { UserService } from 'src/app/UserServer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user=<user>{}
message:string=''
  constructor(private router:Router,private userserver:UserService) { }

  ngOnInit(): void {

    
  }

  Login(){

  

    console.log(this.user)

this.userserver.Login(this.user)
.subscribe((response)=>{


 
    this.router.navigate(['home'])
    console.log(response.message)
    localStorage.setItem('user',JSON.stringify(response.user))
  

},err=>{
  console.log(err.error.message);

  this.message=err.error.message
  
})


  }

}


export interface user{
FirstName:string
LastName:string
PhoneNumber?:number,
Address:string
Street:string
Zip?:number
Email:string,
Password:string,
Password2:string
role:string





}