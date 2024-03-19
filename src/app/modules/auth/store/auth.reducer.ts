import { createReducer, on } from "@ngrx/store";
import { AuthInitialState, AuthState } from "./auth.state";
import { SignInSuccessAction } from "./actions/sign-in.actions";
import { AutoLoginSuccessAction } from "./actions/auto-login.actions";
import { SignOutSuccessAction } from "./actions/sign-out.actions";
import { RefreshTokenSuccessAction } from "./actions/refresh-token.actions";


export const AuthReducer = createReducer<AuthState>(
  AuthInitialState,

  on(SignInSuccessAction, (state, action): AuthState => ({
    ...state,
    userCred: {...action.user},
    isLoggedIn: true
  })),

  on(AutoLoginSuccessAction, (state, action): AuthState => ({
    ...state,
    userCred: action.userCred,
    isLoggedIn: true
  })),

  on(SignOutSuccessAction, (state): AuthState => ({
    ...state,
    userCred: undefined,
    isLoggedIn: false
  })),

  on(RefreshTokenSuccessAction, (state, action): AuthState => ({
    ...state,
    userCred: {
      ...state.userCred!,
      user: {
        ...(state.userCred!.user ?? {} ),
        refreshToken: action.token
      }
    }
  })),
)
