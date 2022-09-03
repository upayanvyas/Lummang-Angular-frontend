import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {UserService} from '../../user/user.service';


@Component({ 
  selector: 'app-buyerresister',
  templateUrl: './buyerresister.component.html',
  styleUrls: ['./buyerresister.component.css']
})
export class BuyerresisterComponent implements OnInit {

  uploadform:FormGroup;
  images: any;
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  constructor(private UserService :UserService,
    private http:HttpClient,private router:Router,private formBuilder:FormBuilder) { 
 
     
} 

  ngOnInit(): void {

    this.uploadform= this.formBuilder.group({
      shopownername:['',[Validators.required]], 
      shopname:['',[Validators.required]],
      businesspancardno:['',[Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      Gstcertificate:[''], 
      
      udyamregistrationcertificate:[''], 
      typeofbusiness:['',[Validators.required]],
     
      pincode:['',[Validators.required]], 

      
      Phoneno:[JSON.parse(sessionStorage.getItem('data')).Phoneno]
    })
  }
 
  selectimages(event){
    if(event.target.files.length>0){
      const passbookicon=event.target.files[0]
      this.images=passbookicon;
    
    }
  }
  selectimage1(event){
    if(event.target.files.length>0){
      const passbookicon=event.target.files[0]
      this.image1=passbookicon;
    
    }
  }
  selectimages2(event){
    if(event.target.files.length>0){
      const passbookicon=event.target.files[0]
      this.image2=passbookicon;
    
    }
  }
  selectimages3(event){
    if(event.target.files.length>0){
      const passbookicon=event.target.files[0]
      this.image3=passbookicon;
    
    }
  }
  selectimage4(event){
    if(event.target.files.length>0){
      const passbookicon=event.target.files[0]
      this.image4=passbookicon;
    
    }
  }
  
  buyerregister(){ 
    const uploadData=new FormData(); 
  
    
    uploadData.append('udyamregistrationcertificate',this.images);
   
    uploadData.append('frontsidephoto',this.image1);
   
  
    uploadData.append('backsidephoto',this.image2);
   
  
    uploadData.append('leftsidephoto',this.image3);
   
  
    uploadData.append('rightsidephoto',this.image4);
   
  
    
    
 // uploadData.append('itemImages',this.selectedFile,this.selectedFile.name);
 
  uploadData.append('shopownername',this.uploadform.get('shopownername').value);
  uploadData.append('shopname',this.uploadform.get('shopname').value);
uploadData.append('businesspancardno',this.uploadform.get('businesspancardno').value);
  uploadData.append('Gstcertificate',this.uploadform.get('Gstcertificate').value);
  //uploadData.append('udyamregistrationcertificate',this.uploadform.get('udyamregistrationcertificate').value);
  uploadData.append('typeofbusiness',this.uploadform.get('typeofbusiness').value);
 
  uploadData.append('Phoneno',this.uploadform.get('Phoneno').value);
  uploadData.append('pincode',this.uploadform.get('pincode').value);
  
  
      
  if((JSON.parse(sessionStorage.getItem('data')).usertype)==='buyer'){
 
    if(this.uploadform.get('Gstcertificate').value !=0){

  this.UserService.gstvalidation( this.uploadform.get('Gstcertificate').value).subscribe(
    (data)=>{
      console.log(data)
  console.log(data.code)
  if(data.code==200){
   

       this.UserService.pincodevalidation(this.uploadform.get('pincode').value).subscribe((data)=>{
         console.log(data)
         if(data.data[this.uploadform.get('pincode').value].xpressbees.district !=0){
          this.http.post("https://demo22.appman.in/api/buyerregister/",uploadData)
          .subscribe(response=>{
            console.log(response)
          
          //}
          this.router.navigate(['home'])
        
         console.log('successfully upload')
        }) 
         }

         else{
   
          Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: 'Invlid pincode!',
           
          })
          
    
      }
       }) 
        
      
        
  
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Sorry...',
        text: 'Invalid gst no!',
       
      })
      
    }
    })
  
    
  
  }
  else{
    this.UserService.pincodevalidation(this.uploadform.get('pincode').value).subscribe((data)=>{
      console.log(data)
      if(data.data[this.uploadform.get('pincode').value].xpressbees.district !=0){
       this.http.post("https://demo22.appman.in/api/buyerregister/",uploadData)
       .subscribe(response=>{
         console.log(response)
       
       //}
       this.router.navigate(['home'])
     
      console.log('successfully upload')
     }) 
      }

      else{

       Swal.fire({
         icon: 'error',
         title: 'Sorry...',
         text: 'Invlid pincode!',
        
       })
       
 
   }
    }) 
     
  }

  
      

  
   


   

  
  }else{ 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'User Does Not Exit!',
     
    })
    console.log("user does not exit")
  }
     



}

} 



