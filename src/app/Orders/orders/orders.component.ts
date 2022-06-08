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

    this.loggedUser()
    this.GetOrders();
  }

  loggedUser() {
 
    this.UserService.User(sessionStorage.getItem('token')).subscribe((res: any) => {

      if(res.status===500)
      {

this.router.navigate(['home'])
      }else{


        this.user = res[0]
         this.order.UserId = this.user.id

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


