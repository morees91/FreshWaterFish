import { getTestBed } from '@angular/core/testing';
import { GalleryService } from './../../ClientServer/gallery.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fish } from 'src/app/Gallery/gallery/gallery.component';
import { product } from 'src/app/Products/products/products.component';


@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  header:string=''
  Fish=<fish>{}
  Product=<product>{}
  item=<item>{}
  constructor(private router:ActivatedRoute,private server:GalleryService) { }

  ngOnInit(): void {
  this.Fish=history.state.g
  this.Product=history.state.p
  
if(this.Fish)
{

  this.item.itemName=history.state.g.FishName
  this.item.itemImage=history.state.g.FishImg
  this.item.itemLink=history.state.g.FishLink

  
}else{

  this.item.itemName=history.state.p.productName
  this.item.itemImage=history.state.p.productImg
  this.item.itemLink=history.state.p.productLink


  console.log("2",this.Product)
}


}
  OrderFish(){

    console.log(this.Fish)


  }

  }



interface item{

  itemName:string,
  itemImage:string,
  itemLink:string
}



