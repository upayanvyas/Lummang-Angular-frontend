import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import {UserService} from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css']
})
export class OtpverificationComponent implements OnInit {
  users=new User();
  //Phoneno=new User;
   UserId: any;
  user:any 
  alert:boolean=false
  Users:User
  alluser:User[]=[]
  username=[]; 
  
   constructor(private UserService :UserService,private router:Router,private activatedRoute:ActivatedRoute ) { }
 
   ngOnInit(): void {
     
     console.log(JSON.parse(sessionStorage.getItem('otp')).otp)
     this.activatedRoute.queryParams.subscribe((params:any)=>{
     //  console.log(params)
       this.user=params.data
      
     })
     
     
   }
   signupPhoneno(){
    if(this.users.Otp==(JSON.parse(sessionStorage.getItem('otp')).otp)){
     this.UserService.verifyotp(this.user,this.users).subscribe(  
       data =>{
         console.log(data)
        
          var json=data
         
          sessionStorage.setItem('data',JSON.stringify(json)); 
          console.log((JSON.parse(sessionStorage.getItem('data')).usertype))
          if((JSON.parse(sessionStorage.getItem('data')).usertype)=='seller'){
  
            if (json.hasOwnProperty('companyownername')){
           
              this.router.navigate(['/sellerdashboard'])
              console.log(json.hasOwnProperty('companyownername'))
              }
         
             
           
         else{
         
          this.router.navigate(['/sellerresister'])
          }
        }
        else{
          if (json.hasOwnProperty('shopownername')){
          
            this.router.navigate(['/home'])
            }
            else{
            this.router.navigate(['/buyer'])
            }
        }
        }
        
     
          ) 
    } else{
      this.alert=true
      
    }
   }
  }