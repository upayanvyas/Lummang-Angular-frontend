import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerprofileComponent } from './user/buyerprofile/buyerprofile.component';
import { CartComponent } from './cart/cart/cart.component';
import { CartdetailComponent } from './cart/cartdetail/cartdetail.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { OrdercompleteComponent } from './checkout/ordercomplete/ordercomplete.component';
import { OrdersComponent } from './checkout/orders/orders.component';
import { PaymentmethodComponent } from './checkout/paymentmethod/paymentmethod.component';
import { HeaderComponent } from './common/header/header.component';
import { Header1Component } from './common/header1/header1.component';
import { Header2Component } from './common/header2/header2.component';
import { DealsofthedayproductComponent } from './dealsofthedayproduct/dealsofthedayproduct.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home/home.component';
import { ImagesliderproductComponent } from './imagesliderproduct/imagesliderproduct.component';
import { LandingComponent } from './landing/landing/landing.component';
import { NewarrivalproductsComponent } from './newarrivalproducts/newarrivalproducts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductdetailsComponent } from './productdetails/productdetails/productdetails.component';
import { PromotionbannerproductComponent } from './promotionbannerproduct/promotionbannerproduct.component';
import { SearchComponent } from './search/search/search.component';
import { SecondtoptwoofferproductComponent } from './secondtoptwoofferproduct/secondtoptwoofferproduct.component';
import { AllitemComponent } from './seller/allitem/allitem.component';
import { CreateitemComponent } from './seller/createitem/createitem.component';
import { SellerdashboardComponent } from './seller/sellerdashboard/sellerdashboard.component';
import { ViewitemComponent } from './seller/viewitem/viewitem.component';
import { TopcategoriesproductComponent } from './topcategoriesproduct/topcategoriesproduct.component';
import { ToptwoofferproductComponent } from './toptwoofferproduct/toptwoofferproduct.component';
import { BuyerresisterComponent } from './user/buyerresister/buyerresister.component';
import { OtpverificationComponent } from './user/otpverification/otpverification.component';
import { PhonenosignupComponent } from './user/phonenosignup/phonenosignup.component';
import { SellerresisterComponent } from './user/sellerresister/sellerresister.component';
import { WishlistdetailComponent } from './wishlist/wishlistdetail/wishlistdetail.component';
import { EditaddressComponent } from './checkout/editaddress/editaddress.component';
import { Landing2Component } from './landing/landing2/landing2.component';
import { Landing1Component } from './landing/landing1/landing1.component';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { PrivacypolicyComponent } from './common/privacypolicy/privacypolicy.component';
import { ProductlistingpolicyComponent } from './common/productlistingpolicy/productlistingpolicy.component';
import { AnticounterfeitingComponent } from './common/anticounterfeiting/anticounterfeiting.component';
import { Footer1Component } from './common/footer1/footer1.component';
import { FooterComponent } from './common/footer/footer.component';
import { ReturnandrefundpolicyComponent } from './common/returnandrefundpolicy/returnandrefundpolicy.component';
import { TermandconditionComponent } from './common/termandcondition/termandcondition.component';
import { EditbuyerprofileComponent } from './user/editbuyerprofile/editbuyerprofile.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { CareerComponent } from './common/career/career.component';
import { SellerorderComponent } from './seller/sellerorder/sellerorder.component';
import { RazortestComponent } from './razortest/razortest.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: "header1", component: Header1Component },
  { path: "home", component: HomeComponent },
  { path: "signup", component: PhonenosignupComponent },
  { path: "otp", component: OtpverificationComponent },
  { path: "", component: LandingComponent },
  { path: "Cart/cartdetails", component: CartdetailComponent },
  { path: "Cart", component: CartComponent },
  { path: "newarrivals/:id", component: NewarrivalproductsComponent },
  { path: "productlist/:id", component: ImagesliderproductComponent },
  { path: "buyer", component: BuyerresisterComponent },
  { path: "toptwoofferitems/:id", component: ToptwoofferproductComponent },
  { path: "topcategories/:id", component: TopcategoriesproductComponent },
  { path: "secondtoptwoofferitem/:id", component: SecondtoptwoofferproductComponent },
  { path: "promotionbannerproduct/:id", component: PromotionbannerproductComponent },
  { path: "dealsoftheday/:id", component: DealsofthedayproductComponent },
  { path: "itemdetails/:id", component: ProductdetailsComponent },
  { path: "search/:itemname", component: SearchComponent },
  { path: "wishlistdetail", component: WishlistdetailComponent },
  { path: "allitem", component: AllitemComponent },
  { path: "createitem", component: CreateitemComponent },
  { path: "sellerdashboard", component: SellerdashboardComponent },
  { path: "itemview/:id", component: ViewitemComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "sellerresister", component: SellerresisterComponent },
  { path: "ordercomplete", component: OrdercompleteComponent },
  { path: "paymentmode", component: PaymentmethodComponent },
  { path: "header2", component: Header2Component },
  { path: "orders", component: OrdersComponent },
  { path: "orders", component: BuyerprofileComponent },
  { path: "buyerprofile", component: BuyerprofileComponent },
  { path: "editprofile/:id", component: EditprofileComponent },
  { path: "buyerprofile/:id", component: EditbuyerprofileComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: 'anticounterfeiting', component: AnticounterfeitingComponent },
  { path: "returnandrefundpolicy", component: ReturnandrefundpolicyComponent },
  { path: 'footer', component: FooterComponent },
  { path: "landing2", component: Landing2Component },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'productlisting', component: ProductlistingpolicyComponent },
  { path: 'payment', component: Landing1Component },
  { path: 'termandcondition', component: TermandconditionComponent },
  { path: 'productlisting1', component: ProductlistingComponent },
  { path: 'career', component: CareerComponent },
  { path: 'sellerorder', component: SellerorderComponent },
  { path: 'razot-test', component: RazortestComponent },
  { path: 'dashboard', component: AdmindashboardComponent },

  

  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
