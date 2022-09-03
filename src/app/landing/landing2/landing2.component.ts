import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-landing2',
  templateUrl: './landing2.component.html',
  styleUrls: ['./landing2.component.css']
})
export class Landing2Component implements OnInit {

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
  navSpeed: 700,
  navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
  autoplay:true,
  autoplaySpeed:1000,
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
 