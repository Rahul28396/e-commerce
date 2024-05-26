import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {

  @Input({required: true}) title: string = '';
  @Input({required: true}) subtitle: string = '';
  @Input({required: true}) icon : string = '';
}
