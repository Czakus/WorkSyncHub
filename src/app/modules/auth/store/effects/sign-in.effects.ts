import { Injectable } from '@angular/core';
import { catchError, from, map, of, switchMap, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { SignInService } from '../../services/sign-in.service';
import {
  SignInAction,
  SignInFailureAction,
  SignInSuccessAction,
} from '../actions/sign-in.actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class SignInEffects {
  constructor(
    private signInService: SignInService,
    private actions$: Actions,
    private userService: UserService
  ) {}

  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SignInAction),
      switchMap((action) =>
        from(
          this.signInService.signIn(
            action.signInRequest.email,
            action.signInRequest.password
          )
        ).pipe(
          map((userCred) => SignInSuccessAction({ user: userCred })),
          catchError((error) => of(SignInFailureAction({ error: error })))
        )
      )
    );
  });

  signInSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SignInSuccessAction),
        tap((userCred) => this.userService.writeUser(userCred.user))
      );
    },

    {
      dispatch: false,
    }
  );
}
