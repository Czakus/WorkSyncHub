import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.development';
import { API_URL } from './shared/tokens/api-url.token';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthReducer } from './modules/auth/store/auth.reducer';
import { SignInService } from './modules/auth/services/sign-in.service';
import { AuthFacade } from './modules/auth/store/auth.facade';
import { SignInEffects } from './modules/auth/store/effects/sign-in.effects';
import { UserService } from './modules/auth/services/user.service';
import { AutoLoginEffects } from './modules/auth/store/effects/auto-login.effects';
import { RefreshTokenService } from './modules/auth/services/refresh-token.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync('noop'),
    provideRouter(routes),
    provideStore(),
    provideState('auth', AuthReducer),
    provideStoreDevtools({ name: 'WSH' }),
    provideEffects(
      SignInEffects,
      AutoLoginEffects
    ),

    AuthFacade,
    SignInService,
    UserService,
    RefreshTokenService,

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
    }
  ],
};
