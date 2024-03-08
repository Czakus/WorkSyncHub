import { createAction, props } from "@ngrx/store";
import { SignInRequest } from "../auth.state";
import { UserCredential } from "firebase/auth";

export const SignInAction = createAction(
  '[Auth] Sign In',
  props<{ signInRequest: SignInRequest }>()
);

export const SignInSuccessAction = createAction(
  '[Auth] Sign In - Success',
  props<{ user: UserCredential }>()
);

export const SignInFailureAction = createAction(
  '[Auth] Sign In - Failure',
);
