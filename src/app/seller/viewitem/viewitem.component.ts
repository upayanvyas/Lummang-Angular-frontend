import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {
  items: any;
  itemid=0
  
  
  constructor(private CommonService:SellerService,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.itemid=data.id;
    })

    this.CommonService.getitembyitemid(this.itemid).subscribe(data=>{
      this.items=data.data.items[0];
      
      console.log(this.items)
    //  console.log(this.items.filters[0] )
         
    })  
  }

}
