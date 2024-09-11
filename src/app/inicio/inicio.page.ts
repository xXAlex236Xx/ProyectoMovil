import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  slidesOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true,
    scrollbar: { draggable: true }
  };
  
}
