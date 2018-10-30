import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  @Input('appSample')
  @HostBinding('style.width')
  wd : string

  @HostBinding('class.brd')
  brd : boolean

  constructor() { }

  @HostListener('mouseenter')
  inBx() {
    this.wd = '600px'
    this.brd = false
  }

  @HostListener('mouseleave')
  outBx() {
    this.wd = '300px'
    this.brd = true
  }
}
