import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData = new BehaviorSubject<any>(null); // Estado del usuario
  currentUser = this.userData.asObservable(); // Observable para escuchar cambios

  // Actualizar datos del usuario
  updateUser(data: any) {
    this.userData.next(data);
  }
}
