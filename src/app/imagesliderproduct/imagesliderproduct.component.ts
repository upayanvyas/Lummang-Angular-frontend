import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { WishlistService } from '../wishlist/wishlist.service';

@Component({
  selector: 'app-imagesliderproduct',
  templateUrl: './imagesliderproduct.component.html', 
  styleUrls: ['./imagesliderproduct.component.css']
}) 
export class ImagesliderproductComponent implements OnInit {
  category: any;
  categoryid=0
  wishlist: any;
  wishlistdata: any;
  @Input() items: any;
  itemid=0
  customerid= (JSON.parse(sessionStorage.getItem('data')))
 @Input() addtwishlist:boolean 
  user= (JSON.parse(sessionStorage.getItem('data')))
  constructor(private CommonService:SharedService,private activatedRoute:ActivatedRoute,private wishlistservice:WishlistService,) { }

  ngOnInit(): void {

    

    this.activatedRoute.params.subscribe(data=>{
      this.categoryid=data.id;
    }) 

    this.CommonService.getitembycategoryid(this.categoryid).subscribe(data=>{
      this.category=data.data.items;
      console.log(this.category)
      this.itemid=data.data.items[0]._id
    //  console.log(this.items.filters[0] )
    console.log(this.itemid)
       
    }) 
    this.loadwishlist()
  }

 
  deletewishlist(itemid){
    this.wishlistservice.deletewishlistbyitemid(this.customerid._id,itemid,this.customerid._id).subscribe(data=>{
      this.addtwishlist=false
      this.wishlist=data;
      console.log(data)
    } )
    }
    loadwishlist(){
      this.wishlistservice.getviewwishlist(this.customerid._id, '61dbce47a2444b393ebe6e1f').subscribe(Wishlistitem=>{
     
       this.addtwishlist=Wishlistitem.Wishlistitem[0]
        console.log( Wishlistitem)
       // console.log(this.items.filters[0] )
       console.log(this.addtwishlist)
       console.log(this.itemid)

         
      }) 
    }


} 
