import { Router } from '@angular/router';
import { user } from './../../Login/login/login.component';
import { UserService } from '../../ClientServer/UserServer.service';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatServerService } from 'src/app/ClientServer/chat-server.service';
import { SocketIoConfig } from 'ngx-socket-io';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  constructor(private server: UserService, private socket: Socket, private chatserver: ChatServerService,private router:Router) { 


  }


  @ViewChild('scrollBottom')
  private scrollBottom!: ElementRef;
  message: string = ''
  users: user[] = []
  filterdList: user[] = []
  ShowChat: boolean = false
  chat = <chat>{}
  SenderName: string = ""
  SelectedUser: string = "";
  chatList: chat[] = []
  filterChatList: chat[] = []
  updating: boolean = false
  ReceviedMessage: any
  

  ngOnInit(): void {
    this.LoggedUser();
    this.Getusers()
    this.chatserver.Connection()
    this.getChatList();
    this.scrollToBottom();
    this.socket.on('new_message', (data: any) => {

      this.ReceviedMessage = data
      this.filterChatList.push(data)

    })

    this.socket.on('room_id', (id: any) => {

    console.log(id)
this.chatList=[]
    this.chat.room_Id=id

    })

  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  Getusers() {


    this.server.GetUsers().subscribe((res: any) => {

  
      this.users = res.UsersData;
      

      this.filterdList = this.users.filter(user => user.id !== this.chat.SenderId)



    })


  }

  LoggedUser() {
   

    this.server.User(sessionStorage.getItem('token')).subscribe((res: any) => {


if(res.status===500)
{

  this.router.navigate(['home'])

}else{

  
  this.chat.SenderId = res.data[0].id
  this.chat.sender = res.data[0].FirstName + " " + res.data[0].LastName

  this.chatserver.connectedUser(res)
  this.Getusers();
  
}

    })



  }


  SelectUser(Selecteduser: any) {



    this.SenderName = Selecteduser.FirstName
    this.chat.ReceiverId = Selecteduser.id
    this.chat.receiver = Selecteduser.FirstName + " " + Selecteduser.LastName
    this.chat.Email = Selecteduser.Email
    this.chatserver.selectedUser( this.chat.SenderId,this.chat.ReceiverId)
    console.log(Selecteduser)
    console.log(this.chat.SenderId)
    console.log(this.chat.ReceiverId)

    console.log(this.chatList)
    this.getChatList();
    console.log(this.chat.room_Id)

    

    console.log(this.filterChatList)


this.getChatList()

  }

  // onchange(user: any) {



  //   this.SenderName = user.FirstName
  //   this.chat.ReceiverId = user.id

  //   this.getChatList();
  //   this.filterChatList = this.chatList.filter(user => this.chat.ReceiverId === user.ReceiverId || user.ReceiverId == this.chat.SenderId)

  //   this.chatserver.selectedUser(this.chat.ReceiverId)





  // }


  getChatList() {
//get chat list
    this.chatserver.GetChatList().subscribe((res: any) => {


      this.chatList = res.ChatData

      
    this.filterChatList = this.chatList.filter(user => this.chat.room_Id==user.room_Id)


    }
    )


  }


  scrollToBottom(): void {
    try {
      this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
    } catch (err) { }

  }
  SendMessage() {

    this.chat.Message = this.message

    this.chat.TimeStamp = new Date().toString()
  
    this.message = ''
    this.filterChatList.push(this.chat)
    this.chatserver.SaveChat(this.chat)
    this.scrollToBottom();

  }



  cancelUpdate() {

    this.updating = false

  }


  selectedMessage(Selectedmessage: chat) {

    this.updating = true
  



  }

  updateMessage() {



    this.chatserver.UpdateChat(this.chat)



  }

}


export interface chat {

  SenderId: number
  Email: String
  ReceiverId: number
  room_Id:number
  Message: String
  TimeStamp: String,
  sender: String,
  receiver: String

}
