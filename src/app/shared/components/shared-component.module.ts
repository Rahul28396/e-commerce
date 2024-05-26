import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipes/pipe.module';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { DirectiveModule } from '../directives/directive.module';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';

const sharedComponents = [
  ProductComponent,
  EmptyStateComponent,
  CustomSliderComponent
]

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    RouterModule,
    MatIcon,
    DirectiveModule
  ],
  declarations: sharedComponents,
  exports: sharedComponents
})
export class SharedComponentModule { }
