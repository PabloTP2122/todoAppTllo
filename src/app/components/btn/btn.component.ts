import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  @Input() typeBtn: 'submit' | 'button' | 'reset' = 'button';
  @Input() color: 'primary' | 'danger' | 'light' | 'success' = 'primary';
  //@Input() color:keyof typeof this.mapColors= 'success'

  mapColors = {
    success: {
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:bg-success-300': true,
      'text-white': true,
    },
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
      'text-white': true,

    },
    danger: {
      'bg-red-700': true,
      'hover:bg-red-800': true,
      'focus:ring-red-300': true,
      'text-white': true,

    },
    light: {
      'bg-gray-50': true,
      'hover:bg-gray-200': true,
      'focus:ring-gray-50': true,
      'text-gray-800': true,

    },
  }
  ngOnInit(): void {


  }
  get colors() {
    const colors = this.mapColors[this.color];
    if (colors) {
      return colors;
    }
    return {}

  }
}
