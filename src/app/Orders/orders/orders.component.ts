import { FormGroup, FormControl } from '@angular/forms';
import { OrderService } from './../../ClientServer/order.service';
import { UserService } from 'src/app/ClientServer/UserServer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fish } from 'src/app/Gallery/gallery/gallery.component';
import { user } from 'src/app/Login/login/login.component';
import { getLocaleExtraDayPeriods } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private router: Router, private UserService: UserService, private OrderService: OrderService) { }

  item :any
  message:string=""
  order=<order>{}
  quantity:any
  itemName:String=""
  ItemImage:String=""
  itemDetails:string=""
  itemPrice:string=""
  OrderList:any=""
  user = <user>{}
  ngOnInit(): void {

    console.log(history.state)

if(history.state.g)
{

  console.log("history 1")
  this.item = history.state.g
  this.ItemImage=history.state.g.FishImg
  this.itemName=history.state.g.FishName
  this.itemPrice=history.state.g.fish_Price


  
}else if(history.state.p){

this.item=history.state.p

this.ItemImage=history.state.p.productImg
this.itemName=history.state.p.productName
this.itemDetails=history.state.p.Details
this.itemPrice=history.state.p.product_Price


}else{
  
  this.item=false
  console.log("history 2")

}

    this.loggedUser()
    this.GetOrders();
  }

  loggedUser() {
    this.UserService.User(sessionStorage.getItem('token')).subscribe((res: any) => {
      this.user = res[0]
       this.order.UserId = this.user.id

    })

  }


  OrderFish(item: fish) {

    console.log(item)
    this.order.FishId = item.id

    console.log(this.quantity)
    console.log(this.order)
    this.OrderService.Insertorders(this.order,this.quantity).subscribe((res: any) => {

     

      if (res.status === 500) {



      } else {

this.message="Order Submited"


setTimeout(()=>{


       this.router.navigate(['home'])


},3000)
        console.log(res)

      }


    })

  }

  GetOrders() {


    this.OrderService.Getorders().subscribe((res: any) => {

this.OrderList=res.ordersData


      console.log(this.OrderList)



    })

  }

}




export interface order {

  FishId: number
  UserId: number


}


