import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl

  constructor(private http: HttpClient) {}

   ngOnInit(): void {
    this.baseUrl = environment.baseUrl
   }

  getAllOrders(): Observable<any> {
    return this.http.get('http://localhost:4000/api/order/all')
  }

  getAllSellers():Observable<any> {
    return this.http.get('http://localhost:4000/api/order/sellers')
  }

  getAllBuyers():Observable<any> {
    return this.http.get('http://localhost:4000/api/order/customers')
  }

  getOrdersBySellerId(obj):Observable<any> {
    return this.http.get(`http://localhost:4000/api/order/seller/${obj.sellerid}/${obj.start_dt}/${obj.end_dt}`)
  }

  getOrdersByBuyerId(obj):Observable<any> {
    return this.http.get(`http://localhost:4000/api/order/customer/${obj.customerid}/${obj.start_dt}/${obj.end_dt}`)
  }

}
