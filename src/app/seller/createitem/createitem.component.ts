import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { Item } from '../item';
import {SellerService} from '../seller.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'; 


@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.css']
})
export class CreateitemComponent implements OnInit {

  public editor=ClassicEditor;

  constructor(private SellerService :SellerService,private router:Router,private activatedRoute:ActivatedRoute,
    private http:HttpClient ,private formBuilder:FormBuilder) { }
    category:Category[]=[];
  
    item=new Item()
 
 //categoryId="61ad22cb03d697c77e4da701"
 //filter:Category[]=[];
 imgUrl:any;
 images=[];
 items:Category[]=[];
 filterid:Category[]=[];
 private selectedFile;
 categoryid
 uploadform:FormGroup;
 filters:any;
 user:any;
 deleteitem:any;
 

 
  ngOnInit(): void {
    this.user= (JSON.parse(sessionStorage.getItem('data')))

    console.log(JSON.parse(sessionStorage.getItem('data')))
   
    setTimeout(()=>{                           //<<<---using ()=> syntax
      ({ categoryid: (<HTMLInputElement>document.getElementById("primary")).value })
      this.SellerService.getfilterbycategoryid((<HTMLInputElement>document.getElementById("primary")).value ).subscribe(data=>{
        console.log(data)
       
          this.category=data
      })    
 }, 9000);
 




 this.uploadform= this.formBuilder.group({
  itemname:[''],
  sku:[''],
 categoryid:[''],
 hsncode:[''],
  rateofgst:[''],
  height:[''],
  width:[''],
  length:[''],
  weight:[''],
  shortdescription:[''],
  longdescription:[''],
  specification:[''],
//  videourl:[''],
FilterValues:[''],
  primary:[''],
  filter_id:[''],
  metatags:[''],
  metadescription:[''],
  QCStatus:[''],
  QCFailedReason:[''],
  deleveryTerm:[''],
 
  itemid:[''],
  mrp:[''],
  sellingprice:[''],
  currentstock:[''],
  createdBy:[(JSON.parse(localStorage.getItem('data'))._id)],
  vendor:[(JSON.parse(localStorage.getItem('data'))._id)],
  deletedBy:[(JSON.parse(localStorage.getItem('data'))._id)],
})

  
  }
  

  upload(event:any){
    const file=event.target.files[0]
    console.log(file)
  }
  
selectmultipleimages(event){
  if(event.target.files.length>0){
    this.images=event.target.files;
  }
}


 
  createItem(){
    const uploadData=new FormData();
    for(let img of this.images){
      uploadData.append('itemImages',img);
     
    } 
    
    
   // uploadData.append('itemImages',this.selectedFile,this.selectedFile.name);
   
    uploadData.append('itemname',this.uploadform.get('itemname').value);
    uploadData.append('sku',this.uploadform.get('sku').value);
  uploadData.append('categoryid',(<HTMLInputElement>document.getElementById("primary")).value);
   uploadData.append('primary',this.uploadform.get('primary').value);
    uploadData.append('hsncode',this.uploadform.get('hsncode').value);
    uploadData.append('rateofgst',this.uploadform.get('rateofgst').value);
    uploadData.append('height',this.uploadform.get('height').value);
    uploadData.append('width',this.uploadform.get('width').value);
    uploadData.append('length',this.uploadform.get('length').value);
    uploadData.append('weight',this.uploadform.get('weight').value);
    uploadData.append('shortdescription',this.uploadform.get('shortdescription').value);
    uploadData.append('longdescription',this.uploadform.get('longdescription').value);
    uploadData.append('specification',this.uploadform.get('specification').value);
    //uploadData.append('videourl',this.uploadform.get('videourl').value);
    uploadData.append('filter_id',this.uploadform.get('filter_id').value);
    uploadData.append('FilterValues',this.uploadform.get('FilterValues').value);
    uploadData.append('metatags',this.uploadform.get('metatags').value);
    uploadData.append('metadescription',this.uploadform.get('metadescription').value);
    uploadData.append('QCStatus',this.uploadform.get('QCStatus').value);
    uploadData.append('QCFailedReason',this.uploadform.get('QCFailedReason').value);
    uploadData.append('deleveryTerm',this.uploadform.get('deleveryTerm').value);
    uploadData.append('mrp',this.uploadform.get('mrp').value);
    uploadData.append('sellingprice',this.uploadform.get('sellingprice').value);
    uploadData.append('currentstock',this.uploadform.get('currentstock').value);
    uploadData.append('createdBy',this.uploadform.get('createdBy').value);
    uploadData.append('vendor',this.uploadform.get('vendor').value);
    uploadData.append('deletedBy',this.uploadform.get('deletedBy').value);
    
   
    if((JSON.parse(localStorage.getItem('data')).usertype)==='seller'){
  //  this.selectedFile.itemImages = this.selectedFile.name;
    this.http.post("https://demo22.appman.in/api/createitem",uploadData)
    .subscribe(response=>{
      console.log(response)
    
    //}
   console.log('successfully upload')
  }) 
    }else{ 
      console.log("user does not exit")
    }
       


  
}

onSelectfilterid(filterid){
  console.log(filterid.target.value)
  this.SellerService.getfiltervaluesbyfilterid(filterid.target.value).subscribe(data=>{
    console.log(data)
   
      this.filters=data
      console.log(this.filters)
  })    
}


 

}
 
