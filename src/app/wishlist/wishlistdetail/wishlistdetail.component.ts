import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlistdetail',
  templateUrl: './wishlistdetail.component.html',
  styleUrls: ['./wishlistdetail.component.css']
})
export class WishlistdetailComponent implements OnInit {
  customerid= (JSON.parse(sessionStorage.getItem('data'))._id)
  wishlist: any; 
  
  constructor(private wishlistservice:WishlistService) { }
 
  ngOnInit(): void {

    this.wishlistservice.getwishlist(this.customerid).subscribe(data=>{
      this.wishlist=data.wishlist;
      console.log(data)
      console.log(this.wishlist)
    //  console.log(this.items.filters[0] )
       
    }) 

  
}
deletewishlist(wishlistid){
this.wishlistservice.deletewishlist(wishlistid,this.customerid).subscribe(data=>{
  this.wishlist=data.wishlist;
  setTimeout(
    function(){
      location.reload();  
    },.1000)
} )
}

}
