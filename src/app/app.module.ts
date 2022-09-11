import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './common/header/header.component';
import { Header1Component } from './common/header1/header1.component';
import { FooterComponent } from './common/footer/footer.component';
import { Footer1Component } from './common/footer1/footer1.component';
import { LandingComponent } from './landing/landing/landing.component';
import { Landing1Component } from './landing/landing1/landing1.component';
import { Landing2Component } from './landing/landing2/landing2.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HomeComponent } from './home/home/home.component'; 
import { PhonenosignupComponent } from './user/phonenosignup/phonenosignup.component';
import { OtpverificationComponent } from './user/otpverification/otpverification.component';
import { SellerresisterComponent } from './user/sellerresister/sellerresister.component';
import { BuyerresisterComponent } from './user/buyerresister/buyerresister.component';
import { SellerdashboardComponent } from './seller/sellerdashboard/sellerdashboard.component';
import { CreateitemComponent } from './seller/createitem/createitem.component';
import { ViewitemComponent } from './seller/viewitem/viewitem.component';
import { UpdateitemComponent } from './seller/updateitem/updateitem.component';
import { CartComponent } from './cart/cart/cart.component';
import { CartdetailComponent } from './cart/cartdetail/cartdetail.component';
import { WishlistdetailComponent } from './wishlist/wishlistdetail/wishlistdetail.component';
import { ProductdetailsComponent } from './productdetails/productdetails/productdetails.component';

import { ToptwoofferproductComponent } from './toptwoofferproduct/toptwoofferproduct.component';
import { SecondtoptwoofferproductComponent } from './secondtoptwoofferproduct/secondtoptwoofferproduct.component';
import { TopcategoriesproductComponent } from './topcategoriesproduct/topcategoriesproduct.component';
import { PromotionbannerproductComponent } from './promotionbannerproduct/promotionbannerproduct.component';
import { NewarrivalproductsComponent } from './newarrivalproducts/newarrivalproducts.component';
import { SearchComponent } from './search/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AllitemComponent } from './seller/allitem/allitem.component';
import { ImagesliderproductComponent } from './imagesliderproduct/imagesliderproduct.component';
import { DealsofthedayproductComponent } from './dealsofthedayproduct/dealsofthedayproduct.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { OrdercompleteComponent } from './checkout/ordercomplete/ordercomplete.component';
import { PaymentmethodComponent } from './checkout/paymentmethod/paymentmethod.component';
import { Header2Component } from './common/header2/header2.component';
import { OrdersComponent } from './checkout/orders/orders.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { BuyerprofileComponent } from './user/buyerprofile/buyerprofile.component';
import { EditbuyerprofileComponent } from './user/editbuyerprofile/editbuyerprofile.component';
import { EditaddressComponent } from './checkout/editaddress/editaddress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { PrivacypolicyComponent } from './common/privacypolicy/privacypolicy.component';
import { ReturnandrefundpolicyComponent } from './common/returnandrefundpolicy/returnandrefundpolicy.component';
import { AnticounterfeitingComponent } from './common/anticounterfeiting/anticounterfeiting.component';
import { TermandconditionComponent } from './common/termandcondition/termandcondition.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { CareerComponent } from './common/career/career.component';
import { SellerorderComponent } from './seller/sellerorder/sellerorder.component';
import { RazortestComponent } from './razortest/razortest.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header1Component,
    FooterComponent,
    Footer1Component,
    LandingComponent,
    Landing1Component,
    Landing2Component,
    HomeComponent,
    PhonenosignupComponent,
    OtpverificationComponent,
    SellerresisterComponent,
    BuyerresisterComponent,
    SellerdashboardComponent,
    CreateitemComponent,
    ViewitemComponent,
    UpdateitemComponent,
    CartComponent,
    CartdetailComponent,
    WishlistdetailComponent,
    
    ProductdetailsComponent,
    
    ToptwoofferproductComponent,
    SecondtoptwoofferproductComponent,
    TopcategoriesproductComponent,
    PromotionbannerproductComponent,
    NewarrivalproductsComponent,
    SearchComponent,
    PagenotfoundComponent,
    AllitemComponent ,
    ImagesliderproductComponent,
    DealsofthedayproductComponent,
    CheckoutComponent,
    OrdercompleteComponent,
    PaymentmethodComponent,
    Header2Component,
    OrdersComponent,
    EditprofileComponent,
    BuyerprofileComponent,
    EditbuyerprofileComponent,
    EditaddressComponent,
    AboutusComponent,
    PrivacypolicyComponent,
    ReturnandrefundpolicyComponent,
    AnticounterfeitingComponent,
    TermandconditionComponent,
    ProductlistingComponent,
    CareerComponent,
    SellerorderComponent,
    RazortestComponent,
    AdmindashboardComponent
  
   
   


    
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   CKEditorModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
