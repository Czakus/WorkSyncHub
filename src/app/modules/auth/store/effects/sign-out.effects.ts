import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SignOutAction, SignOutFailureAction, SignOutSuccessAction } from "../actions/sign-out.actions";
import { catchError, from, map, of, switchMap, tap } from "rxjs";
import { SignOutService } from "../../services/sign-out.service";
import { UserService } from "../../services/user.service";

@Injectable()
export class SignOutEffects {
  actions$ = inject(Actions);
  signOutService = inject(SignOutService);
  userService = inject(UserService);

  signOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SignOutAction),
      switchMap(() => from(this.signOutService.signOut()).pipe(
        map(() => SignOutSuccessAction()),
        catchError((error) => of(SignOutFailureAction({ error: error })))
      ))
    )
  })

  signOutSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SignOutSuccessAction),
      tap(() => this.userService.clearUser())
    )
  },
  {
    dispatch: false
  })
}
