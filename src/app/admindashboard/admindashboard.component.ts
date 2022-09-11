import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  orders
  filteredOrder

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllOrders().subscribe((res) => {
      console.log('all orders: ', res)
      this.orders = res.data
    }, (err) => {
      console.log('err: ', err)
    })
  }

  searchInput(evt) {
    this.filteredOrder = []
    // 756432-4-247-267471
    console.log(evt)
    this.filteredOrder = this.orders.filter(element => element.orderNo.includes(evt));
    console.log('this.filteredOrder : ', this.filteredOrder)
  }

}
