import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  getitembylongdescription(longdescription){
    return this.http.get<any>("https://demo22.appman.in/api/item/itemsearchbyitemdetailsfrontend/" +longdescription)
  } 

  getitembyitemname(itemname){
    return this.http.get<any>("https://demo22.appman.in/api/item/itemsearchfrontend/" +itemname)
  }

}
