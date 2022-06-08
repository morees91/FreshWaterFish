import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fish } from '../Gallery/gallery/gallery.component';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {


  private getgalleries='https://freshwaterfish91.herokuapp.com/gallery/get-galleries'
  private addgalleries='https://freshwaterfish91.herokuapp.com/gallery/insert-galleries'
  private updategalleries=""
  

  constructor(private http:HttpClient) { }



  GetGalleries(){

return this.http.get(this.getgalleries)


  }

  AddGalleries(fish:fish){

    

return this.http.post<any>(this.addgalleries,{fish})

  }

  

  UpdateGalleries(){



    
  }


}
