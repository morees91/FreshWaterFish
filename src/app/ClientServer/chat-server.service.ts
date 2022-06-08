import { user } from './../Login/login/login.component';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';
import { chat } from './../Chat/chat/chat.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatServerService {
  
  
    private getChatdata='https://freshwaterfish91.herokuapp.com/chat/getChatdata'
    private savechatdata='https://freshwaterfish91.herokuapp.com/chat/savechatdata'
    private updatedchatdata="https://freshwaterfish91.herokuapp.com/chat/updatedchatdata"
    private deletechatdata="https://freshwaterfish91.herokuapp.com/chat/deletechatdata"

    

  constructor(private http:HttpClient,private socket:Socket) { 

  
    

    
  }


  Connection(){

this.socket.emit('connection')


  }

  connectedUser(user:user)
  {

    this.socket.emit('ConnectedUser',user)

    this.socket.on('SendUser',(res:any)=>{

    })
  }

  selectedUser(SelectedUser:any){


    this.socket.emit('selectedUser',SelectedUser)

  }

GetChatList(){

  return this.http.get(this.getChatdata)



}

newMessage(){


}


SaveChat(chat:chat){


this.socket.emit('SendMessage',chat)




}

UpdateChat(chat:chat){

 

}



}


