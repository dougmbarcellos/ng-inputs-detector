import { Component, inject, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputBase } from '../tokens/input-base';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <label>{{ label() }}</label>

    <input [type]="type" [formControl]="control" />
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  providers: [
    {
      provide: InputBase,
      useFactory: () => inject(InputNumberComponent, { self: true }),
    },
  ],
})
export class InputNumberComponent implements InputBase {
  label = input.required<string>();

  type = 'number';
  control = new FormControl();
}
