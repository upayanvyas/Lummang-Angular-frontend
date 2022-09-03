import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellerdashboard',
  templateUrl: './sellerdashboard.component.html',
  styleUrls: ['./sellerdashboard.component.css']
})
export class SellerdashboardComponent implements OnInit {
 customerid= (JSON.parse(sessionStorage.getItem('data')))._id
  customer: any;
   
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void { 
    this.userService.getcustomerbyid(this.customerid).subscribe(
      data=>{
        this.customer=data.data.users
        console.log('customer data: ', data.data.users)
      }
    )
  }

  logout(){
    // hit logout api to clear auth token from user row
    sessionStorage.clear()
    this.router.navigate(['/signup'])
  }

} 
