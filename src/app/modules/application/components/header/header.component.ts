import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'wsh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,

  imports: [
    CommonModule
  ]
})
export class HeaderComponent {

}
