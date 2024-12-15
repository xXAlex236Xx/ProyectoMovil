import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;
  passwordStrength: number = 0; // Barra de progreso
  passwordStrengthText: string = '';
  passwordStrengthColor: string = 'danger'; // Color de la barra

  constructor(private router: Router, private fb: FormBuilder, private storage: Storage) {
    // Inicializa el formulario
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      profilePicture: [''] // Espacio reservado para agregar la foto más adelante
    });

    this.initStorage(); // Inicializar el almacenamiento
  }

  async initStorage() {
    // Inicializa el almacenamiento de Ionic
    await this.storage.create();
  }

  async register() {
    if (this.registerForm.valid) {
      const userData = {
        name: this.registerForm.get('name')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        profilePicture: this.registerForm.get('profilePicture')?.value // Espacio para guardar la foto de perfil
      };

      // Guarda los datos del usuario en el almacenamiento usando el email como clave
      await this.storage.set(userData.email, userData);

      console.log('Registro exitoso');
      this.router.navigate(['/login']); // Cambia a la página de login
    } else {
      console.log('Formulario no válido');
    }
  }

  checkPasswordStrength() {
    const password = this.registerForm.get('password')?.value;
    let strength = 0;

    // Revisa la longitud de la contraseña
    if (password.length >= 8) {
      strength++;
    }

    // Revisa si tiene un caracter especial
    if (/[A-Za-z]/.test(password) && /[0-9]/.test(password) || /[\W_]/.test(password)) {
      strength++;
    }

    // Determina la fuerza de la contraseña
    if (strength === 2) {
      this.passwordStrength = 1; // 100% fuerte
      this.passwordStrengthText = 'Fuerte';
      this.passwordStrengthColor = 'success';
    } else if (strength === 1) {
      this.passwordStrength = 0.5; // 50% medio
      this.passwordStrengthText = 'Medio';
      this.passwordStrengthColor = 'warning';
    } else {
      this.passwordStrength = 0; // 0% debil
      this.passwordStrengthText = 'Débil';
      this.passwordStrengthColor = 'danger';
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
