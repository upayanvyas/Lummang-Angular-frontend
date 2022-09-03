import { Component, OnInit } from '@angular/core';
import {CartService} from '../../cart/cart.service';

@Component({
  selector: 'app-cartdetail',
  templateUrl: './cartdetail.component.html',
  styleUrls: ['./cartdetail.component.css']
})
export class CartdetailComponent implements OnInit {

  customerid= (JSON.parse(sessionStorage.getItem('data'))._id)
  cart:any;
  quantity;
  totalprice:number=0
  totalquantity: number=0;
 
  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    console.log((JSON.parse(sessionStorage.getItem('data'))._id))
    this.CartService.getcart(this.customerid).subscribe((data)=>{
     
      this.cart=data.cart
     
     
    
      var json=data.cart
      console.log(json)
      
      localStorage.setItem('cart',JSON.stringify(json)); 
      console.log((JSON.parse(localStorage.getItem('cart'))))




for (let current of this.cart){ 
  this.totalprice +=current.quantity * current.itemid.price
 
}

for (let current of this.cart){ 
  this.totalquantity +=current.quantity 
}

console.log(`total quantity: ${this.totalquantity}`)
})
  } 
 
  deletecart(cartid){
    this.CartService.deletecart(cartid,this.customerid).subscribe(data=>{
      this.cart=data.cart;
    } )

}

plus(cart){
  if(cart.quantity !=5){
    cart.quantity++
  }



}
minus(cart){
  if(cart.quantity !=1){
    cart.quantity-=1
  }
  
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
          totalprice +=current.quantity * current.itemid.price
         
         
        }
        console.log(`total price: ${totalprice}`)
        
      }
      calculatetotalquantity(){
        let totalquantoty:number=0;


        for (let current of this.cart){
          totalquantoty +=current.quantity 
        }

        console.log(`total quantity: ${totalquantoty}`)
      }
}