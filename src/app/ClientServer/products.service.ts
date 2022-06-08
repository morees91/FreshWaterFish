import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { product } from '../Products/products/products.component';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

private GetProducts="https://freshwaterfish91.herokuapp.com/product/get-products"
private addProducts="https://freshwaterfish91.herokuapp.com/product/insert-products"


  
  constructor(private http: HttpClient) { }


  Getproducts(){

return this.http.get(this.GetProducts)


  }

  AddProducts(product:product){

return this.http.post<product>(this.addProducts,{product})


  }

  UpdateProducts(){


    


  }
}
