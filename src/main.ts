import { bootstrapApplication } from '@angular/platform-browser';
import { LandingComponent } from './app/landing/landing.component';

bootstrapApplication(LandingComponent)
  .catch(err => console.error(err));
