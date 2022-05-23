import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fish } from '../Gallery/gallery/gallery.component';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {


  private getgalleries='http://localhost:3000/gallery/get-galleries'
  private addgalleries='http://localhost:3000/gallery/insert-galleries'
  private updategalleries=""
  

  constructor(private http:HttpClient) { }



  GetGalleries(){

return this.http.get(this.getgalleries)


  }

  AddGalleries(fish:fish){

    console.log(fish)

return this.http.post<any>(this.addgalleries,{fish})

  }

  

  UpdateGalleries(){



    
  }


}
