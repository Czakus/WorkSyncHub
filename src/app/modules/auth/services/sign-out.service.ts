import { Injectable } from "@angular/core";
import { getAuth, signOut } from "firebase/auth";

@Injectable()
export class SignOutService {
  signOut() {
    return signOut(getAuth());
  }
}
