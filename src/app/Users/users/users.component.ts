import { user } from './../../Login/login/login.component';
import { UserService } from 'src/app/ClientServer/UserServer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private server: UserService,private router:Router) { }

  ngOnInit(): void {

    this.GetUsers();
    this.GetContactUs();

    this.CurrentUser();
  }

  CurrentUser() {

    this.server.User(sessionStorage.getItem('token')).subscribe((user: any) => {

      if(user.status===500)
      {

this.router.navigate(['home'])

      }else{



        if (user.data[0].Role == 'Admin') {
  
          this.IsAdmin = true
        } else {
  
          this.IsAdmin = false
        }

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

      this.message= res.message

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

    this.server.Deleteuser(this.clickedUser).subscribe(res => {

     

      this.GetUsers()


    })

  }

  cancelDeleteButton() {

    this.clicked = false
  }

}
