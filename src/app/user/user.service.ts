import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any;
  baseUrl = environment.baseUrl


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }


  // mobile no verification 
  public mobilenoresister(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + "api/createotp", user)
  }

  //verify otp
  public verifyotp(Phoneno, user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + `api/verifyotp/${Phoneno}`, user)
  }

  public getcustomerbyid(customerid) {
    return this.http.get<any>(this.baseUrl + "api/customerdetails/" + customerid)
  }

  getalluser() {
    return this.http.get<User>(this.baseUrl+"getalluser");
  }

  sellerresister(customer) {
    return this.http.post<any>(this.baseUrl+"sellerregister/", customer)
  }

  buyerregister(customer) {
    return this.http.post<any>(this.baseUrl+"buyerregister/", customer)
  }

  updatecustomer(customer) {
    return this.http.post<any>(this.baseUrl+"updatecustomer/", customer)
  }

  getcategorybyprimary(primary) {
    return this.http.get<any>(this.baseUrl+"get/" + primary)
  }
  // generate otp
  getotpapi(phoneno) {
    return this.http.get<any>(this.baseUrl+"api/sms/sendsignupotp/" + phoneno)
  }

  //gst validation
  gstvalidation(gstinno) {
    return this.http.post<any>(this.baseUrl+"otp/" + gstinno, {})
  }

  //account no validation
  accountnovalidation(ifsc, account_number, name, mobile) {
    return this.http.post<any>(this.baseUrl+`phoneno/${ifsc}/${account_number}/${name}/${mobile}`, {})
  }

  //pincode validation
  pincodevalidation(pincode) {
    return this.http.post<any>(this.baseUrl+"pincode", { pincode })
  }
}




