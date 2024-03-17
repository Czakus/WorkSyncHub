import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from '@angular/material/sidenav';
import { UserService } from "../../../auth/services/user.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { SignOutAction } from "../../../auth/store/actions/sign-out.actions";

@Component({
  selector: 'wsh-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,

  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class SideMenuComponent {

  userService = inject(UserService);
  router = inject(Router);
  store = inject(Store);


  logout() {
    this.router.navigate(['/']);
    this.userService.clearUser();
    this.store.dispatch(SignOutAction());
  }

}
