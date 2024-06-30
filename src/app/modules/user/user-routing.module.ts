import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { ManageCardsComponent } from './manage-cards/manage-cards.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ManageUpiComponent } from './manage-upi/manage-upi.component';
import { canComponentDeactivateGuard } from 'src/app/core/route-guards/can-component-deactivate.guard';
import { profileDetailsResolver } from 'src/app/core/resolvers/profile-details-resolver.resolver';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    title: 'PROFILE',
    children: [
      {
        path: 'addresess',
        title: 'SAVED ADDRESS',
        component: ManageAddressComponent
      },
      {
        path: 'cards',
        title: 'SAVED CARDS',
        component: ManageCardsComponent
      },
      {
        path: 'orders',
        title: 'ORDERS',
        component: OrdersComponent
      },
      {
        path: 'orders/:orderId',
        title: 'ORDER DETAILS',
        component: OrderDetailsComponent
      },
      {
        path: 'vpa',
        title: 'SAVED VPA',
        component: ManageUpiComponent
      },
      {
        path: 'profile-details',
        component: ProfileDetailsComponent,
        canDeactivate: [canComponentDeactivateGuard],
        resolve: {
          loggedInUser : profileDetailsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
