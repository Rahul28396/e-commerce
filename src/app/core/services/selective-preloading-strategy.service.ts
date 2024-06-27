import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService extends PreloadingStrategy{

  preloadedModules : string[] = [];
  constructor() {
    super();
  }

  override preload(route: Route, load: () => Observable<any>): Observable<any> {
    if(route.canMatch === undefined && route.data?.['preload'] && route.path !== null){
      this.preloadedModules.push(route.path ?? 'No module')
      load();
    }
    return of(null)
  }
}
