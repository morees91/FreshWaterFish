import { order } from './../Orders/orders/orders.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { item } from '../cart-orders/cart-orders.component';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  
private GetOrders="https://freshwaterfish91.herokuapp.com/orders/get-orders"
private GetCartItem="https://freshwaterfish91.herokuapp.com/orders/get-cartItems"

private Insertcart="https://freshwaterfish91.herokuapp.com/orders/insert-cart"
private InsertOrders="https://freshwaterfish91.herokuapp.com/orders/insert-order"
private deletecartItem="https://freshwaterfish91.herokuapp.com/orders/delete-cartItem"


  constructor(private http:HttpClient) { }

  Getorders(){
    return this.http.get(this.GetOrders)

  }

  
  GetCartItems(){
    return this.http.get(this.GetCartItem)

  }

  Insertorders(order:order){

  


    return this.http.post(this.InsertOrders,{order})

  }

  

  deleteCart(cart:any){

    return this.http.delete(this.deletecartItem,{params:{cart}})

    



  }
  InsertCart(cart:any,quantity:number){

 


    return this.http.post(this.Insertcart,{cart,quantity})

  }
}
