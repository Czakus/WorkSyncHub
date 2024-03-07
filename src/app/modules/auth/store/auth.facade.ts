import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAuthUser } from "./auth.selectors";
import { SignInRequest } from "./auth.state";
import { SignInAction } from "./actions/sign-in.actions";

@Injectable()
export class AuthFacade {

  user$ = this.store.select(selectAuthUser);

  constructor(private store: Store) {}

  signUp(signInRequest: SignInRequest) {
    this.store.dispatch(SignInAction({ signInRequest: signInRequest }));
  }
}
