import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-landing1',
  templateUrl: './landing1.component.html',
  styleUrls: ['./landing1.component.css']
})
export class Landing1Component implements OnInit {

  constructor(private SharedService:SharedService) { }
  payment=909

  ngOnInit(): void {
  }
 
   options = {
    "key": 'rzp_test_0FDKYlrG8MBQ8Q',
     // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
   "order_id": "order_JfuRChaaxolBE8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  "handler": function (response){
    alert(response.razorpay_payment_id);
    alert(response.razorpay_order_id);

    alert(response.razorpay_signature)
},
   // },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9583482941"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

rzp1
pay(){
  this.SharedService.createpayment(this.payment).subscribe(data=>{

  }

  )
 this.rzp1 = new this.SharedService.nativeWindow.Razorpay(this.options)

 this.rzp1.on('payment.failed', function (response){
 

});
    this.rzp1.open();
}
}
