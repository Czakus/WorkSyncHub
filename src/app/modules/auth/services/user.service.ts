import { Injectable } from "@angular/core";
import { UserCredential } from "firebase/auth";

@Injectable()
export class UserService {
  private userKey = 'userJSON';

  readUser() {
   const userJSON = localStorage.getItem(this.userKey);

   if(!userJSON) {
    return undefined;
   }

   return JSON.parse(userJSON) as UserCredential;
  }

  writeUser(user: UserCredential) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  clearUser() {
    localStorage.removeItem(this.userKey);
  }
}
