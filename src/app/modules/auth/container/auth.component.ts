import { Component } from "@angular/core";
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

  constructor(
    private authFacade: AuthFacade,
    private router: Router
  ) {
  }

  logged$ = this.authFacade.isLoggedIn$.subscribe((value) => {
    console.log(value);
    if(value) {
      this.router.navigateByUrl('/application');
    }
  })



  onSignIn(signInForm: SignInResult) {
    this.authFacade.signUp({
      email: signInForm.controls.email.value,
      password: signInForm.controls.password.value,
      rememberMe: signInForm.controls.rememberMe.value
    });
  }
}
