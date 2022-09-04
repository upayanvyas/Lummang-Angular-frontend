import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Checkout } from './checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  // create order at razorpay  and get order id from razorpay
  createOrder(initalPayPayload): Observable<any> {
    return this.http.post(this.baseUrl + "api/razorpay", initalPayPayload);
  }

  verifyOrderPayment(verifyKeys): Observable<any> {
    let headers = new HttpHeaders({ 'x-razorpay-signature': verifyKeys.razorpay_signature });
    let options = { headers: headers };
    return this.http.post(this.baseUrl + 'api/order/verifyOrderPayment', verifyKeys, options)
  }

  getBuyerOrders(id, status): Observable<any> {
    return this.http.get(this.baseUrl +`api/order/getBuyerOrders/${id}/${status}`)
  }

  getSellerOrders(id, status): Observable<any> {
    return this.http.get(this.baseUrl +`api/order/getSellerOrders/${id}/${status}`)
  }







  placeorder(order): Observable<any> {
    return this.http.post<any>(this.baseUrl + "api/order/placeorder", order);
  }

  getorderbybuyerid(buyerid) {
    return this.http.get<any>(this.baseUrl + "api/order/user/getmyorder/" + buyerid)
  }

  postuseraddress(useraddress) {
    return this.http.post<any>(this.baseUrl + "useraddress", useraddress);
  }

  getuseraddressbyuserid(userid) {
    return this.http.get<any>(this.baseUrl + "api/useraddressbyuserid/" + userid)
  }

  getuseraddresscount(customerid): Observable<any> {
    return this.http.get<any>(this.baseUrl + "countaddress/" + customerid)
  }

  getdeleteuseraddress(customerid): Observable<any> {
    return this.http.get<any>(this.baseUrl + "delete/useraddress/" + customerid)
  }

  getuseraddressbyid(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + "useraddress/" + id)
  }

  updateuseraddress(address) {
    return this.http.post<any>(this.baseUrl + "updateuseraddress", address)
  }
} 