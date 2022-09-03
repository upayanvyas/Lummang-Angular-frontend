import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  addcart(customerid,itemid,sellerid):Observable<any>{
    return this.http.get<any>(this.baseUrl+`cart/addcart/${customerid}/${itemid}/${sellerid}`,{})
  }   

  getcart(customerid):Observable<any>{
    console.log('baseUrl : ', this.baseUrl)
    return this.http.get<any>(this.baseUrl+"api/cart/"+customerid)
  }

  deletecart(cartid,deletedBy):Observable<any>{
    return this.http.get<any>(this.baseUrl+`deletecart/${cartid}/${deletedBy}`,{})
  } 

  getcartcount(customerid):Observable<any>{
    return this.http.get<any>(this.baseUrl+"api/count/"+customerid)
  }

  geteditcart(cartid,quantity):Observable<any>{
    return this.http.get<any>(this.baseUrl+`editcart/${cartid}/${quantity}`,{})
  }
}
 