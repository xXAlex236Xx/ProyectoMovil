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
  passwordStrength: number = 0; // 0 to 1 for progress bar
  passwordStrengthText: string = '';
  passwordStrengthColor: string = 'danger'; // default color

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
      this.router.navigate(['/home']); // Navigate to home page or login page
    } else {
      console.log('Form is invalid');
    }
  }

  checkPasswordStrength() {
    const password = this.registerForm.get('password')?.value;
    let strength = 0;

    // Check for length
    if (password.length >= 8) {
      strength++;
    }

    // Check for special character or number
    if (/[A-Za-z]/.test(password) && /[0-9]/.test(password) || /[\W_]/.test(password)) {
      strength++;
    }

    // Determine strength level
    if (strength === 2) {
      this.passwordStrength = 1; // 100% for strong
      this.passwordStrengthText = 'Fuerte';
      this.passwordStrengthColor = 'success';
    } else if (strength === 1) {
      this.passwordStrength = 0.5; // 50% for medium
      this.passwordStrengthText = 'Medio';
      this.passwordStrengthColor = 'warning';
    } else {
      this.passwordStrength = 0; // 0% for weak
      this.passwordStrengthText = 'Débil';
      this.passwordStrengthColor = 'danger';
    }
  }
}
