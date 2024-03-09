import { Injectable } from "@angular/core";
import { catchError, from, map, of, switchMap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { SignInService } from "../../services/sign-in.service";
import { AuthFacade } from "../auth.facade";
import { SignInAction, SignInFailureAction, SignInSuccessAction, } from "../actions/sign-in.actions";

@Injectable()
export class SignInEffects {

  constructor(
    private signInService: SignInService,
    private actions$: Actions,
    private authFacade: AuthFacade
  ) {}

 signIn$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(SignInAction),
    switchMap((action) => from(this.signInService.signIn(action.signInRequest.email, action.signInRequest.password)).pipe(
      map(userCred => SignInSuccessAction({user: userCred})),
      catchError((error) => of(SignInFailureAction({error: error})))
    ))
  )
 })
}
