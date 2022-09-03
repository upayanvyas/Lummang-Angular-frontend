import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private http:HttpClient) { }
  getitembyitemid(itemid){
    return this.http.get<any>("https://demo22.appman.in/api/item/itemdetailsbyitemid/" +itemid)
  }

  getitembycategory(categoryid){
    return this.http.get<any>("http://localhost:4000/api/item/" +categoryid) 
  }

} 
 