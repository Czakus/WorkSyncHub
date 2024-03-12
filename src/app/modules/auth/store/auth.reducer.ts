import { createReducer, on } from "@ngrx/store";
import { AuthInitialState, AuthState } from "./auth.state";
import { SignInSuccessAction } from "./actions/sign-in.actions";

export const AuthReducer = createReducer<AuthState>(
  AuthInitialState,

  on(SignInSuccessAction, (state, action): AuthState => ({
    ...state,
    user: action.user,
    isLoggedIn: true
  })
  )
)
