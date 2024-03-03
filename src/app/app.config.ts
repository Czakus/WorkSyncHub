import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.development';
import { API_URL } from './shared/tokens/api-url.token';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideStoreDevtools({ name: 'WSH' }),
    provideEffects(),

    {
      provide: LOCALE_ID,
      useValue: 'pl-PL',
    },

    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pl-PL',
    },

    {
      provide: API_URL,
      useValue: environment.API_URL
    }, provideAnimationsAsync('noop')

  ],
};
