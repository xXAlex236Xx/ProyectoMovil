import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  userName: string = '';
  userProfilePicture: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png';

  constructor(private router: Router, private storage: Storage, private userService: UserService) {}

  async ngOnInit() {
    await this.storage.create();
    this.loadUserName();

    // Escuchar cambios en los datos del usuario
    this.userService.currentUser.subscribe((userData) => {
      if (userData) {
        this.userName = userData.name;
        this.userProfilePicture = userData.profilePicture || this.userProfilePicture;
      }
    });
  }

  async loadUserName() {
    const currentUserEmail = await this.storage.get('currentUser');
    if (currentUserEmail) {
      const userData = await this.storage.get(currentUserEmail);
      if (userData) {
        // Actualizar el estado en el servicio
        this.userService.updateUser(userData);
      }
    }
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToCamera() {
    this.router.navigate(['/camera']);
  }

  goToBuscar() {
    this.router.navigate(['/busqueda']);
  }

  slidesOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true,
    scrollbar: { draggable: true },
  };
}
