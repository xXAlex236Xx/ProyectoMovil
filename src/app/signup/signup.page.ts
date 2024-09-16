import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;
  passwordStrength: number = 0; // barra progreso
  passwordStrengthText: string = '';
  passwordStrengthColor: string = 'danger'; // su color

  constructor(private router: Router, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  register() {
    if (this.registerForm.valid) {
      // Call your registration logic here
      console.log('Registration successful');
      this.router.navigate(['/home']); //navega a home
    } else {
      console.log('Form is invalid');
    }
  }

  checkPasswordStrength() {
    const password = this.registerForm.get('password')?.value;
    let strength = 0;

    // revisa su longitud
    if (password.length >= 8) {
      strength++;
    }

    // revisa si tiene un caracter especial
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
}
