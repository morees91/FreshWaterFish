import { Router } from '@angular/router';
import { Emitters } from './../../emitters/emitters';
import { UserService } from 'src/app/UserServer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private server:UserService) { 

  }

  ngOnInit(): void {
    
  

    this.server.User().subscribe(res=>{

      console.log(res)
      
      Emitters.authEmitter.emit(true)


    },err=>{
      console.log(err)
      Emitters.authEmitter.emit(false)
    })


  }

}
