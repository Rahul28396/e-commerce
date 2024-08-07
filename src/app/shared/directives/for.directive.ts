import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

class ForContext<T> {
  $implicit!: T
  index: number = 0;
  odd!: T;
  even!: T;
}

@Directive({
  selector: '[for]'
})
export class ForDirective<T> implements OnChanges{

  @Input() forOf: Array<T> = []

  constructor(private tempateRef: TemplateRef<ForContext<T>>, private containerRef: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.forOf.length){
      this.containerRef.clear();
      for (let index = 0; index < this.forOf.length; index++) {
        
        this.containerRef.createEmbeddedView(this.tempateRef, {
          $implicit: this.forOf[index],
          index: index+1,
          odd: index % 2 !== 0 ? this.forOf[index] : {},
          even: index % 2 === 0 ? this.forOf[index] : {}
        })
      }
    }
  }

}
