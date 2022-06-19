import { user } from './../../Login/login/login.component';
import { UserService } from 'src/app/ClientServer/UserServer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  userList: any
  contactUsList: any
  currentUser=<user>{}
  clicked: any
  IsAdmin: boolean = false
  clickedUser = <user>{}
  Role: string = ""
  message: string = ""
  constructor(private server: UserService, private router: Router) { }

  ngOnInit(): void {

    this.GetUsers();
    this.GetContactUs();

    this.CurrentUser();
  }

  CurrentUser() {

    this.server.User(sessionStorage.getItem('token')).subscribe((user: any) => {

      if (user.status === 500) {

        this.router.navigate(['home'])

      } else {

        console.log(user.data[0])

this.currentUser=user.data[0]

        if (user.data[0].Role == 'Admin') {

          this.IsAdmin = true
        } else {

          this.IsAdmin = false
        }

      }


    })


  }


  GetContactUs() {

    this.server.GetContactUs().subscribe((res: any) => {


      this.contactUsList = res.contactsData
      this.message = ""
      this.clicked=false

    })


  }


  UpdateRole() {



    this.server.updateRole(this.clickedUser, this.clickedUser.id).subscribe(res => {
      this.message = res.message
      setTimeout(() => {
        
              this.GetContactUs()

      }, 3000)
    })

  }


  onchange(role: string) {


    this.clickedUser.Role = role



  }

  GetUsers() {

    this.server.GetUsers().subscribe((res: any) => {


      this.userList = res.UsersData


    })



  }

  clickeduser(user: user) {
    this.clickedUser = user


    this.Role = this.clickedUser.Role
    this.clicked = true



  }

  DeleteUser() {

    this.server.Deleteuser(this.clickedUser,this.currentUser).subscribe(res => {

console.log(res)

this.message="All info Deleted"
setTimeout(()=>{


  this.GetUsers()
  this.clicked=false

},3000)



    })

  }

  cancelDeleteButton() {

    this.clicked = false
  }

}
