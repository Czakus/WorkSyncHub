export interface User {
  readonly id: string;
}

export interface AuthState {
  readonly user?: User;
}

export const AuthInitialState: AuthState = {
  user: undefined
}
