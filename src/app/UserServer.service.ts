import { contacts } from './Contacts-us/contacts-us/contacts-us.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { user } from './Login/login/login.component';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
private register_Url='http://localhost:3000/users/register'
private login_Url='http://localhost:3000/users/login'
private updateUser_Url='http://localhost:3000/users/update-user'
private getUsers_Url='http://localhost:3000/users/get-users'
private logout_Url='http://localhost:3000/users/logout'
private user_url='http://localhost:3000/users/user'



  constructor(private http: HttpClient) {


   }

   logout(){

    return this.http.post<any>(this.logout_Url,{},{
      withCredentials:true
    })


   }


User(){

 return this.http.get(this.user_url,{withCredentials:true})



}


  Register(user: user,Role:string) {


    return this.http.post<any>(this.register_Url, {
      FirstName: user.FirstName,
      LastName: user.LastName,
      PhoneNumber: user.PhoneNumber,
      Address: user.Address,
      Street: user.Street,
      Zip: user.Zip,
      email: user.Email,
      password: user.Password,
      Role:Role
    })



  }


  Login(user: user) {


    return this.http.post<any>(this.login_Url, {email: user.Email,password: user.Password},
      {
        withCredentials:true
      })
    

  }


  UpdateUser(user: user,_id:string) {

    return this.http.patch<any>(this.updateUser_Url, {
      _id:_id,
      FirstName: user.FirstName,
      LastName: user.LastName,
      PhoneNumber: user.PhoneNumber,
      Address: user.Address,
      Street: user.Street,
      Zip: user.Zip,
      email: user.Email,
      password: user.Password
    })

  }

  GetUser() {

    return this.http.get(this.getUsers_Url)



  }



  ContactUs(contact: contacts) {

    return this.http.post<any>('http://localhost:3000/users/contact-us', {
      Email: contact.Email,
      Subject: contact.Subject,
      PhoneNumber: contact.PhoneNumber,
      OfficeNumber: contact.OfficeNumber,
      CompanyEmail: contact.CompanyEmail,

    })

  }



}
