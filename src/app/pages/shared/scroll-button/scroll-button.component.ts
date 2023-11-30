import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.css']
})
export class ScrollButtonComponent implements OnInit {

  public showButton: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 100;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
  }

}
