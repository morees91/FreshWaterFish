import { contacts } from '../Contacts-us/contacts-us/contacts-us.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { user } from '../Login/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
private register_Url='https://freshwaterfish91.herokuapp.com/users/register'
private login_Url='https://freshwaterfish91.herokuapp.com/users/login'
private updateUser_Url='https://freshwaterfish91.herokuapp.com/users/update-user'
private updateRole_Url='https://freshwaterfish91.herokuapp.com/users/update-role'
private getUsers_Url='https://freshwaterfish91.herokuapp.com/users/get-users'
private get_contactUs='https://freshwaterfish91.herokuapp.com/users/get-contactUs'
private logout_Url='https://freshwaterfish91.herokuapp.com/users/logout'
private user_url='https://freshwaterfish91.herokuapp.com/users/user'
private deleteUser_url='https://freshwaterfish91.herokuapp.com/users/delete-user'



  constructor(private http: HttpClient) {


   }


   GetContactUs(){

    return this.http.get(this.get_contactUs)


   }

   logout(){

    
    return this.http.post<any>(this.logout_Url,{
      withCredentials:true,
    })


   }


User(token:any){

 return this.http.post(this.user_url,{token})



}


  Register(user: user,Role:string,image:File) {


let formParams = new FormData();
formParams.append('file', image)
formParams.append('register', JSON.stringify(user))
formParams.append('role',Role)

    return this.http.post<any>(this.register_Url,formParams)
  



  }


  Login(user: user) {


    return this.http.post<any>(this.login_Url, {Email: user.Email,Password: user.Password})
    

  }


  UpdateUser(user: user,id:number) {

    return this.http.patch<any>(this.updateUser_Url, {"user":user,"id":id})

  }

  GetUsers() {

    return this.http.get(this.getUsers_Url)



  }


  updateRole(user: user,id:number){

    return this.http.patch<any>(this.updateRole_Url, {"user":user,"id":id})


  }



  ContactUs(contact: contacts) {

    return this.http.post<any>('https://freshwaterfish91.herokuapp.com//users/contact-us', {
      Email: contact.Email,
      Subject: contact.Subject,
      PhoneNumber: contact.PhoneNumber,
      OfficeNumber: contact.OfficeNumber,
      CompanyEmail: contact.CompanyEmail,

    })

  }

Deleteuser(data:any){



 return this.http.delete<user>(this.deleteUser_url,{params:{'userid':data._id}})

}


}
