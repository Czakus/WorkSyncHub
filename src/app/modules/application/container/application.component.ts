import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'wsh-app',
  templateUrl: 'application.component.html',
  styleUrls: ['application.component.scss'],
  standalone: true,

  imports: [
    CommonModule,

  ]
})
export class AppComponent {

}
