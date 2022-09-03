import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

 
  constructor(private http:HttpClient) { }
   addwishlist(customerid,itemid):Observable<any>{
    return this.http.get<any>(`https://demo22.appman.in/wishlist/addwishlist/${customerid}/${itemid}`,{})
 
 
  }  

  getwishlist(customerid):Observable<any>{
    return this.http.get<any>("https://demo22.appman.in/api/wishlist/"+customerid)
 
 
  } 


  deletewishlist(wishlistid,deletedBy):Observable<any>{
    return this.http.get<any>(`https://demo22.appman.in/api/deletewishlist/${wishlistid}/${deletedBy}`,{})
 
 
  } 


  deletewishlistbyitemid(customerid,itemid,deletedBy){
    return this.http.get<any>(`https://demo22.appman.in/api/wishlist/${customerid}/${itemid}/${deletedBy}`,{})
  }


  getviewwishlist(customerid,itemid){
    return this.http.get<any>(`https://demo22.appman.in/api/wishlist/viewwishlist/${customerid}/${itemid}`,{})
  
  }
} 
