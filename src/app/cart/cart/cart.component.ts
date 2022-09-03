import { Component, OnInit } from '@angular/core';
import {CartService} from '../../cart/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any;

  constructor(private CartService:CartService) { }
  category: any;
  cartcount:any;
  totalprice:number=0
  mrptotalprice:number=0
  customerid= (JSON.parse(sessionStorage.getItem('data')))
  ngOnInit(): void {
    this.CartService.getcartcount(this.customerid._id).subscribe(data=>{
      this.cartcount=data;
      console.log( this.cartcount)
    })

    this.CartService.getcart(this.customerid._id).subscribe((data)=>{
     
      this.cart=data.cart
      for (let current of this.cart){ 
        this.totalprice +=current.quantity * current.price
       
      }
      for (let current of this.cart){ 
        this.mrptotalprice +=current.quantity * current.mrp
       
      }
      
  })
}


deletecart(cartid){
  this.CartService.deletecart(cartid,this.customerid._id).subscribe(data=>{
    this.cart=data.cart;
   
  } )
  setTimeout(
    function(){
      location.reload();
    },.1000
  )

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

    calculatetotalmrp(){
      let mrptotalprice:number=0;


      for (let current of this.cart){
        mrptotalprice +=current.quantity * current.mrp
       
      }

      console.log(`total mrpprice: ${mrptotalprice}`)
    }


}
