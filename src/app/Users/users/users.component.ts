import { user } from './../../Login/login/login.component';
import { UserService } from 'src/app/ClientServer/UserServer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  userList: any
  contactUsList:any
  clicked: any
  IsAdmin: boolean = false
  clickedUser = <user>{}
  Role: string = ""
  message:string=""
  constructor(private server: UserService) { }

  ngOnInit(): void {

    this.GetUsers();
    this.GetContactUs();

    this.CurrentUser();
  }

  CurrentUser() {

    this.server.User(sessionStorage.getItem('token')).subscribe((user: any) => {

      if (user[0].Role == 'Admin') {

        this.IsAdmin = true
      } else {

        this.IsAdmin = false
      }


    })


  }


  GetContactUs(){

this.server.GetContactUs().subscribe((res:any)=>{


  this.contactUsList=res.contactsData

})

    
  }


  UpdateRole() {



    this.server.updateRole(this.clickedUser, this.clickedUser.id).subscribe(res => {

      console.log(res)
      this.message= res.message

    })
    console.log(this.clickedUser)
  }


  onchange(role: string) {

    console.log(this.clicked)
    this.clickedUser.Role = role
    console.log(role)


  }

  GetUsers() {

    this.server.GetUsers().subscribe((res: any) => {

      console.log(res)
      this.userList = res.UsersData


    })



  }

  clickeduser(user: user) {
    this.clickedUser = user

    console.log(this.clickedUser)
    this.Role = this.clickedUser.Role
    this.clicked = true



  }

  DeleteUser() {

    this.server.Deleteuser(this.clickedUser).subscribe(res => {

      console.log('componant', res)

      this.GetUsers()


    })

  }

  cancelDeleteButton() {

    this.clicked = false
  }

}
