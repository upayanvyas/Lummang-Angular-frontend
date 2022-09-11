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
}
