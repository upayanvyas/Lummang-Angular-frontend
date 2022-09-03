import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-toptwoofferproduct',
  templateUrl: './toptwoofferproduct.component.html',
  styleUrls: ['./toptwoofferproduct.component.css']
})
export class ToptwoofferproductComponent implements OnInit {

  category: any;
  categoryid=0;
  user= (JSON.parse(sessionStorage.getItem('data')))
  constructor(private CommonService:SharedService,private activatedRoute:ActivatedRoute) { }
 
  ngOnInit(): void { 
    this.activatedRoute.params.subscribe(data=>{
      this.categoryid=data.id;  
    })

    this.CommonService.getitembycategoryid(this.categoryid).subscribe(data=>{
      this.category=data.data.items;
      console.log(this.category)
    //  console.log(this.items.filters[0] )
       
    }) 
  }
}
 