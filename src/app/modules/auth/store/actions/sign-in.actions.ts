import { createAction, props } from "@ngrx/store";
import { SignInRequest, User } from "../auth.state";

export const SignInAction = createAction(
  '[Auth] Sign In',
  props<{signInRequest: SignInRequest}>()
);

export const SignInSuccessAction = createAction(
  '[Auth] Sign In - Success',
  props<{user: User}>()
);

export const SignInFailureAction = createAction(
  '[Auth] Sign In - Failure',
);
