import { Injectable } from "@angular/core";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Injectable()
export class SignInService {
  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(getAuth(), email, password);
  }
}
