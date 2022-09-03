import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service'

@Component({
  selector: 'app-phonenosignup',
  templateUrl: './phonenosignup.component.html',
  styleUrls: ['./phonenosignup.component.css']
})
export class PhonenosignupComponent implements OnInit {
  user = new User();
  loginForm = new FormGroup({
    Phoneno: new FormControl('', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]),
    usertype: new FormControl('', [Validators.required])


  })
  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {}

  registerPhoneno() {
    this.UserService.mobilenoresister(this.loginForm.value).subscribe(
      res => {
        this.UserService.getotpapi(this.loginForm.value.Phoneno).subscribe(otp => {
          var json = otp
          sessionStorage.setItem('otp', JSON.stringify(json));
          console.log((JSON.parse(sessionStorage.getItem('otp')).otp))
          console.log((JSON.parse(sessionStorage.getItem('otp'))))
          // console.log(otp)

        })
        if (this.loginForm.value.Phoneno > 0) {
          this.router.navigate(['otp'], { queryParams: { data: this.loginForm.value.Phoneno } })
          console.log(this.user.Phoneno)
        }
      }

    )

  }

}