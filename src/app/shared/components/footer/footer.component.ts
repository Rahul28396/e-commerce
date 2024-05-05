import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ContentChild('defaultContent') defaultContentTemplate!: TemplateRef<any>;

  hasDefaultContent(): boolean {
    return !!this.defaultContentTemplate;
  }
}
