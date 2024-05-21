import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { ManageCardsComponent } from './manage-cards/manage-cards.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ManageUpiComponent } from './manage-upi/manage-upi.component';
import { canComponentDeactivateGuard } from 'src/app/core/route-guards/can-component-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'addresess',
        component: ManageAddressComponent
      },
      {
        path: 'cards',
        component: ManageCardsComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'vpa',
        component: ManageUpiComponent
      },
      {
        path: 'profile-details',
        component: ProfileDetailsComponent,
        canDeactivate: [canComponentDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
