import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

function _window(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  get nativeWindow(): any {
    return _window();
  }

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getitembycategoryid(categoryid) {
    return this.http.get<any>(this.baseUrl+"api/item/getitemsbycategoryid/" + categoryid)
  }

  createpayment(amount) {
    return this.http.post<any>(this.baseUrl + "api/razorpay", amount)
  }

}
