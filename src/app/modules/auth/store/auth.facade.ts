import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

@Injectable()
export class AuthFacade {

  constructor(private store: Store) {}

}
