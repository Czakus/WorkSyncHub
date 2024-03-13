import { createAction, props } from "@ngrx/store";

export const SignOutAction = createAction(
  '[Auth] SignOut Action'
)

export const SignOutSuccessAction = createAction(
  '[Auth] SignOut Action - Success'
)

export const SignOutFailureAction = createAction(
  '[Auth] SignOut Action - Failure',
  props<{ error: unknown }>()
)
