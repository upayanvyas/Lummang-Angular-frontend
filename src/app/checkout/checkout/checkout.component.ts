import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Checkout } from '../checkout';
import { CheckoutService } from '../checkout.service';
import { CartService } from '../../cart/cart.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared.service'
import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  razorpayObject
  totalquantity = 0;
  razorpaytotalprice: any;
  userid = 0
  addressid = 0
  mrptotalprice: number = 0;
  uploadform: FormGroup;
  options: any
  order = new Checkout();
  item: Array<any> = [(JSON.parse(localStorage.getItem('cart')))]
  customerid = (JSON.parse(sessionStorage.getItem('data')))
  cart = [];
  razorpay: any
  totalprice: number = 0;
  cartid = []
  updateaddress = {
    _id: "",
    customerid: "",
    fullname: "",
    phoneno: "",
    email: "",
    country: "",
    address: "",
    pincode: "",
    state: "",
    city: ""
  }


  loginform = new FormGroup({
    fullname: new FormControl('', [Validators.required]),

    phoneno: new FormControl('', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]),
    customerid: new FormControl((this.customerid)._id),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('India', [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.minLength(7)]),

    pincode: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    itemdetails: new FormControl(''),
    addresstype: new FormControl('')
  })

  user: any;
  countuseraddress: any;


  //itemdetails=[(JSON.parse(localStorage.getItem('cart')))];
  constructor(
    private formBuilder: FormBuilder,
    private CheckoutService: CheckoutService,
    private CartService: CartService,
    private SharedService: SharedService,
    private http: HttpClient,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.CheckoutService.getuseraddresscount(this.customerid._id).subscribe((data) => {
      this.countuseraddress = data.address
      console.log(this.countuseraddress)
    })
    this.CheckoutService.getuseraddressbyuserid(this.customerid._id).subscribe((data) => {
      this.user = data.user
      console.log(this.user)
    })

    this.CartService.getcart(this.customerid._id).subscribe((data) => {
      this.cart = data.cart
      for (let data of this.cart) {
        this.cartid = data.itemid;
      }

      for (let current of this.cart) {
        this.totalprice += current.quantity * current.itemid.price
      }
      this.razorpay = new FormGroup({
        amount: new FormControl(this.totalprice),
      })

      this.options = {
        "key": 'rzp_test_0FDKYlrG8MBQ8Q',
        // Enter the Key ID generated from the Dashboard
        "amount": this.totalprice * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        // "order_id": " ", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);

          alert(response.razorpay_signature)
        },
        // },
        "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9583482941"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      };

      this.razorpaytotalprice = this.totalprice
      console.log(this.razorpay.value)
      for (let current of this.cart) {
        this.mrptotalprice += current.quantity * current.mrp
      }
      console.log(`total price: ${this.totalprice}`)
      for (let current of this.cart) {
        this.totalquantity += current.quantity
      }
      console.log(`total quantity: ${this.totalquantity}`)
    })
  }

  checkout() {
    this.CheckoutService.placeorder(this.loginform.value).subscribe((data) => {
      if (data.length > 0) {
        // this.pay()
      }
      console.log(data)
    })
  }

  deletecart(cartid) {
    this.CartService.deletecart(cartid, this.customerid._id).subscribe(data => {
      this.cart = data.cart;
    })
  }

  incquantity(cartid, quantity) {
    this.CartService.geteditcart(cartid, ++quantity).subscribe(data => {
      setTimeout(
        function () {
          location.reload();
        }, .1000
      );
      console.log(data)
    })
  }

  decquantity(cartid, quantity) {
    this.CartService.geteditcart(cartid, quantity).subscribe(data => {
      setTimeout(
        function () {
          location.reload();
        }, .1000
      );
      console.log("Response recieved");
      if (quantity === 0) {
        this.deletecart(cartid)
      }

    })
  }

  calculatetotalprice() {
    let totalprice: number = 0;
    for (let current of this.cart) {
      totalprice += current.quantity * current.price
    }
    console.log(`total price: ${totalprice}`)
    for (let current of this.cart) {
      this.mrptotalprice += current.quantity * current.mrp
    }
  }

  useraddress() {
    this.CheckoutService.postuseraddress(this.loginform.value).subscribe(
      data => {
        console.log(data)
      }
    )
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
    });
  }

  Modelcheckout() {
    this.CheckoutService.placeorder(this.loginform.value).subscribe((data) => {
      console.log(data)
    })
  }

  deleteaddress() {
    this.CheckoutService.getdeleteuseraddress(this.customerid._id).subscribe(data => {
      console.log(data)
      setTimeout(
        function () {
          location.reload();
        }, .1000
      );
    })
  }

  orderplaced(user) {
    console.log('userData: ', user)
    this.CheckoutService.placeorder(user).subscribe((data) => {
    })
  }

  createOrder(user) {
    let initalPayPayload = {
      "amount": 2000 * 100,
      "currency": "INR",
      "receipt": "receipt1",
      "notes": {
        "description": "Best Course for SDE placements",
        "language": "Available in n4major Languages JAVA,C/C++,Python,Javascript",
        "access": "This course have Lifetime Access"
      }
    }

    this.CheckoutService.createOrder(initalPayPayload).subscribe((res) => {
      console.log('inital payment response: ', res)
      this.openRazorpayModal(res)
    }, (err) => {
      console.log('inital payment error: ', err)
    })
  }

  verifyOrderPayment(response) {
    console.log('verify payment: ', response)
    this.CheckoutService.verifyOrderPayment(response).subscribe((res) => {
      // console.log('payment verification res: ', res)
    }, (err) => {
      // console.log('payment verification err: ', err)
    })
  }

  openRazorpayModal(rpayResponse) {
    var options = {
      "key": "rzp_test_0FDKYlrG8MBQ8Q",
      "amount": 2000 * 100,
      "currency": "INR",
      "name": "Dummy Academy",
      "description": "Pay & Checkout this Course, Upgrade your DSA Skill",
      "order_id": `${rpayResponse.id}`,
      "handler": (response) => {
        console.log('handler res: ', response)
        alert("This step of Payment Succeeded");
        this.verifyOrderPayment(response)
      },
      "prefill": {
        //Here we are prefilling random contact
        "contact": "7000583601",
        //name and email id, so while checkout
        "name": "sheetal marko",
        "email": "smarko@gmail.com"
      },
      "notes": {
        "description": "Best Course for SDE placements",
        "language": "Available in 4 major Languages JAVA, C/ C++, Python, Javascript",
        "access": "This course have Lifetime Access"
      },
      "theme": {
        "color": "#2300a3"
      }
    };

    this.razorpayObject = new this.SharedService.nativeWindow.Razorpay(options)
    console.log('razorpayObject: ', this.razorpayObject);
    this.razorpayObject.open();
    this.razorpayObject.on('payment.failed', function (response) {
      console.log('payment failed res: ', response);
      alert("This step of Payment Failed");
    });
  }


  opendetails(userAddress) {
    console.log('userAddress: ', userAddress)
    this.modalService.open(userAddress, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log('modal result: ', result)
    }, (reason) => {
      console.log('modal close reason: ', reason)
    });
  }

  updateuseraddress() {
    this.CheckoutService.updateuseraddress(this.updateaddress).subscribe(data => {
      console.log(data)
    })
    setTimeout(
      function () {
        location.reload();
      }, .1000
    );
  }


  // rzp1
  // pay() {
  //   this.SharedService.createpayment(this.razorpay.value).subscribe(data => {
  //     console.log(this.razorpay.value)
  //     console.log(data['amount'])
  //     console.log(data)
  //   })
  //   this.rzp1 = new this.SharedService.nativeWindow.Razorpay(this.options)
  //   this.rzp1.on('payment.failed', function (response) {
  //   });
  //   this.rzp1.open();
  // }
}