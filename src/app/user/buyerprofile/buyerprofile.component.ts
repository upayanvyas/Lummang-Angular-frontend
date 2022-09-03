import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-buyerprofile',
  templateUrl: './buyerprofile.component.html',
  styleUrls: ['./buyerprofile.component.css']
})
export class BuyerprofileComponent implements OnInit {
  customerid= (JSON.parse(sessionStorage.getItem('data')))._id
  customer: any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getcustomerbyid(this.customerid).subscribe(
      data=>{
        this.customer=data.data.users
        console.log(data.data.users)
      }
    )
    
  }

} 
