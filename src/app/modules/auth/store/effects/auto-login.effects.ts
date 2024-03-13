import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AutoLoginAction, AutoLoginFailureAction, AutoLoginSuccessAction } from '../actions/auto-login.actions';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs';

@Injectable()
export class AutoLoginEffects {

  actions$ = inject(Actions);
  userService = inject(UserService);

  autoSignIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AutoLoginAction),
      map(() => {
        const userCred = this.userService.readUser();

        if(userCred) {
          return AutoLoginSuccessAction({userCred: userCred});
        }

        return AutoLoginFailureAction();
      })
    )
  });
}
