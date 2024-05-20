import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { OrdersComponent } from './orders/orders.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { ManageCardsComponent } from './manage-cards/manage-cards.component';
import { ManageUpiComponent } from './manage-upi/manage-upi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonMaterialModule } from '../common-material/common-material.module';


@NgModule({
  declarations: [
    UserComponent,
    ProfileDetailsComponent,
    OrdersComponent,
    ManageAddressComponent,
    ManageCardsComponent,
    ManageUpiComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    CommonMaterialModule
  ]
})
export class UserModule { }
