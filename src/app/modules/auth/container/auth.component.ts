import { Component, inject } from "@angular/core";
import { AuthFormComponent, SignInResult } from "../components/auth-form.component";
import { AuthFacade } from "../store/auth.facade";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'wsh-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss'],
  standalone: true,

  imports: [
    CommonModule,
    AuthFormComponent
  ]
})
export class AuthComponent {


  authFacade = inject(AuthFacade);
  router = inject(Router);

  logged$ = this.authFacade.isLoggedIn$.subscribe((value) => {
    if(value) {
      return this.router.navigateByUrl('/application');
    }

    return this.authFacade.autoSignIn();
  });

  onSignIn(signInForm: SignInResult) {
    this.authFacade.signUp({
      email: signInForm.controls.email.value,
      password: signInForm.controls.password.value,
      rememberMe: signInForm.controls.rememberMe.value
    });
  }
}
