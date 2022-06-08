
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/ClientServer/UserServer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-us',
  templateUrl: './contacts-us.component.html',
  styleUrls: ['./contacts-us.component.css']
})
export class ContactsUsComponent implements OnInit {

  constructor(private userservic: UserService, private router: Router) { }
  contacts = <contacts>{}
  contactUsForm: any;
  Role = false
  Error: String = ''
  ngOnInit(): void {
    this.contactUsForm = new FormGroup({
      Email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),
      Subject: new FormControl(''),
      PhoneNumber: new FormControl(''),
      OfficeNumber: new FormControl(''),
      CompanyEmail: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),
    })
  }



  ContactUs(contacts: contacts) {

    this.userservic.ContactUs(contacts)
      .subscribe((res) => {

     
        if (res.status === 500) {
          this.Error = res.Message

          
        } else{

          this.router.navigate(['home'])

        }


      })

  }

}


export interface contacts {
  Email: string
  Subject: string
  PhoneNumber?: number
  OfficeNumber?: number
  CompanyEmail: string

}
