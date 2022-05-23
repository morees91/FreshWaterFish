import { UserService } from './../../ClientServer/UserServer.service';
import { GalleryService } from './../../ClientServer/gallery.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

galleries: any = ''
FormAddFish:any;
Role=false
connectedUser:any
  constructor(private server:GalleryService,private userServer:UserService,private router:ActivatedRoute) { }

  ngOnInit(): void {


 
    this.GetFishs()


  }
  OrderFish(fish:fish){

    
    console.log(fish)
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