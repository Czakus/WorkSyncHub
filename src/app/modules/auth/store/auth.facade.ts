import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAuthUser, selectIsLoggedIn } from "./auth.selectors";
import { SignInRequest } from "./auth.state";
import { SignInAction } from "./actions/sign-in.actions";
import { AutoLoginAction } from "./actions/auto-login.actions";

@Injectable()
export class AuthFacade {

  user$ = this.store.select(selectAuthUser);

  isLoggedIn$ = this.store.select(selectIsLoggedIn);

  constructor(private store: Store) {}

  signUp(signInRequest: SignInRequest) {
    this.store.dispatch(SignInAction({ signInRequest: signInRequest }));
  }

  autoSignIn() {
    this.store.dispatch(AutoLoginAction());
  }
}
