import { EventEmitter, inject } from "@angular/core";
import { AuthFacade } from "../../auth/store/auth.facade";
import { take } from "rxjs";
import { CanMatchFn, Router, UrlTree } from "@angular/router";

export const AuthGuard: CanMatchFn = () => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);
  const result = new EventEmitter<boolean | UrlTree>();

  authFacade.user$.pipe(take(1)).subscribe((user) => {
    setTimeout(() => {
      if (user === undefined) {
        result.emit(router.createUrlTree(['auth']));
      }

      result.emit(true);
    });
  });

  return result;
}
