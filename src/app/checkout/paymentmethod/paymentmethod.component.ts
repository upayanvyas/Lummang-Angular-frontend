import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Checkout } from '../checkout';
import {CheckoutService} from '../checkout.service';
import {CartService} from '../../cart/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.component.html',
  styleUrls: ['./paymentmethod.component.css']
})
export class PaymentmethodComponent implements OnInit {


  order=new Checkout();
  item:Array<any>=[(JSON.parse(localStorage.getItem('cart')))]
  customerid=(JSON.parse(sessionStorage.getItem('data')))
    cart=[];
    totalprice:number=0;
   cartid=[]
  totalquantity: number=0;
  constructor(private formBuilder:FormBuilder,private CheckoutService:CheckoutService
    , private CartService:CartService,private http:HttpClient) { }

  ngOnInit(): void {

    this.CartService.getcart(this.customerid._id).subscribe((data)=>{
        
      this.cart=data.cart
     console.log(data)
     console.log(this.cart)
    

     for (let data of this.cart){
       this.cartid =data.itemid;
     console.log(data.itemid)
     
   
    }


for (let current of this.cart){
  this.totalprice +=current.quantity * current.price
 
}
console.log(`total price: ${this.totalprice}`)
for (let current of this.cart){ 
  this.totalquantity +=current.quantity 
}

console.log(`total quantity: ${this.totalquantity}`)

})
  }
  deletecart(cartid){
    this.CartService.deletecart(cartid,this.customerid._id).subscribe(data=>{
      this.cart=data.cart;
    } )
  
  }
  
  incquantity(cartid,quantity){
      
    this.CartService.geteditcart(cartid,++quantity).subscribe(data=>{
      setTimeout(
        function(){
          location.reload();
        },.1000
      );
      console.log(data)
    })
  }
  
  decquantity(cartid,quantity){
    
    this.CartService.geteditcart(cartid,quantity).subscribe(data=>{
      
      
        setTimeout(
          function(){
            location.reload();
          },.1000
        );
         console.log("Response recieved");
         if(quantity ===0){
          this.deletecart(cartid)
         }
       
        })
      }
        
  
      calculatetotalprice(){
        let totalprice:number=0;
  
  
        for (let current of this.cart){
          totalprice +=current.quantity * current.price
         
        }
  
        console.log(`total price: ${totalprice}`)
      }
  
  
  



}
