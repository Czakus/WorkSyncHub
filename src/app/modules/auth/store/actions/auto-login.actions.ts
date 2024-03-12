import { createAction, props } from "@ngrx/store";
import { UserCredential } from "firebase/auth";

export const AutoLoginAction = createAction(
  '[Auth] AutoSignIn Action'
)
export const AutoLoginSuccessAction = createAction(
  '[Auth] AutoSignIn Action - Success',
  props<{userCred: UserCredential | undefined}>()
)
export const AutoLoginFailureAction = createAction(
  '[Auth] AutoSignIn Action - Failure'
)
