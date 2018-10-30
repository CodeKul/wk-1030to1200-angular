import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit{

  @Input('appUnless')
  isFalse : boolean

  constructor(
    private tmRf : TemplateRef<any>,
    private vcRf : ViewContainerRef
  ) { 
    console.log(vcRf)
  }

  ngOnInit() {
    if(!this.isFalse) {
      this.vcRf.createEmbeddedView(this.tmRf)
    }
    else {
      this.vcRf.clear()
    }
  }
}
 