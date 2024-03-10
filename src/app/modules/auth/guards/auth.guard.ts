import { EventEmitter, inject } from "@angular/core";
import { AuthFacade } from "../store/auth.facade";
import { take } from "rxjs";
import { CanMatchFn, Router, UrlTree } from "@angular/router";

export const AuthGuard: CanMatchFn = () => {
  const authFacade = inject(AuthFacade);
  const result = new EventEmitter<boolean|UrlTree>();
  const router = inject(Router);

  authFacade.user$.pipe(take(1)).subscribe((user) => {
    if(user === undefined) {
      result.emit(true);
    }

    result.emit(router.createUrlTree(['application']));
  })

  return result;
}
