import { order } from './../Orders/orders/orders.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
private GetOrders="https://freshwaterfish91.herokuapp.com/orders/get-orders"
private InsertOrders="https://freshwaterfish91.herokuapp.com/orders/insert-orders"

  constructor(private http:HttpClient) { }

  Getorders(){
    return this.http.get(this.GetOrders)

  }

  Insertorders(order:order,quantity:number){

    console.log(order)


    return this.http.post(this.InsertOrders,{order,quantity})

  }
}
