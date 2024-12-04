import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private storage: Storage) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.storage.create();

    const currentUser = await this.storage.get('currentUser');

    if (currentUser) {
      this.router.navigate(['/inicio']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
