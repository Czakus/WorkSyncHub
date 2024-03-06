import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAuthUser } from "./auth.selectors";

@Injectable()
export class AuthFacade {

  user$ = this.store.select(selectAuthUser);

  constructor(private store: Store) {}

}
