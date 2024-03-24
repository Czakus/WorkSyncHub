import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: 'h5[cm-h5-header]',
  standalone: true
})
export class H5HeaderDirecitve {
  @HostBinding('class.cm-h5-header')
  cmH5Header = true;
}
