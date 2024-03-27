import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: 'mat-checkbox [cm-checkbox]',
  standalone: true
})
export class CheckboxDirective {
  @HostBinding('class.cm-checkbox')
  cmCheckbox = true;
}
