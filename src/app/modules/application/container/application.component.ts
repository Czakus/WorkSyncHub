import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { SideMenuComponent } from "../components/side-menu/side-menu.component";
import { HeaderComponent } from "../components/header/header.component";
import { UserService } from "../../auth/services/user.service";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'wsh-app',
  templateUrl: 'application.component.html',
  styleUrls: ['application.component.scss'],
  standalone: true,

  imports: [
    CommonModule,
    SideMenuComponent,
    HeaderComponent,
    MatButtonModule
  ]
})
export class AppComponent {
  userService = inject(UserService);


}
