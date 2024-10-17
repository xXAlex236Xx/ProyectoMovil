import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(private router: Router) {}

  // Navegar a la página de profile
  goToProfile() {
    this.router.navigate(['/profile']);
  }

  //Navegar a la pagina busqueda
  goToBuscar() {
    this.router.navigate(['/busqueda']);
  }

  // Opciones para los slides
  slidesOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true,
    scrollbar: { draggable: true }
  };
}
