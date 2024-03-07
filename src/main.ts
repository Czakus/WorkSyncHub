import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';
import { environment } from './environments/environment.development';

registerLocaleData(localePL);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

export const firebaseapp = initializeApp(environment.firebaseConfig);
export const auth = getAuth(firebaseapp);
