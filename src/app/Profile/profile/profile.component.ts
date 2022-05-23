import { user } from './../../Login/login/login.component';
import { UserService } from 'src/app/ClientServer/UserServer.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnChanges {

  constructor(private router: Router, private userServe: UserService,private location:Location) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');

    
   
  }
  user = <any>{}

  
  ngOnInit(): void {


    this.getuser()
//     console.log(history.state)
//     if(history.state)
//     {

// console.log('1')

//     }else{

// console.log('2')

//     }
//     this.user = history.state

  }
  

  

  getuser(){

console.log("updated user")
this.userServe.User().subscribe( (res:any) => { 
  
  console.log('got user from server',res)
  this.user=res[0]
  this.user.Image='https://freshwaterfish.s3.eu-west-2.amazonaws.com/'+res[0].Image
  // nextHandler
  
  
}) 

console.log('current updated user',this.user)



  }






}
