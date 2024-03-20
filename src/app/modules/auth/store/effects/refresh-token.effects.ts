import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RefreshTokenAction, RefreshTokenFailureAction, RefreshTokenSuccessAction } from "../actions/refresh-token.actions";
import { catchError, from, map, of, switchMap } from "rxjs";
import { RefreshTokenService } from "../../services/refresh-token.service";
import { AuthFacade } from "../auth.facade";

@Injectable()
export class RefreshTokenEffects {
  actions$ = inject(Actions);
  refreshTokenService = inject(RefreshTokenService);
  authFacade = inject(AuthFacade);

  $refreshToken = createEffect(() => {
    return this.actions$.pipe(
      ofType(RefreshTokenAction),
      switchMap((action) =>
        from(this.refreshTokenService.refreshToken(action.user)).pipe(
          map((token) => RefreshTokenSuccessAction({token})),
          catchError((error) => of(RefreshTokenFailureAction({ error })))
        )
      )
    )
  })
}
