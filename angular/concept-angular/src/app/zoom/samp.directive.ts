import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSamp]'
})
export class SampDirective {
mythumbnail:string
fullimage:string

  constructor() { }


}
