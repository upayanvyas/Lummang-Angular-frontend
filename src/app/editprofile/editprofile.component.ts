import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';
import { FormBuilder, FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  editprofile=new FormGroup({
    _id:new FormControl(''),
    companyname:new FormControl(''),
    companyownername:new FormControl(''),
    businesspancardno:new FormControl(''),
   
   // udyamregistrationcertificate:new FormControl(''),
    currentaccountno:new FormControl(''),
    IFsc:new FormControl(''),
   
    typeofbusiness:new FormControl(''),
    passbookicon:new FormControl(''),
    pincode:new FormControl(''),

    Phoneno:new FormControl(''),
Gstcertificate:new FormControl(''),


  })
  loginform:FormGroup;
  images:any;
  uploadform:FormGroup;
customerid=0
customer:any
  
  constructor(  private UserService :UserService,private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
 
    this.uploadform= this.formBuilder.group({
      companyname:[''],
      companyownername:[''],
      businesspancardno:[''],
     
      udyamregistrationcertificate:[''], 
     
      typeofbusiness:[''], 
      currentaccountno:[''],
      IFsc:[''],
      passbookicon:[''],
      pincode:[''],
      
      Phoneno:[JSON.parse(sessionStorage.getItem('data')).Phoneno],
      Gstcertificate:[''],
    })
    this.activatedRoute.params.subscribe(data=>{
      this.customerid=data.id;
    })
    this.UserService.getcustomerbyid(this.customerid).subscribe(data=>
   
      this.editprofile=new FormGroup({
        _id:new FormControl(data.data.users['_id']),
        companyname:new FormControl(data.data.users['companyname']),
        companyownername:new FormControl(data.data.users['companyownername']),
        businesspancardno:new FormControl(data.data.users['businesspancardno']),
        Gstcertificate:new FormControl(data.data.users['Gstcertificate']),
        udyamregistrationcertificate:new  FormControl(data.data.users['udyamregistrationcertificate']),
        currentaccountno:new FormControl(data.data.users['currentaccountno']),
        IFsc:new FormControl(data.data.users['IFsc']),
        
        typeofbusiness:new FormControl(data.data.users['typeofbusiness']),
        pincode:new FormControl(data.data.users['pincode']),
        passbookicon:new FormControl(data.data.users['this.images']),
        Phoneno:new FormControl(data.data.users['Phoneno']),
      
        

      })

     
    )

   
  
     
  } 
  selectimages(event){
    if(event.target.files.length>0){
      const passbookicon=event.target.files[0]
      this.images=passbookicon;
    }
  }
  
  updateuser(){
    
   
   
    this.UserService.updatecustomer(this.editprofile.value).subscribe(data=>{ 
      console.log(data)
    })
  } 

 
  
}
