import { UserService } from './../../ClientServer/UserServer.service';
import { GalleryService } from './../../ClientServer/gallery.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

galleries: any = ''
FormAddFish:any;
Role=false
islogged:boolean=false

connectedUser:any
  constructor(private server:GalleryService,private userServer:UserService,private router:ActivatedRoute ,private route:Router) { }

  ngOnInit(): void {


    this.GetFishs()


  }
  OrderFish(){



    if(sessionStorage.getItem('token'))
    {

      this.islogged=true
    }else{

      this.islogged=false

  
      
    }
    
    
  }

  
  GetFishs() {

    this.server.GetGalleries().subscribe((res: any) => {

      console.log(res)
      this.galleries = res.galleryData

    })

  }


}




export interface fish {
  id: number
  FishName: string
  FishImg: string
}