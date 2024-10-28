import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elegir-conductor',
  templateUrl: './elegir-conductor.page.html',
  styleUrls: ['./elegir-conductor.page.scss'],
})
export class ElegirConductorPage implements OnInit {
  selectedVehicle: any;
  drivers: any[] = [];

  constructor(
    private vehicleService: VehicleService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.selectedVehicle = this.vehicleService.getSelectedVehicle();
    this.loadDrivers();
  }

  loadDrivers() {
    this.http.get<any>('https://randomuser.me/api/?results=10').subscribe(data => {
      this.drivers = data.results;
    });
  }

  chooseDriver(driver: any) {
    this.vehicleService.setSelectedDriver(driver);
    this.vehicleService.addTrip(this.selectedVehicle, driver);
    this.router.navigate(['/viaje-registrado']);
  }
}
