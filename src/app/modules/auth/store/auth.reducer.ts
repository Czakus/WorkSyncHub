import { createReducer, on } from "@ngrx/store";
import { AuthInitialState, AuthState } from "./auth.state";
import { SignInSuccessAction } from "./actions/sign-in.actions";
import { AutoLoginSuccessAction } from "./actions/auto-login.actions";
import { SignOutSuccessAction } from "./actions/sign-out.actions";


export const AuthReducer = createReducer<AuthState>(
  AuthInitialState,

  on(SignInSuccessAction, (state, action): AuthState => ({
    ...state,
    user: {...action.user},
    isLoggedIn: true
  })),

  on(AutoLoginSuccessAction, (state, action): AuthState => ({
    ...state,
    user: action.userCred,
    isLoggedIn: true
  })),

  on(SignOutSuccessAction, (state): AuthState => ({
    ...state,
    user: undefined,
    isLoggedIn: false
  }))
)
