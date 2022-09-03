import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {UserService} from '../../user/user.service' ;
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sellerresister',

  templateUrl: './sellerresister.component.html',
  styleUrls: ['./sellerresister.component.css']
})
export class SellerresisterComponent implements OnInit {

  

  loginform:FormGroup;
  images:any;
  image:any;
  uploadform:FormGroup;

  constructor(private UserService :UserService,
    private http:HttpClient,private router:Router,private formBuilder:FormBuilder) { 
 
     
} 
 
  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem('data')).Phoneno)
    this.uploadform= this.formBuilder.group({
      companyname:['',[Validators.required]],
      companyownername:['',[Validators.required]], 
      businesspancardno:['',[Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      Gstcertificate:['',[Validators.required]],
      
      udyamregistrationcertificate:['',[Validators.required]],  
      typeofbusiness:['',[Validators.required]],
      currentaccountno:['',[Validators.required]],
      IFsc:['',[Validators.required]],
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

selectimage(event){
  if(event.target.files.length>0){
    const udyamregistrationcertificate=event.target.files[0]
    this.image=udyamregistrationcertificate;
  }
}


sellerregister(){ 
  const uploadData=new FormData(); 
  
    uploadData.append('passbookicon',this.images);
    uploadData.append('udyamregistrationcertificate',this.image);
   
   
 
  
   
    
 // uploadData.append('itemImages',this.selectedFile,this.selectedFile.name);
 uploadData.append('companyownername',this.uploadform.get('companyownername').value);
  uploadData.append('companyname',this.uploadform.get('companyname').value);
  
uploadData.append('businesspancardno',this.uploadform.get('businesspancardno').value);
  uploadData.append('Gstcertificate',this.uploadform.get('Gstcertificate').value);
  //uploadData.append('udyamregistrationcertificate',this.uploadform.get('udyamregistrationcertificate').value);
  uploadData.append('typeofbusiness',this.uploadform.get('typeofbusiness').value);
  uploadData.append('currentaccountno',this.uploadform.get('currentaccountno').value);
  uploadData.append('IFsc',this.uploadform.get('IFsc').value);
  uploadData.append('Phoneno',this.uploadform.get('Phoneno').value);
  uploadData.append('pincode',this.uploadform.get('pincode').value);
  
  
   
  if((JSON.parse(sessionStorage.getItem('data')).usertype)==='seller'){
 

  this.UserService.gstvalidation( this.uploadform.get('Gstcertificate').value).subscribe(
    (data)=>{
      console.log(data)
  console.log(data.code)
  if(data.code==200){
    this.UserService.accountnovalidation(this.uploadform.get('IFsc').value,this.uploadform.get('currentaccountno').value
    ,this.uploadform.get('companyownername').value,this.uploadform.get('Phoneno').value).subscribe((data)=>{
      console.log(data)
      if(data.code==200){

       this.UserService.pincodevalidation(this.uploadform.get('pincode').value).subscribe((data)=>{
         console.log(data)
         if(data.data[this.uploadform.get('pincode').value].xpressbees.district !=0){
          this.http.post("https://demo22.appman.in/api/sellerregister/",uploadData)
          .subscribe(response=>{
            console.log(response)
          
          //} 
          this.router.navigate(['sellerdashboard'])
        
         console.log('successfully upload')
        }) 
         }

         else{
   
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid pincode!',
           
          })
          
    
      }
       }) 
        
      }
      else{
   
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid Account no!',
         
        })
        
        
  
    }
    })
    
  }
  else{
   
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Gst no!',
       
      })
      

  }
    })


   

  
  }else{ 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Uer Does Not Exit!',
     
    })
    console.log("user does not exit")
  }
     



}

} 