import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {SellerService} from '../seller.service';
@Component({
  selector: 'app-allitem',
  templateUrl: './allitem.component.html',
  styleUrls: ['./allitem.component.css']
})
export class AllitemComponent implements OnInit {

 
  items:any;
  deleteitem:any
 user:any;
  constructor(private SellerService :SellerService) { }

  ngOnInit(): void {
    this.user=(JSON.parse(sessionStorage.getItem('data')))
    if((JSON.parse(sessionStorage.getItem('data')).usertype)==='seller'){
      this.SellerService.getitembyuserid(this.user._id).subscribe(data=>{
        this.items=data.data.items;
  
        console.log(this.items)
      })
    }else{
      console.log("user does not exit")
    }
  }

  removeitem(itemid){
    Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      if((JSON.parse(sessionStorage.getItem('data')).usertype)==='seller'){
        this.SellerService.getitemdelete(itemid,this.user._id).subscribe(data=>{
          this.deleteitem=data;
        })
      }else{
        console.log("user does not exit")
      }
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
   

}
  }     
   
 