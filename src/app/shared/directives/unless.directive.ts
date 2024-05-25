import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]',
})
export class UnlessDirective implements OnChanges{

  @Input() unless!: boolean;

  @Input() unlessElse!: TemplateRef<any>;

  constructor(private templateRef: TemplateRef<any>, private containerRef : ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['unless'].previousValue !== changes['unless'].currentValue){
        this.render();
      }
  }

  render(){
    if(!this.unless) {
      this.containerRef.clear();
      this.containerRef.createEmbeddedView(this.templateRef);
    }else if(this.unlessElse){
      this.containerRef.createEmbeddedView(this.unlessElse);
    }else{
      this.containerRef.clear();
    }
  }


}
