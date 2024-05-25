import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnlessDirective } from './unless.directive';
import { ForDirective } from './for.directive';

const directives = [
  UnlessDirective,
  ForDirective
]

@NgModule({
  declarations: directives,
  imports: [
    CommonModule
  ],
  exports: directives
})
export class DirectiveModule { }
