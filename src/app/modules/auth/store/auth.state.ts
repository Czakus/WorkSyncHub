import { UserCredential } from "firebase/auth";

export interface SignInRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthState {
  readonly user?: UserCredential;
}

export const AuthInitialState: AuthState = {
  user: undefined
}
