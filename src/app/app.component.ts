import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isItNotMobile = false;
  is_Loaded = false;
  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    if (window.innerWidth > 1024) {
      this.isItNotMobile = true;
    }
    this.is_Loaded = true;
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    if (width > 1024) {
      this.isItNotMobile = true;
    }
    else if (width < 1024){
      this.isItNotMobile = false;
    }
  }
  @HostListener('window:keyup', ['$event'])
  ChangeRouter(e: any) {
    if (e.code === "ArrowUp") {
      if (window.location.href == window.location.origin + '/about') {
        this.router.navigate(['/'])
      }
      else if (window.location.href == window.location.origin + '/skills') {
        this.router.navigate(['/about'])
      }
      else if (window.location.href == window.location.origin + '/experience') {
        this.router.navigate(['/skills'])
      }
      else if (window.location.href == window.location.origin + '/projects') {
        this.router.navigate(['/experience'])
      }
      else if (window.location.href == window.location.origin + '/awards') {
        this.router.navigate(['/projects'])
      }
      else if (window.location.href == window.location.origin + '/contact') {
        this.router.navigate(['/awards'])
      }
      else if (window.location.href == window.location.origin + '/') {
        this.router.navigate(['/contact'])
      }
    }
    if (e.code === "ArrowDown" || e.code === 'Space') {
      if (window.location.href == window.location.origin + '/') {
        this.router.navigate(['/about'])
      }
      else if (window.location.href == window.location.origin + '/about') {
        this.router.navigate(['/skills'])
      }
      else if (window.location.href == window.location.origin + '/skills') {
        this.router.navigate(['/experience'])
      }
      else if (window.location.href == window.location.origin + '/experience') {
        this.router.navigate(['/projects'])
      }
      else if (window.location.href == window.location.origin + '/projects') {
        this.router.navigate(['/awards'])
      }
      else if (window.location.href == window.location.origin + '/awards') {
        this.router.navigate(['/contact'])
      }
      else if (window.location.href == window.location.origin + '/contact') {
        this.router.navigate(['/'])
      }
    }

  }

}
