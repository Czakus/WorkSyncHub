import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cust-color]',
  standalone: true,
})
export class ColorDirective {
  @Input('cm-color')
  colorName = '';

  @HostBinding('class')
  get className() {
    return 'cm-color-' + this.colorName;
  }
}
