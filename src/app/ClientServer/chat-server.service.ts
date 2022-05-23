import { user } from './../Login/login/login.component';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';
import { chat } from './../Chat/chat/chat.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatServerService {
  
  
    private getChatdata='http://localhost:3000/chat/getChatdata'
    private savechatdata='http://localhost:3000/chat/savechatdata'
    private updatedchatdata="http://localhost:3000/chat/updatedchatdata"
    private deletechatdata="http://localhost:3000/chat/deletechatdata"

    

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

  console.log(chat)


  console.log('chat updated')
}

DeleteChat(chat:chat){

console.log('chat deleted')


}


}


