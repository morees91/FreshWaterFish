import { user } from './../Login/login/login.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../ClientServer/order.service';
import { fish } from '../Gallery/gallery/gallery.component';
import { order } from '../Orders/orders/orders.component';
import { UserService } from '../ClientServer/UserServer.service';

@Component({
  selector: 'app-cart-orders',
  templateUrl: './cart-orders.component.html',
  styleUrls: ['./cart-orders.component.css']
})
export class CartOrdersComponent implements OnInit {

  constructor(private UserService: UserService, private OrderService: OrderService, private router: Router) { }
  item: any
  itemName: String = ""
  ItemImage: String = ""
  itemDetails: string = ""
  itemPrice: string = ""
  quantity: number = 1
  addtoCartMessage: string = ""
  OrderdMessage: string = ""
  DeletedMessage: string = ""
  order = <order>{}
  user = <user>{}
  deleting: boolean = false
  ordering: boolean = false
  cartitem = <item>{}
  cartList: any[] = []
  ngOnInit(): void {


   

    if (history.state.g) {
      this.item = true
      console.log("history 1")
      this.cartitem.item = history.state.g

      this.cartitem.ItemImage = history.state.g.FishImg

      this.cartitem.itemName = history.state.g.FishName


      this.cartitem.itemDetails = history.state.g.Details

      this.cartitem.itemPrice = history.state.g.fish_Price

      this.order.FishId = history.state.g.id

    } else if (history.state.p) {

      this.item = true

      console.log(history.state.p)
      this.cartitem.item = history.state.p

      this.cartitem.ItemImage = history.state.p.productImg

      this.cartitem.itemName = history.state.p.productName

      this.cartitem.itemDetails = history.state.p.Details

      this.cartitem.itemPrice = history.state.p.product_Price

      this.order.FishId = history.state.p.id

    } else {

      this.item = false


    }


    this.loggedUser()
    this.GetCartList()
  }


  DeleteCart(cart: any) {

  

    this.OrderService.deleteCart(cart.id).subscribe((res: any) => {

      if (res.status == 200) {



        this.DeletedMessage = 'deleted'
        this.GetCartList();
      }

    })


  }

  orderItem(cart: any) {



    this.OrderService.Insertorders(cart).subscribe((res: any) => {
      if (res.status == 200) {

        this.OrderdMessage = "orderd"

        setTimeout(() => {

          this.GetCartList()
        }, 1000);

      }


    })


  }

  GetCartList() {

    this.OrderService.GetCartItems().subscribe((res: any) => {


      if (res.status == 200) {


        this.addtoCartMessage = ""
        this.OrderdMessage = ""

        this.cartList = res.cartData


      }

    })


  }




  AddToCart(item: fish) {

  
    this.OrderService.InsertCart(this.order, this.quantity).subscribe((res: any) => {



      if (res.status === 500) {



      } else {

        this.addtoCartMessage = "Added to Cart"


        setTimeout(() => {


          this.GetCartList()


        }, 3000)
        console.log(res)

      }


    })


  }


  loggedUser() {
    this.UserService.User(sessionStorage.getItem('token')).subscribe((res: any) => {

      console.log(res)
      if (res.status === 500) {

        this.router.navigate(['home'])
      } else {


        this.user = res.data[0]
        this.order.UserId = this.user.id

      }

    })

  }


}



export interface item {
  UserId: number
  item: string
  ItemImage: string
  itemName: string
  itemPrice: string,
  itemDetails: string


}