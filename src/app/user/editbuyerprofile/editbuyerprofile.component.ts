import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-editbuyerprofile',
  templateUrl: './editbuyerprofile.component.html', 
  styleUrls: ['./editbuyerprofile.component.css']
})
export class EditbuyerprofileComponent implements OnInit {
  uploadform=new FormGroup({
    _id:new FormControl(''),
    shopname:new FormControl(''),
    shopownername:new FormControl(''),
    businesspancardno:new FormControl(''),
   
   // udyamregistrationcertificate:new FormControl(''),
    
    typeofbusiness:new FormControl(''),
    
    pincode:new FormControl(''),

    Phoneno:new FormControl(''),
Gstcertificate:new FormControl(''),


  })
  loginform:FormGroup;
  images:any;
 // uploadform:FormGroup;
customerid=0
customer:any

  constructor( private UserService :UserService,private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.uploadform= this.formBuilder.group({
      shopname:[''],
      shopownername:[''],
      businesspancardno:[''],
     
      udyamregistrationcertificate:[''], 
     
      typeofbusiness:[''], 
     
      pincode:[''],
      
      Phoneno:[JSON.parse(sessionStorage.getItem('data')).Phoneno],
      Gstcertificate:[''],
    })

    this.activatedRoute.params.subscribe(data=>{
      this.customerid=data.id;
    })
    this.UserService.getcustomerbyid(this.customerid).subscribe(data=>
   
      this.uploadform=new FormGroup({
        _id:new FormControl(data.data.users['_id']),
        shopname:new FormControl(data.data.users['shopname']),
        shopownername:new FormControl(data.data.users['shopownername']),
       businesspancardno:new FormControl(data.data.users['businesspancardno']),
        Gstcertificate:new FormControl(data.data.users['Gstcertificate']),
        udyamregistrationcertificate:new  FormControl(data.data.users['udyamregistrationcertificate']),
        
        typeofbusiness:new FormControl(data.data.users['typeofbusiness']),
        pincode:new FormControl(data.data.users['pincode']),
       
        Phoneno:new FormControl(data.data.users['Phoneno']),
      
        

      })

     
    )

  }

}
