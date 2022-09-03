import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getimageslider() {
    return this.http.get<any>("https://demo22.appman.in/api/cms/getimagesliders");
  }

  dealoftheday() {
    return this.http.get<any>("http://localhost:4000/api/dealsoftheday/getdealsoftheday");
  }

  toptwooffer() {
    return this.http.get<any>("https://demo22.appman.in/viewtopsevenoffer")
  }

  topcategories() {
    return this.http.get<any>("https://demo22.appman.in/api/topcategoriesview")
  }

  ourclients() {
    return this.http.get<any>("http://localhost:4000/api/getclint")
  }

  newarrivals() {
    return this.http.get<any>("https://demo22.appman.in/getnewarrivals")
  }

  secondtwooffer() {
    return this.http.get<any>("http://localhost:4000/api/gettwooffer")
  }

  trendingproduct() {
    return this.http.get<any>("http://localhost:4000/api/gettrendingproduct")
  }

  trendingproduct2() {
    return this.http.get<any>("http://localhost:4000/api/gettrendingproduct2")
  }

  newarrivalsitem() {
    return this.http.get<any>("http://localhost:4000/api/getnewarrivalsitem")
  }

  bestseller() {
    return this.http.get<any>("http://localhost:4000/api/getbestseller")
  }

  mostpopularitem() {
    return this.http.get<any>("http://localhost:4000/api/getmostpopularitem")
  }

  mostfeatureditem() {
    return this.http.get<any>("http://localhost:4000/api/getfeatureditem")
  }

  topbestselleritem() {
    return this.http.get<any>("http://localhost:4000/api/gettopbestseller")
  }

  hotdeals() {
    return this.http.get<any>("http://localhost:4000/api/getcreatehotdeals")
  }

  promotionbanner() {
    return this.http.get<any>("https://demo22.appman.in/api/getpromotionbanner")
  }

  getallhotdeals() {
    return this.http.get<any>("http://localhost:4000/api/getallhotdeals")
  }

}
