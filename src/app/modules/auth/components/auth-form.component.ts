import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output, inject } from "@angular/core";
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { H5HeaderDirecitve } from "../../../../../projects/custom-material/src/lib/components/typography/h5-header.directive";
import { H3HeaderDirecitve } from "../../../../../projects/custom-material/src/lib/components/typography/h3-header.directive";

export type SignInResult = FormGroup<SignInForm>;

export interface SignInForm {
  email: FormControl<string>;
  password: FormControl<string>;
  rememberMe: FormControl<boolean>;
}

@Component({
  selector: 'wsh-auth-form',
  templateUrl: 'auth-form.component.html',
  styleUrls: ['auth-form.component.scss'],
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    H5HeaderDirecitve,
    H3HeaderDirecitve,
  ]
})
export class AuthFormComponent {

  formBuilder = inject(NonNullableFormBuilder);

  @Output()
  signIn = new EventEmitter<SignInResult>();

  formGroup = this.createForm();

  onSignInClicked() {
    this.signIn.emit(this.formGroup);
  }

  private createForm() {
    return this.formBuilder.group<SignInForm>({
      password: this.formBuilder.control('', Validators.required),
      rememberMe: this.formBuilder.control(false),

      email: this.formBuilder.control('', [
        Validators.email,
        Validators.required,
      ]),
    });
  }
}
