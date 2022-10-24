import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // selector name appAction, use to apply the directive to the element 
  selector: '[appAction]'
})
export class ActionDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
