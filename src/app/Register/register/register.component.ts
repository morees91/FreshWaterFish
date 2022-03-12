import { UserService } from './../../UserServer.service';
import { user } from './../../Login/login/login.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = <user>{}
 
  constructor(private router: Router, private userService: UserService) {
  
  }

  ngOnInit(): void {
  }


  Register() {

    this.userService.Register(this.user, 'customer')
      .subscribe((response) => {

        console.log(response)

      })

    console.log(this.user)

    this.router.navigate(['login'])

  }

}
