import { Component } from "@angular/core";
import { AuthFormComponent, SignInResult } from "../components/auth-form.component";
import { AuthFacade } from "../store/auth.facade";

@Component({
  selector: 'wsh-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss'],
  standalone: true,

  imports: [
    AuthFormComponent
  ]
})
export class AuthComponent {

  constructor(
    private authFacade: AuthFacade,

  ) {}

  onSignIn(signInForm: SignInResult) {
    console.log(signInForm);
    this.authFacade.signUp({
      email: signInForm.controls.email.value,
      password: signInForm.controls.password.value,
      rememberMe: signInForm.controls.rememberMe.value
    });
  }
}
