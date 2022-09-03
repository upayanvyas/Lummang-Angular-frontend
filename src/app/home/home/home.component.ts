import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  imageslider: any;
  dealoftheday: any;
  toptwooffer: any;
  topcategories: any;
  ourclints: any;
  newarrivals: any;
  secondtwooffer: any;
  trendingproduct: any;
  trendingproduct2: any;
  newarrivalitem: any;
  bestseller: any;
  mostpopularitem: any;
  mostfeatureditem: any;
  topbestselleritem: any;
  hotdeals: any;
  promotionbanner: any;
  user: any;
  constructor(private CommonService: HomeService) { }

  ngOnInit(): void {

    this.user = JSON.parse(sessionStorage.getItem('data'))

    this.CommonService.getimageslider().subscribe(data => {
      this.imageslider = data.data.imagesliders;

      console.log(this.imageslider)
      console.log(data)
    })
    this.CommonService.dealoftheday().subscribe(deals => {
      this.dealoftheday = deals.data.deals;
      console.log(this.dealoftheday)
    })
    this.CommonService.toptwooffer().subscribe(offer => {
      this.toptwooffer = offer.data.toptwooffer

      console.log(this.toptwooffer)

      console.log(offer)
    })
    this.CommonService.topcategories().subscribe(topcategories => {
      this.topcategories = topcategories.data.topcategories;
      console.log(this.topcategories)
    })

    this.CommonService.ourclients().subscribe(ourclints => {
      this.ourclints = ourclints.data.client;
      console.log(this.ourclints)
    })
    this.CommonService.newarrivals().subscribe(newarrivals => {
      this.newarrivals = newarrivals.data.newarrivals;
      console.log(this.newarrivals)
    })
    this.CommonService.secondtwooffer().subscribe(secondtwooffer => {
      this.secondtwooffer = secondtwooffer.data.secondtwooffer;
      console.log(secondtwooffer)
    })

    this.CommonService.trendingproduct().subscribe(trendingproduct => {
      this.trendingproduct = trendingproduct.data.trendingproduct;
      console.log(this.trendingproduct)
    })
    this.CommonService.trendingproduct2().subscribe(trendingproduct2 => {
      this.trendingproduct2 = trendingproduct2.data.trendingproduct2;
      console.log(this.trendingproduct2)
    })
    this.CommonService.newarrivalsitem().subscribe(newarrivalitem => {
      this.newarrivalitem = newarrivalitem.data.newarrivalitem;
      console.log(this.newarrivalitem)
    })

    this.CommonService.bestseller().subscribe(bestseller => {
      this.bestseller = bestseller.data.bestseller;
      console.log(this.bestseller)
    })
    this.CommonService.mostpopularitem().subscribe(mostpopularitem => {
      this.mostpopularitem = mostpopularitem.data.mostpopularitem;
      console.log(this.mostpopularitem)
    })
    this.CommonService.mostfeatureditem().subscribe(mostfeatureditem => {
      this.mostfeatureditem = mostfeatureditem.data.mostfeaured;
      console.log(this.mostfeatureditem)
    })

    this.CommonService.topbestselleritem().subscribe(topbestselleritem => {
      this.topbestselleritem = topbestselleritem.data.topbestseller;
      console.log(this.topbestselleritem.topbestseller)
    })

    this.CommonService.hotdeals().subscribe(hotdeals => {
      this.hotdeals = hotdeals.data.hotdeals;
      console.log(this.hotdeals.hotdeals)
    })
    this.CommonService.promotionbanner().subscribe(promotionbanner => {
      this.promotionbanner = promotionbanner.data.promotionbanner;
      console.log(this.promotionbanner)
      console.log(promotionbanner)
    })

  }

}
