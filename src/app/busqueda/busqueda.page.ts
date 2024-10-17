import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage {
  constructor(private router: Router) {}

  // Navegar a la página de login
  goToLogin() {
    this.router.navigate(['/login']);
  }

  //Navegar a la pagina inicio
  goToHome() {
    this.router.navigate(['/inicio']);
  }
}
