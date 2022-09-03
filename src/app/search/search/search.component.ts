import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user: any;
  searchproduct: boolean;
  addtwishlist: boolean = false;
  item: any;
  items: any;
  gst = (JSON.parse(sessionStorage.getItem('data')).Gstcertificate)
  constructor(private activatedRoute: ActivatedRoute, private CommonService: SearchService,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('data'))
    console.log(JSON.parse(localStorage.getItem('data'))._id)
    const itemname = this.activatedRoute.snapshot.paramMap.get('itemname');
    console.log('itemname : ', itemname)

    this.CommonService.getitembyitemname(itemname).subscribe(
      response => {
        this.item = response.data.items
        console.log(this.item)
      }
    )
  }

}