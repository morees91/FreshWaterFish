import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/ClientServer/UserServer.service';
import { Router } from '@angular/router';
import { user } from './../../Login/login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateuser = <user>{}
  message:string=""
  _id: string = ""
  UserUpdate: any
  error: string = ''
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.updateuser = history.state.user
    this.UserUpdate = new FormGroup({
      FirstName: new FormControl(this.updateuser.FirstName),
      LastName: new FormControl(this.updateuser.LastName),
      PhoneNumber: new FormControl(this.updateuser.PhoneNumber),
      Address: new FormControl(this.updateuser.Address),
      profileImage: new FormControl(""),
      street: new FormControl(this.updateuser.Street,
        Validators.compose([
          Validators.required
        ])),
      zip: new FormControl(this.updateuser.Zip),
      Email: new FormControl(this.updateuser.Email, Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl(''),
      password2: new FormControl('')
    })



  }


  UpdateUser(data: any) {

    



    this.userService.UpdateUser(data, this.updateuser.id)
      .subscribe((res) => {

        if (res.status == 500) {

          this.error = res.Message

        } else {


this.message="Profile Updated"
this.error=""

setTimeout(()=>{

  this.router.navigate(['profile'])

},3000)
    

        }
      })



  }

}
