import { order } from './../Orders/orders/orders.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
private GetOrders="http://localhost:3000/orders/get-orders"
private InsertOrders="http://localhost:3000/orders/insert-orders"

  constructor(private http:HttpClient) { }

  Getorders(){
    return this.http.get(this.GetOrders)

  }

  Insertorders(order:order){

    console.log(order)


    return this.http.post(this.InsertOrders,{order})

  }
}
