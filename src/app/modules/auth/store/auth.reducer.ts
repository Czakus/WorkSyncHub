import { createReducer } from "@ngrx/store";
import { AuthInitialState, AuthState } from "./auth.state";

export const AuthReducer = createReducer<AuthState>(
  AuthInitialState,

)
