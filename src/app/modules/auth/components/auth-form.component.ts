import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule
  ]
})
export class AuthFormComponent {
  constructor(private formBuilder: NonNullableFormBuilder) {}

  formGroup = this.createForm();

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
