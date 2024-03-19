import { UserCredential } from "firebase/auth";

export interface SignInRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthState {
  readonly userCred?: UserCredential;
  readonly isLoggedIn: boolean;
}

export const AuthInitialState: AuthState = {
  userCred: undefined,
  isLoggedIn: false
}
