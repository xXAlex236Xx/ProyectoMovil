import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  searchTerm: string = ''; // Propiedad para enlazar con el input de búsqueda
  isExpanded: boolean = false; // Propiedad para controlar si la caja de búsqueda está expandida
  typingTimeout: any; // Variable para almacenar el timeout

  constructor(private router: Router) {}

  // Navegar a la página de login
  goToLogin() {
    this.router.navigate(['/login']);
  }

  //Navegar a la pagina busqueda
  goToBuscar() {
    this.router.navigate(['/busqueda']);
  }

  // Opciones para los slides
  slidesOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true,
    scrollbar: { draggable: true }
  };

  // Método para alternar la expansión del cuadro de búsqueda
  searchToggle(evt: Event) {
    this.isExpanded = !this.isExpanded; // Alternar el estado
    const container = (evt.currentTarget as HTMLElement).closest('.search-wrapper');
    if (container) {
      if (this.isExpanded) {
        container.classList.add('expanded');
      } else {
        container.classList.remove('expanded');
        this.searchTerm = ''; // Limpiar el campo de búsqueda cuando se cierre
      }
    }
  }

  // Método que se ejecuta cuando el usuario escribe en el cuadro de búsqueda
  onSearchInput() {
    clearTimeout(this.typingTimeout); // Limpiar cualquier timeout previo

    // Configurar un nuevo timeout de 3 segundos para cerrar el cuadro de búsqueda
    this.typingTimeout = setTimeout(() => {
      this.closeSearch();
    }, 3000); // 3 segundos de inactividad antes de cerrar
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
}
