import { Component, inject } from '@angular/core';
import { SelectivePreloadingStrategyService } from './core/services/selective-preloading-strategy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  preloadindStrategy = inject(SelectivePreloadingStrategyService);

  constructor(){
    console.log(this.preloadindStrategy.preloadedModules);
  }
}
