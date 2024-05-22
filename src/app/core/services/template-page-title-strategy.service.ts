import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TemplatePageTitleStrategyService extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`EShop | ${title}`);
    }
  }

  get routeTitle(){
    return this.title.getTitle();
  }

  setTitle(title : string){
    this.title.setTitle(`EShop | ${title}`);
  }
}