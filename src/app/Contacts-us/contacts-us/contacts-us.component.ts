import { UserService } from 'src/app/UserServer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-us',
  templateUrl: './contacts-us.component.html',
  styleUrls: ['./contacts-us.component.css']
})
export class ContactsUsComponent implements OnInit {

  constructor(private userservic:UserService) { }
contacts=<contacts>{}
  ngOnInit(): void {
  }



  ContactUs(){

    console.log(this.contacts)
this.userservic.ContactUs(this.contacts)
.subscribe((res)=>{
  console.log(res)
})

  }

}


export interface contacts{
Email:string
Subject:string
PhoneNumber?:number
OfficeNumber?:number
CompanyEmail:string

}
