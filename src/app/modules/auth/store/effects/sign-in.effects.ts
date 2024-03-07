import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SignInService } from "../../services/sign-in.service";
import { AuthFacade } from "../auth.facade";
import { SignInAction, SignInSuccessAction, } from "../actions/sign-in.actions";
import { from, map, switchMap, tap } from "rxjs";

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
      tap(userCred => console.log(userCred)),
      map(userCred => SignInSuccessAction({user: {id: userCred.user.providerId}}))
    ))
  )
 })
}
