import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cust-size]',
  standalone: true,
})
export class SizeDirective {
  @Input('cm-size')
  sizeName = '';

  @HostBinding('class')
  get className() {
    return 'cm-size-' + this.sizeName;
  }
}
