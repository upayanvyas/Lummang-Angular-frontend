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
  table = 'order_id'
  tableHeaders = ['Order Number', 'Product Image', 'Design Code', 'Order Date', 'Buyer ID', 'Seller ID', 'Order Status']
  dropDownList = []
  start_dt = '07-09-2022'
  end_dt = '10-09-2022'
  // userId = '62d18cabe2958951466b3b6d'  //customer id as default 
  userId = '62ba92195e76159f84cd852e'  //seller id as default 

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders() {
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

  getSellers() {
    this.adminService.getAllSellers().subscribe((res) => {
      console.log('res: ', res.data)
      this.dropDownList = []
      this.dropDownList = res.data
    })
  }

  getBuyers() {
    this.adminService.getAllBuyers().subscribe((res) => {
      console.log('res: ', res.data)
      this.dropDownList = []
      this.dropDownList = res.data
    })
  }

  getOrdersByUserId(userId) {
    console.log('userId : ', userId)
    this.userId = userId
  }

  submitSearch() {
    console.log('user_id: ', this.userId)
    console.log('start_dt: ', this.start_dt)
    console.log('end_dt: ', this.end_dt)

    if (this.table === 'buyer_name') {
      let obj = { customerid: this.userId, start_dt: this.start_dt, end_dt: this.end_dt }
      console.log(obj)
      this.adminService.getOrdersByBuyerId(obj).subscribe((res) => {
        console.log('orders by buyer id: ', res)
        this.orders = res.data
      })
    } else {
      let obj = { sellerid: this.userId, start_dt: this.start_dt, end_dt: this.end_dt }
      console.log(obj)
      this.adminService.getOrdersBySellerId(obj).subscribe((res) => {
        console.log('orders by seller id: ', res)
        this.orders = res.data
      })
    }
  }



  showTable(table) {
    console.log('table: ', table)
    this.table = table

    if (table === 'order_id') {
      this.tableHeaders = ['Order Number', 'Product Image', 'Design Code', 'Order Date', 'Buyer ID', 'Seller ID', 'Order Status']
      this.getAllOrders()
    }
    else if (table === 'seller_name') {
      this.tableHeaders = ['Order Number', 'Product Image', 'Design Code', 'Order Date', 'Buyer ID', 'Seller ID', 'Order Status']
      this.getSellers()
    }
    else if (table === 'buyer_name') {
      this.tableHeaders = ['Order Number', 'Product Image', 'Design Code', 'Order Date', 'Buyer ID', 'Seller ID', 'Order Status']
      this.getBuyers()
    }
    else {
      this.tableHeaders = ['Order Number', 'Product Image', 'Design Code', 'Order Date', 'Buyer ID', 'Seller ID', 'Order Status']
    }
  }

}
