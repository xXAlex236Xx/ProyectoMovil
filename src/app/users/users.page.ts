import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: any[] = []; // Almacena la lista de usuarios

  constructor(private storage: Storage, private router: Router) {}

  async ngOnInit() {
    await this.storage.create();
    this.loadUsers();
  }

  async loadUsers() {
    // Obtiene todos los usuarios almacenados
    const keys = await this.storage.keys();
    this.users = [];

    for (const key of keys) {
      const user = await this.storage.get(key);
      if (user) {
        this.users.push({ email: key, ...user }); // Agrega el email y los datos del usuario
      }
    }
  }

  // Elimina un usuario seleccionado
  async deleteUser(email: string) {
    await this.storage.remove(email); // Elimina al usuario del almacenamiento
    this.loadUsers(); // Recarga la lista de usuarios
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
