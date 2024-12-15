import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router para la navegación

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  constructor(private router: Router) { }  // Inyectar el servicio Router

  ngOnInit() {
  }

  // Función para redirigir a la página de inicio
  goToHome() {
    this.router.navigate(['/inicio']);
  }
}
