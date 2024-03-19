import { createAction, props } from "@ngrx/store";
import { User } from "firebase/auth";

export const RefreshTokenAction = createAction(
  '[Auth] Refresh Token',
  props<{ user: User}>()
)

export const RefreshTokenSuccessAction = createAction(
  '[Auth] Refresh Token - Success',
  props<{ token: string }>()
)

export const RefreshTokenFailureAction = createAction(
  '[Auth] Refresh Token - Failure',
  props<{ error: unknown}>()
)
