import { Injectable } from "@angular/core";
import { User, getIdToken } from "firebase/auth";

@Injectable()
export class RefreshTokenService {
  refreshToken(user: User) {
    return getIdToken(user, true);
  }
}
