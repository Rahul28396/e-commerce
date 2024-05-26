import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrl: './custom-slider.component.scss',
  host: {
    'role': 'slider',
    '[tabIndex]': 'disabled ? -1 : 0',
    // '(keydown)': 'updateValue($event)',
    '[value]': 'value'
  }
})
export class CustomSliderComponent {

  value: number = 0;
  disabled: boolean = false;

  @HostListener('keydown', ['$event'])
  updateValue(event: Event) {
    console.log(event);
    this.value = 100;
  }
}
