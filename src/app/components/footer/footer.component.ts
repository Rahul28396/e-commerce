import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ContentChild('defaultContent',{ static: true, descendants: true}) defaultContentTemplate!: TemplateRef<any>;

  hasDefaultContent(): boolean {
    return !!this.defaultContentTemplate;
  }
}
