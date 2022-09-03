import { Component, OnInit } from '@angular/core';
import scrollbar from "smooth-scrollbar";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../user/user.service';
import {SellerService} from '../../seller/seller.service';


@Component({
  selector: 'app-ordercomplete',
  templateUrl: './ordercomplete.component.html',
  styleUrls: ['./ordercomplete.component.css']
})
export class OrdercompleteComponent implements OnInit {
  rawf10p: string = ' '
primary=0
data:any;
primaryid:any 
  sceondprimaryid: any;
  sceondprimary: any;
  sceondprimaryy: any;

  showme:boolean=false
  show:boolean=false
  filter: any;
  filtervalue: any;
  categoryid: any;
  filters: any;
  filtervalues: any;

  constructor(private userService:UserService,private SellerService :SellerService) { }

  ngOnInit(): void { 
    
      


this.userService.getcategorybyprimary(this.primary).subscribe(data=>{

  this.data=data.category
  console.log(data.category[0]._id)
  
 
})
 


  
}
 


onSelectprimaryid(primaryid){
  console.log(primaryid.target.value)
  
  this.userService.getcategorybyprimary(primaryid.target.value).subscribe(data=>{
    this.showme=!this.showme
    this.sceondprimary=data.category
    console.log(data) 
  })
} 
onSelectprimaryidd(primaryid){
  console.log(primaryid.target.value)
  this.userService.getcategorybyprimary(primaryid.target.value).subscribe(data=>{
    this.show=!this.show
    this.sceondprimaryy=data.category
    console.log(data)
  })
} 



getfilterBycategoryid(primaryid){
  console.log(primaryid.target.value)
  this.SellerService.getfilterbycategoryid(primaryid.target.value ).subscribe(data=>{
    console.log(data)
   this.filter=data
   console.log(this.filter) 
     
  })    
  
} 

getfiltervalueBycategoryidandfilter(primaryid){
  console.log(primaryid.target.value)
  this.SellerService.getfilterandfiltervaluebycategoryid(primaryid.target.value ).subscribe(data=>{
    console.log(data)
   this.filters=data.filtervalue  
  
   console.log(this.filters[0].filters.filterName)
   console.log(this.filters[0].filtervalues)  
   
      
  })    
  
} 



getfiltervalueBycategoryidandfilterr(categoryid){
  console.log(this.sceondprimaryy[0]._id)
  console.log(categoryid.target.value)
 
  this.SellerService.getfiltervaluebycategoryidandfilter(this.sceondprimaryy[0]._id,categoryid.target.value ).subscribe(data=>{
    console.log(data)
    this.filtervalue=data
     
  })    
  
} 




}