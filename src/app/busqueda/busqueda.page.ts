import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  constructor(private router: Router, private http: HttpClient, private vehicleService: VehicleService) {}

  searchTerm: string = ''; //para enlazar con el input de búsqueda
  isExpanded: boolean = false; // Propiedad para controlar si la caja de búsqueda está expandida
  typingTimeout: any; // Variable para almacenar el timeout
  vehicles: any[] = []; // Para almacenar los vehículos
  filteredVehicles: any[] = []; // Para almacenar los vehículos filtrados

  ngOnInit() {
    this.loadVehicles(); // Cargar los vehículos al inicializar el componente
  }

  // Navegar a la página de login
  goToLogin() {
    this.router.navigate(['/login']);
  }

  // Navegar a la pagina inicio
  goToHome() {
    this.router.navigate(['/inicio']);
  }

  // Método para cargar vehículos desde el archivo JSON
  loadVehicles() {
    this.http.get<any[]>('assets/vehicles.json').subscribe((data) => {
      this.vehicles = data; // Almacenar los vehículos cargados
      this.filteredVehicles = this.vehicles; // Inicializar la lista filtrada
    });
  }

  // Método para alternar la expansión del cuadro de búsqueda
  searchToggle(evt: Event) {
    this.isExpanded = !this.isExpanded; // Alternar el estado
    const container = (evt.currentTarget as HTMLElement).closest(
      '.search-wrapper'
    );
    if (container) {
      if (this.isExpanded) {
        container.classList.add('expanded');
      } else {
        container.classList.remove('expanded');
        this.searchTerm = ''; // Limpiar el campo de búsqueda cuando se cierre
        this.filteredVehicles = this.vehicles; // Reiniciar la lista filtrada
      }
    }
  }

  // Método que se ejecuta cuando el usuario escribe en el cuadro de búsqueda
  onSearchInput() {
    clearTimeout(this.typingTimeout); // Limpiar cualquier timeout previo

    // Filtrar vehículos basado en el término de búsqueda
    this.filteredVehicles = this.vehicles.filter(
      (vehicle) =>
        vehicle.make.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Configurar un nuevo timeout de 3 segundos para cerrar el cuadro de búsqueda
    this.typingTimeout = setTimeout(() => {
      this.closeSearch();
    }, 90000);
  }

  // Método que se ejecuta cuando el campo de búsqueda pierde el foco
  onInputBlur() {
    this.closeSearch();
  }

  // Método para cerrar la búsqueda
  closeSearch() {
    this.isExpanded = false;
    const container = document.querySelector('.search-wrapper');
    if (container) {
      container.classList.remove('expanded');
    }
    this.searchTerm = ''; // Limpiar el campo de búsqueda
    this.filteredVehicles = this.vehicles; // Reiniciar la lista filtrada
  }

  // Detectar clics fuera del contenedor de búsqueda
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const container = document.querySelector('.search-wrapper');
    const target = event.target as HTMLElement;
    if (container && !container.contains(target)) {
      this.closeSearch();
    }
  }

  // Método que se ejecuta cuando el usuario elige un vehículo
  chooseDriver(vehicle: any) {
    this.vehicleService.setSelectedVehicle(vehicle); // Almacenar el vehículo en el servicio
    this.router.navigate(['/elegir-conductor'], { state: { selectedVehicle: vehicle } });
  }
}
