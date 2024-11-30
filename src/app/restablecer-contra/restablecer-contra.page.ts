import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';  // Importa EmailJS

@Component({
  selector: 'app-restablecer-contra',
  templateUrl: './restablecer-contra.page.html',
  styleUrls: ['./restablecer-contra.page.scss'],
})
export class RestablecerContraPage implements OnInit {
  email: string = '';  // Declara la variable para almacenar el correo ingresado por el usuario

  constructor() { }

  ngOnInit() {
  }

  // Función para enviar el correo
  sendInstructions() {
    if (!this.email) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Parámetros que se enviarán al template de EmailJS
    const templateParams = {
      to_email: this.email,
      subject: 'Instrucciones para Restablecer la Contraseña',
      message: 'Haz clic en el enlace de abajo para restablecer tu contraseña: [Enlace aquí]',
    };

    // Llamada a EmailJS para enviar el correo
    emailjs.send('service_8a9p3pq', 'template_4y6zhyi', templateParams, 'k08xa7ASfaNyWBuqa')
      .then((response) => {
        console.log('Correo enviado exitosamente', response);
        alert('Instrucciones enviadas a tu correo.');
      })
      .catch((error) => {
        console.error('Error al enviar correo', error);
        alert('Hubo un problema al enviar el correo. Intenta nuevamente.');
      });
  }
}
