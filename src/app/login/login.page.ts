import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  loading: boolean = false;  // Controla la animación de carga
  loginError: boolean = false; // Maneja el error de login

  constructor(
    private router: Router, 
    private storage: Storage,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // Verifica los datos de inicio de sesión
  async login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
  
      // Activa la animación de carga
      this.loading = true;
  
      // Recupera los datos del usuario desde el almacenamiento
      const storedUser = await this.storage.get(email); // Se usa el email como clave
  
      // Verifica si el email existe en el almacenamiento y la contraseña coincide
      if (storedUser && storedUser.password === password) {
        // Guarda el email del usuario logeado
        await this.storage.set('currentUser', email);
  
        // Simula la duración de la animación de carga
        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['/inicio']); // Navega a la página de inicio
        }, 3000); // Duración de la carga (3 segundos)
      } else {
        // Desactiva la carga y muestra un error
        this.loading = false;
        this.loginError = true;
      }
    } else {
      // Si el formulario es inválido, muestra un error
      this.loginError = true;
    }
  }
  

  goToInicio() {
    this.router.navigate(['/inicio']);
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }
}
