import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: 'h3[cm-h3-header]',
  standalone: true
})
export class H3HeaderDirecitve {
  @HostBinding('class.cm-h3-header')
  wshH5Header = true;
}
