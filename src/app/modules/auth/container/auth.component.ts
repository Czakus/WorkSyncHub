import { Component } from "@angular/core";
import { AuthFormComponent } from "../components/auth-form.component";

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

}
