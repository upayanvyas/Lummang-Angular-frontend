import Typewriter from 't-writer.js'
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  constructor() { }
 
  ngOnInit(): void {
    
  const target = document.querySelector('.tw'); 
  const writer = new Typewriter(target, {
    loop: true, 
    typeColor: '#3734a9' 
  })
  
  writer
    .strings(
      400,
      "Affordable",
      "Trustworthy", 
      
    )
    .start()
  
  
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 900,
  navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
  autoplay:true,
  autoplaySpeed:2000,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3 
    },
    940: {
      items: 4
    }
  },
  nav: true
}
}