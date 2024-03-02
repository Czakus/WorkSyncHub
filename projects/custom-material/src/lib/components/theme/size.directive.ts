import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cust-size]',
  standalone: true,
})
export class SizeDirective {
  @Input('cust-size')
  sizeName = '';

  @HostBinding('class')
  get className() {
    return 'cust-size-' + this.sizeName;
  }
}
