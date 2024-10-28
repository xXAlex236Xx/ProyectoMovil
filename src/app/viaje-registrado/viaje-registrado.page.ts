import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viaje-registrado',
  templateUrl: './viaje-registrado.page.html',
  styleUrls: ['./viaje-registrado.page.scss'],
})
export class ViajeRegistradoPage implements OnInit {
  selectedVehicle: any; // Almacena el vehículo seleccionado anteriormente
  selectedDriver: any; // Almacena el conductor seleccionado anteriormente

  constructor(private vehicleService: VehicleService, private router: Router) {}

  ngOnInit() {
    this.selectedVehicle = this.vehicleService.getSelectedVehicle(); // Obtener vehículo
    this.selectedDriver = this.vehicleService.getSelectedDriver(); // Obtener conductor
  }

  goToHome() {
    this.router.navigate(['/inicio']);
  }
}
