import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cust-color]',
  standalone: true,
})
export class ColorDirective {
  @Input('cust-color')
  colorName = '';

  @HostBinding('class')
  get className() {
    return 'cust-color-' + this.colorName;
  }
}
