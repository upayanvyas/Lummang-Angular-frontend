import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-dealsofthedayproduct',
  templateUrl: './dealsofthedayproduct.component.html',
  styleUrls: ['./dealsofthedayproduct.component.css']
})
export class DealsofthedayproductComponent implements OnInit {

  user= (JSON.parse(sessionStorage.getItem('data')))
  category: any;
  categoryid=0
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
 
  