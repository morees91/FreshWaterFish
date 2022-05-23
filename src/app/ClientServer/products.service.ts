import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { product } from '../Products/products/products.component';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

private GetProducts="http://localhost:3000/product/get-products"
private addProducts="http://localhost:3000/product/insert-products"


  
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
