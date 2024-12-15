import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userName: string = '';
  userEmail: string = '';
  profilePicture: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'; // Imagen por defecto

  constructor(
    private router: Router,
    private storage: Storage,
    private actionSheetCtrl: ActionSheetController
  ) {}

  async ngOnInit() {
    await this.storage.create(); // Inicializa el almacenamiento
    this.loadUserProfile(); // Carga el perfil del usuario
  }

  async loadUserProfile() {
    const currentUserEmail = await this.storage.get('currentUser');
    if (currentUserEmail) {
      const userData = await this.storage.get(currentUserEmail);
      if (userData) {
        this.userName = userData.name;
        this.userEmail = currentUserEmail;
        this.profilePicture = userData.profilePicture || this.profilePicture;
      }
    }
  }

  // Abrir la cámara o galería para seleccionar una nueva foto de perfil
  async changeProfilePicture(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: source,
      });

      if (image && image.webPath) {
        this.profilePicture = image.webPath; // Actualiza la imagen localmente

        // Guarda la nueva imagen en el almacenamiento
        const currentUserEmail = await this.storage.get('currentUser');
        const userData = await this.storage.get(currentUserEmail);
        if (userData) {
          userData.profilePicture = image.webPath;
          await this.storage.set(currentUserEmail, userData);
        }
      }
    } catch (error) {
      console.error('Error al cambiar la foto de perfil:', error);
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Cambiar Foto de Perfil',
      buttons: [
        {
          text: 'Cámara',
          icon: 'camera',
          handler: () => {
            this.changeProfilePicture(CameraSource.Camera);
          },
        },
        {
          text: 'Galería',
          icon: 'image',
          handler: () => {
            this.changeProfilePicture(CameraSource.Photos);
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }

  goToHome() {
    this.router.navigate(['/inicio']);
  }

  async logOut() {
    await this.storage.remove('currentUser');
    this.router.navigate(['/login']);
  }

  goToViajes() {
    this.router.navigate(['/mis-viajes']);
  }
}
