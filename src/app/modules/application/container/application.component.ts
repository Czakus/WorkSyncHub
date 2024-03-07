import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SideMenuComponent } from "../components/side-menu/side-menu.component";
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: 'wsh-app',
  templateUrl: 'application.component.html',
  styleUrls: ['application.component.scss'],
  standalone: true,

  imports: [
    CommonModule,
    SideMenuComponent,
    HeaderComponent
  ]
})
export class AppComponent {

}
