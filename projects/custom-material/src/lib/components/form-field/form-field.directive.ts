import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: 'mat-form-field[cm-form-field]',
  standalone: true
})
export class FormFieldDirective {
  @HostBinding('class.cm-form-field')
  cmFormField = true;
}
