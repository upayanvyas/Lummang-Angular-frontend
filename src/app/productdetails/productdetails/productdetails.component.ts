import { Component,Input, OnInit} from '@angular/core';
import {ProductdetailsService} from '../../productdetails/productdetails.service';
import { ActivatedRoute } from '@angular/router';
import { WishlistService } from '../../wishlist/wishlist.service';
import {CartService} from '../../cart/cart.service';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'] 
})
export class ProductdetailsComponent implements OnInit {
  category: any;
  categoryid=0
  @Input() items: any;
  itemid=0
  customerid= (JSON.parse(sessionStorage.getItem('data')))
  gst=(JSON.parse(sessionStorage.getItem('data')).Gstcertificate)
 @Input() addtwishlist:boolean
 isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
    
  wishlist: any;
  wishlistdata: any;
  constructor(private CommonService:ProductdetailsService,private activatedRoute:ActivatedRoute,
    private wishlistservice:WishlistService,private CartService:CartService) { }
  
  ngOnInit(): void {
 

   console.log(this.gst)
  

  this.activatedRoute.params.subscribe(data=>{
      this.itemid=data.id;
    })

   
    this.CommonService.getitembyitemid(this.itemid).subscribe(data=>{
      
     
      this.items=data.data.items[0];
       
      
      
    
     console.log(data)
     console.log(this.items)
         
   

    this.CommonService.getitembycategory(this.items.categoryid).subscribe(data=>{
      this.category=data.data.items;
      console.log(this.category)
      console.log(this.items.categoryid)
    
  })  
})
    this.loadwishlist()
  }

  addtowishlist(itemid){
    this.wishlistservice.addwishlist(this.customerid._id,itemid).subscribe(data =>{
this.addtwishlist=true
setTimeout(
  function(){ 
    location.reload();  
  },.1000) 
    console.log("sucessfully uploded");
      console.log(data)  
   })
  } 
  deletewishlist(itemid){
    this.wishlistservice.deletewishlistbyitemid(this.customerid._id,itemid,this.customerid._id).subscribe(data=>{
      this.addtwishlist=false
      this.wishlist=data;
      setTimeout(
        function(){
          location.reload();
        },.1000)
      console.log(data)
    } )
    }
    loadwishlist(){
      this.wishlistservice.getviewwishlist(this.customerid._id,this.itemid).subscribe(Wishlistitem=>{
     
       this.addtwishlist=Wishlistitem.Wishlistitem[0].itemid
        console.log( Wishlistitem)
       // console.log(this.items.filters[0] )
       console.log(this.addtwishlist)

         
      }) 
    }

    addproducttocart(itemid,sellerid){
      this.CartService.addcart(this.customerid._id,itemid,sellerid).subscribe(data=>{
        setTimeout(
          function(){
            location.reload();
          },.1000)
        console.log(data)
      })

    }

  }
