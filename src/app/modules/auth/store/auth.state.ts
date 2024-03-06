export interface User {
  readonly id: string;
}

export interface SignInRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthState {
  readonly user?: User;
}

export const AuthInitialState: AuthState = {
  user: undefined
}
