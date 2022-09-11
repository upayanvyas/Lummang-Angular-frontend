import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css']
})
export class OtpverificationComponent implements OnInit {
  users = new User();
  //Phoneno=new User;
  UserId: any;
  user: any
  alert: boolean = false
  Users: User
  alluser: User[] = []
  username = [];

  constructor(private UserService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem('otp')).otp)
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log('params.data: ', params.data)
      this.user = params.data
    })
  }

  navigate(usertype) {
    let user = JSON.parse(sessionStorage.getItem('data'))
    if (usertype === 'admin') {
      this.router.navigate(['dashboard'])
    }
    else if (usertype === 'buyer') {
      if (user.hasOwnProperty('shopownername')) {
        this.router.navigate(['/home'])
      }
      else {
        this.router.navigate(['/buyer'])
      }
    }
    else if (usertype === 'seller') {
      if (user.hasOwnProperty('companyownername')) {
        this.router.navigate(['/sellerdashboard'])
        console.log(user.hasOwnProperty('companyownername'))
      }
      else {
        this.router.navigate(['/sellerresister'])
      }
    }
    else {
      this.router.navigate(['signup'])
    }
  }


  signupPhoneno() {
    console.log('inside sign up phone........')
    let otp = JSON.parse(sessionStorage.getItem('otp')).otp
    if (this.users.Otp == otp) {
      this.UserService.verifyotp(this.user, this.users).subscribe((res) => {
        sessionStorage.setItem('data', JSON.stringify(res))
        console.log('user type: ', res.usertype)
        this.navigate(res.usertype)
      }, (err) => {

      })
    }
  }
}