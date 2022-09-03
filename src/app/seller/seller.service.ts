import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute ) { }
  

  public createitem(item:Item):Observable<any>{
    return this.http.post<any>("https://demo22.appman.in/api/createitem",item)
 
 
  }
 
  public getfilterbycategoryid(Categoryid){
    return this.http.get<any>("https://demo22.appman.in/api/getFiltersByCategoryId/"+ Categoryid)

  }
  public getfiltervaluesbyfilterid(Categoryid){
    return this.http.get<any>("https://demo22.appman.in/api/Filtervalues/getFiltervaluesByfilterId/"+ Categoryid)

  }

  public getitembyuserid(createdBy){
    return this.http.get<any>("https://demo22.appman.in/api/item/getitembyuserid/" +createdBy)
  }

  public getitemdelete(itemid,deletedBy){

    return this.http.get<any>(`https://demo22.appman.in/api/item/deleteitem/${itemid}/${deletedBy}`,{})
 
    
  } 
  getitembyitemid(itemid){
    return this.http.get<any>("https://demo22.appman.in/api/item/itemdetailsbyitemid/" +itemid)
  }
 
  public getfiltervaluebycategoryidandfilter(Categoryid,filterid){
    return this.http.get<any>(`https://demo22.appman.in/api/getFilterByCategoryId/${Categoryid}/${filterid}`,{})

  }

  public getfilterandfiltervaluebycategoryid(Categoryid){
    return this.http.get<any>(`https://demo22.appman.in/api/getFiltervaluesByCategoryId/${Categoryid}`,{})

  } 


  public getorderdetailsbycustomerid(customeid){
    return this.http.get<any>(`http://localhost:4000/api/order/user/getmyorder/${customeid}`,{})

  } 

 
  public productlisting(item):Observable<any>{
    return this.http.post<any>("https://demo22.appman.in/item/productlisting/",item)
    
     
     
    
       
    

  } 
 
}

 