import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { PipeModule } from "../../shared/pipes/pipe.module";
import { CommonMaterialModule } from '../common-material/common-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AddressComponent,
        AddressDetailsComponent,
        AddressFormComponent
    ],
    imports: [
        CommonModule,
        SharedComponentModule,
        PipeModule,
        CommonMaterialModule,
        ReactiveFormsModule
    ],
    exports: [
        AddressComponent,
        AddressDetailsComponent,
        AddressFormComponent
    ]
})
export class AddressModule { }
