import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slidesStore = [
    {
      id: "1",
      src: 'assets/images/slider1.jpg',
      alt: 'slider1',
      title: 'slider1'
    },
    {
      id: "2",
      src: 'assets/images/slider2.jpg',
      alt: 'slider2',
      title: 'slider2'
    },
    {
      id: "3",
      src: 'assets/images/slider3.jpg',
      alt: 'slider3',
      title: 'slider3'
    },
    {
      id: "4",
      src: 'assets/images/slider4.jpg',
      alt: 'slider4',
      title: 'slider4'
    }
  ]
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
