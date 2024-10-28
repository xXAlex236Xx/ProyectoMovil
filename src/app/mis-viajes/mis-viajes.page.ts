import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
})
export class MisViajesPage implements OnInit {
  trips: any[] = [];

  constructor(private router: Router, private vehicleService: VehicleService) {}

  ngOnInit() {
    this.loadTrips();
  }
  
  loadTrips() {
    this.trips = this.vehicleService.getTrips();
  }
  

  // Método para cancelar un viaje
  cancelTrip(index: number) {
    this.vehicleService.cancelTrip(index); // Elimina el viaje del servicio
    this.loadTrips(); // Recargar la lista de viajes
  }

  goToHome() {
    this.router.navigate(['/inicio']);
  }
}
