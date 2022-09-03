import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: any;
  sceondprimary: any;

  constructor(private router: Router, private userService: UserService) { }
  category: any;
  cartcount: any;
  customerid: any;
  usertype: any;
  primary = 0
  ngOnInit(): void {
    this.customerid = JSON.parse(sessionStorage.getItem('data'))


    console.log(this.customerid)
    this.usertype = JSON.parse(sessionStorage.getItem('data')).usertype == 'seller'
    console.log(this.usertype)




    this.userService.getcategorybyprimary(this.primary).subscribe(data => {

      this.data = data.category
      console.log(this.data[0]._id)


    })
  }

  searchproduct(itemname: string) {
    console.log('keyword', itemname);
    setTimeout(
      function () {
        location.reload();
      }, .1000);
    this.router.navigateByUrl('/search/' + itemname);
  }


  onSelectprimaryid(primaryid) {
    console.log(primaryid.target.value)

    this.userService.getcategorybyprimary(primaryid.target.value).subscribe(data => {

      this.sceondprimary = data.category
      console.log(data)
    })
  }

  logout() {
    // hit logout api to clear auth token from user row
    sessionStorage.clear()
    this.router.navigate(['/signup'])
  }

} 
