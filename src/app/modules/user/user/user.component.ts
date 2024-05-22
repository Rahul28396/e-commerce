import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  /**
   * To specify a relative route, use the NavigationExtras relativeTo property
   * @param path url path
   */
  goToPath(path: string){
    this._router.navigate([path], { relativeTo: this._route})
  }

}
