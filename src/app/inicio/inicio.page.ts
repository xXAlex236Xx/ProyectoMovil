import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  userName: string = ''; // Para almacenar el nombre del usuario

  constructor(private router: Router, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create(); // Inicializa el almacenamiento
    this.loadUserName();
  }

  async loadUserName() {
    // Obtener el email del usuario logeado
    const currentUserEmail = await this.storage.get('currentUser');

    if (currentUserEmail) {
      // Obtener los datos del usuario usando su email
      const userData = await this.storage.get(currentUserEmail);

      if (userData) {
        this.userName = userData.name; // Asigna el nombre del usuario a la variable
      }
    }
  }

  // Navegar a la página de perfil
  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToCamera() {
    this.router.navigate(['/camera']);
  }

  // Navegar a la página de búsqueda
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
