import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Routes} from '@angular/router';
import { AppModule } from './app/app.module';
export const routes:Routes=[
  
]
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
