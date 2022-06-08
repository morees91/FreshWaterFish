import { fish } from './../../Gallery/gallery/gallery.component';
import { UserService } from '../../ClientServer/UserServer.service';
import { user } from './../../Login/login/login.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = <user>{}
  formData: any;
  Error: string = ''
  message: String = ""
  profileImage!: File;

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      PhoneNumber: new FormControl(''),
      Address: new FormControl(''),
      Street: new FormControl('',
        Validators.compose([
          Validators.required
        ])),
      Zip: new FormControl(''),
      Email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),
      Password: new FormControl(""),
      Password2: new FormControl('')
    })


    
  }


  FileChange(event: any) {

    this.profileImage = event.target.files[0]
  


  }

  Register(data: user) {


    if (data.Password != data.Password2) {


      this.Error = 'password dont match'

    } else {



      this.userService.Register(data, 'customer', this.profileImage)
        .subscribe((response) => {



          if (response.status === 500) {

            this.Error = response.Message

          } else {

   
            this.Error = ""

            this.message = 'User Registed'
            setTimeout(() => {

              this.router.navigate(['login'])


            }, 3000)


          }
        })



    }



  }

}
