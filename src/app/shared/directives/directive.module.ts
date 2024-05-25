import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnlessDirective } from './unless.directive';

const directives = [
  UnlessDirective
]

@NgModule({
  declarations: directives,
  imports: [
    CommonModule
  ],
  exports: directives
})
export class DirectiveModule { }
