import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const selectAuth = createFeatureSelector<AuthState>('auth');

export const selectAuthUser = createSelector(selectAuth, (state) => state.userCred);

export const selectIsLoggedIn = createSelector(selectAuth, (state) => state.isLoggedIn);
