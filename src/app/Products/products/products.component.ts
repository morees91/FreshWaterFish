import { ProductsService } from './../../ClientServer/products.service';
import { UserService } from 'src/app/ClientServer/UserServer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private server: ProductsService, private userServer: UserService) { }


  products: any = ''
  Role = false
  islogged:boolean=false

  ngOnInit(): void {

    this.userServer.User(sessionStorage.getItem('token')).subscribe((res: any) => {

      if (res.status === 500) {




      } else {
        
    if(sessionStorage.getItem('token'))
    {

      this.islogged=true


    }else{

      this.islogged=false

  
      
    }


        res.data[0].Role == 'Admin' ? this.Role = true : this.Role = false

      }

    })

    this.GetProducts()
  }


  GetProducts() {


    this.server.Getproducts()
      .subscribe((res: any) => {

       

        this.products = res.productsData


      })


  }



}




export interface product {
  ProductName: string
  ProductImage: string,

}
