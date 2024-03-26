import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: 'button [mat-button] [cm-button]',
  standalone: true
})
export class ButtonDirective {
  @HostBinding('class.cm-button')
  cmButton = true;
}
