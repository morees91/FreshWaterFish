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
Image:string='';
  
  ngOnInit(): void {


    this.getuser()

  }
  

  

  getuser(){

this.userServe.User(sessionStorage.getItem('token')).subscribe( (res:any) => { 
  
  if(res.status==500){

    this.router.navigate(['home'])


  }
  this.user=res.data[0]

  
}) 




  }






}
