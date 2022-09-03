import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { SellerService } from '../seller/seller.service';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';
import { Item } from '../seller/item'
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css']
})
export class ProductlistingComponent implements OnInit {
  primary = 0
  data: any;
  images: any;
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  primaryid: any
  sceondprimaryid: any;
  sceondprimary: any;
  sceondprimaryy: any;
  showgst: boolean = false;
  showme: boolean = false
  show: boolean = false
  filter: any;
  filtervalue: any;
  categoryid: any;
  filters: any;
  filtervalues: any;
  uploadform: FormGroup;
  image5: any;
  image6: any;
  selctvalue: any
  select: any;
  item: Item[] = []
  user: any;
  constructor(private userService: UserService, private SellerService: SellerService
    , private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.user = (JSON.parse(sessionStorage.getItem('data')))
    console.log((JSON.parse(sessionStorage.getItem('data'))))
    this.select = new Array<string>();


    this.userService.getcategorybyprimary(this.primary).subscribe(data => {

      this.data = data.category
      console.log(data.category[0]._id)


    })

    this.uploadform = this.formBuilder.group({
      itemname: [''],
      sku: [''],
      categoryid: [''],
      hsncode: [''],
      gst: [''],
      listingminimumordequantity: [''],
      howmanypicesperset: [''],
      contentdetailofthisset: [''],
      minimumquantityorder: [''],
      //  videourl:[''],
      //FilterValues:[''],
      primary: [''],
      noofcolourinthisset: [''],
      designcode: [''],
      itemid: [''],
      mrp: [''],
      price: [''],
      countryoforigin: [''],
      listigexpiredays: [''],
      brandname: [''],
      productdetails: [''],
      freedelivery: [''],
      createdBy: [(JSON.parse(sessionStorage.getItem('data'))._id)],
      vendor: [(JSON.parse(sessionStorage.getItem('data'))._id)],
      FilterValues: this.formBuilder.array([])
    })


  }



  onSelectprimaryid(primaryid) {
    console.log(primaryid.target.value)

    this.userService.getcategorybyprimary(primaryid.target.value).subscribe(data => {
      this.showme = !this.showme
      this.sceondprimary = data.category
      console.log(data)
    })
  }

  onSelectprimaryidd(primaryid) {
    console.log(primaryid.target.value)
    this.userService.getcategorybyprimary(primaryid.target.value).subscribe(data => {
      this.show = !this.show
      this.sceondprimaryy = data.category
      console.log(data)
    })
  }

  getfilterBycategoryid(primaryid) {
    console.log(primaryid.target.value)
    this.SellerService.getfilterbycategoryid(primaryid.target.value).subscribe(data => {
      this.filters = data
      console.log(this.filters)
    })
  }


  gst() {
    this.showgst = !this.showgst
  }

  selectmultipleimages(event) {
    if (event.target.files.length > 0) {
      const passbookicon = event.target.files[0]
      this.images = passbookicon;
    }
  }

  selectimage1(event) {
    if (event.target.files.length > 0) {
      const passbookicon = event.target.files[0]
      this.image1 = passbookicon;
    }
  }
  selectimages2(event) {
    if (event.target.files.length > 0) {
      const passbookicon = event.target.files[0]
      this.image2 = passbookicon;
    }
  }
  selectimages3(event) {
    if (event.target.files.length > 0) {
      const passbookicon = event.target.files[0]
      this.image3 = passbookicon;
    }
  }
  selectimage4(event) {
    if (event.target.files.length > 0) {
      const passbookicon = event.target.files[0]
      this.image4 = passbookicon;
    }
  }

  selectimage5(event) {
    if (event.target.files.length > 0) {
      const passbookicon = event.target.files[0]
      this.image5 = passbookicon;
    }
  }

  selectimage6(event) {
    if (event.target.files.length > 0) {
      const passbookicon = event.target.files[0]
      this.image6 = passbookicon;
    }
  }

  createItem() {
    const uploadData = new FormData();

    uploadData.append('coverphoto', this.images);
    uploadData.append('productimage1', this.image1);
    uploadData.append('productimage2', this.image2);
    uploadData.append('productimage3', this.image3);
    uploadData.append('productimage4', this.image4);
    uploadData.append('productimage5', this.image5);
    uploadData.append('brandphoto', this.image6);

    // uploadData.append('itemImages',this.selectedFile,this.selectedFile.name);
    uploadData.append('FilterValues', this.select);
    uploadData.append('itemname', this.uploadform.get('itemname').value);
    uploadData.append('sku', this.uploadform.get('sku').value);
    uploadData.append('categoryid', this.uploadform.get('categoryid').value);

    uploadData.append('hsncode', this.uploadform.get('hsncode').value);
    uploadData.append('gst', this.uploadform.get('gst').value);
    uploadData.append('brandname', this.uploadform.get('brandname').value);

    uploadData.append('productdetails', this.uploadform.get('productdetails').value);


    // uploadData.append('FilterValues',this.uploadform.get('FilterValues').value);


    uploadData.append('mrp', this.uploadform.get('mrp').value);
    uploadData.append('price', this.uploadform.get('price').value);
    uploadData.append('countryoforigin', this.uploadform.get('countryoforigin').value);
    uploadData.append('listigexpiredays', this.uploadform.get('listigexpiredays').value);
    uploadData.append('listingminimumordequantity', this.uploadform.get('listingminimumordequantity').value);
    uploadData.append('howmanypicesperset', this.uploadform.get('howmanypicesperset').value);
    uploadData.append('noofcolourinthisset', this.uploadform.get('noofcolourinthisset').value);
    uploadData.append('minimumquantityorder', this.uploadform.get('minimumquantityorder').value);
    uploadData.append('freedelivery', this.uploadform.get('freedelivery').value);
    uploadData.append('createdBy', this.uploadform.get('createdBy').value);
    uploadData.append('vendor', this.uploadform.get('vendor').value);


    //  this.selectedFile.itemImages = this.selectedFile.name;
    if ((JSON.parse(sessionStorage.getItem('data')).usertype) === 'seller') {
      this.http.post<any>("http://localhost:4000/item/productlisting/", uploadData

      ).subscribe(data => {
        if (data.length > 0) {
          this.router.navigate(['/allitem'])
        }
        else {
          console.log("error")
        }
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Uer Does Not Exit!',

      })
      console.log("user does not exit")
    }
  }


  value(event: any, id: string) {
    const array: FormArray = this.uploadform.get('FilterValues') as FormArray
    if (event.target.checked) {
      console.log(id + 'checked')
      this.select.push(id)
    }
    else {
      console.log(id + 'unchecked')
      this.select = this.select.filter(m => m != id)
    }
    let arr = this.select
    console.log(arr.join(",").split(","));
  }

} 