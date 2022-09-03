import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service'
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sellerorder',
  templateUrl: './sellerorder.component.html',
  styleUrls: ['./sellerorder.component.css']
})
export class SellerorderComponent implements OnInit {

  customerid = (JSON.parse(sessionStorage.getItem('data')))._id
  orders = [{
    id: 12345,
    date: '123',
    status: 'pending',
    sku: '2343',
    Quantity: 6,
    Amount: '600'
  },
  {
    id: 879243,
    date: '4543',
    status: 'pending',
    sku: '7568',
    Quantity: 600,
    Amount: '10000'
  }]

  title = 'Order Summary';
  closeResult: string;
  modalOptions: NgbModalOptions;

  orderDetail: any = {}
  maxQty = 10
  isDesc = '';


  constructor(private SellerService: SellerService, private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
      size: 'lg'
    }
  }

  ngOnInit(): void {
    // console.log((JSON.parse(sessionStorage.getItem('data')))._id)
    // this.SellerService.getorderdetailsbycustomerid('62922e5850ad94df398ac93a').subscribe(data => {
    //   this.orders = data
    //   console.log(this.orders)
    // })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      console.log('closed by esc: ', reason)
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      // console.log('closed: ', reason)
      return 'by clicking on a backdrop';
    } else {
      console.log('closed by cross: ', reason)
      return `with: ${reason}`;
    }
  }

  openModal(content, obj) {
    console.log('modal content: ', content, obj.order)
    if( obj.modalName ==='invoice'){
      this.modalOptions['size'] = 'xl'
    }else{
      this.modalOptions['size'] = 'lg'
    }
    this.orderDetail = obj.order
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  rejectReason(e) {
    console.log(e.target.value)
    this.isDesc = e.target.value
  }

  rejectOrder() {
    if (confirm('Are you sure you want to reject this order?')) {
      // notify seller that this order is in cancel state, seller will approve it and then this order will be canceled.
      console.log('this order has been rejected successfully!')
      // this.getDismissReason('Cross click')
      setTimeout(() => {
        alert('this order has been rejected successfully!')
      }, 4000);
    }
  }

}
