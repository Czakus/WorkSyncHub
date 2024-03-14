import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'wsh-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,

  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class SideMenuComponent {

}
