import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private trips: any[] = []; //para almacenar los viajes
  private selectedVehicle: any;
  private selectedDriver: any;

  setSelectedVehicle(vehicle: any) {
    this.selectedVehicle = vehicle;
  }

  getSelectedVehicle() {
    return this.selectedVehicle;
  }

  setSelectedDriver(driver: any) {
    this.selectedDriver = driver;
  }

  getSelectedDriver() {
    return this.selectedDriver;
  }

  addTrip(vehicle: any, driver: any) {
    const trip = { vehicle, driver, date: new Date() };
    this.trips.push(trip);
    console.log('Viaje añadido:', trip);
  }

  getTrips() {
    console.log('Viajes registrados:', this.trips);
    return this.trips;
  }  

  cancelTrip(index: number) {
    if (index > -1 && index < this.trips.length) {
      this.trips.splice(index, 1);
    }
  }
}
