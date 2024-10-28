import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // Redirige la ruta raíz a la página de inicio
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) // Carga el módulo de la página de inicio de sesión
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule) // Carga el módulo de la página de registro
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule) // Carga el módulo de la página de inicio
  },
  {
    path: 'restablecer-contraseña',
    loadChildren: () => import('./restablecer-contra/restablecer-contra.module').then(m => m.RestablecerContraPageModule) // Carga el módulo de la página de restablecimiento de contraseña
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'elegir-conductor',
    loadChildren: () => import('./elegir-conductor/elegir-conductor.module').then( m => m.ElegirConductorPageModule)
  },
  {
    path: 'viaje-registrado',
    loadChildren: () => import('./viaje-registrado/viaje-registrado.module').then( m => m.ViajeRegistradoPageModule)
  },
  {
    path: 'mis-viajes',
    loadChildren: () => import('./mis-viajes/mis-viajes.module').then( m => m.MisViajesPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Configura el enrutamiento con precarga de todos los módulos
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
