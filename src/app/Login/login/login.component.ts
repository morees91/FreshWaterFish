import { UserService } from 'src/app/ClientServer/UserServer.service';
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
error:string=''
  constructor(private router:Router,private userserver:UserService) { }

  ngOnInit(): void {

    
  }

  Login(){
this.userserver.Login(this.user)
.subscribe((response)=>{

if(response.status==500)
{
this.error=response.Message

}else{


//location.reload()

   this.router.navigate(['home'])
   window.location.reload()
  console.log('login ok')

}

},err=>{
  console.log(err.error.message);

  this.message=err.error.message
  
})


  }

}


export interface user{
  id:number
FirstName:string
LastName:string
PhoneNumber:string
Address:string
Street:string
Zip?:number
Email:string
Password:string
Password2:string
Role:string
Image:string




}