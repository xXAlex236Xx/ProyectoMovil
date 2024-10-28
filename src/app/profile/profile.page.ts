import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userName: string = '';
  userEmail: string = '';

  constructor(private router: Router, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create(); // Inicializa el almacenamiento
    this.loadUserProfile(); // Carga el perfil del usuario
  }

  async loadUserProfile() {
    // Obtén el email del usuario logeado desde el almacenamiento
    const currentUserEmail = await this.storage.get('currentUser');

    if (currentUserEmail) {
      // Obtén los datos del usuario usando su email
      const userData = await this.storage.get(currentUserEmail);

      if (userData) {
        this.userName = userData.name; // Nombre del usuario
        this.userEmail = currentUserEmail; // Email del usuario
      }
    }
  }

  // Navegar a la página de inicio
  goToHome() {
    this.router.navigate(['/inicio']);
  }

  // Cerrar sesión y navegar a la página de login
  async logOut() {
    await this.storage.remove('currentUser'); // Elimina al usuario actual del almacenamiento
    this.router.navigate(['/login']); // Redirige a la página de login
  }

  goToViajes() {
    this.router.navigate(['/mis-viajes']);
  }
}
