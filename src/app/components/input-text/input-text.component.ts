import { Component, inject, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputBase } from '../tokens/input-base';

@Component({
  selector: 'app-input-text',
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
      useFactory: () => inject(InputTextComponent, { self: true }),
    },
  ],
})
export class InputTextComponent implements InputBase {
  label = input.required<string>();

  type = 'text';
  control = new FormControl();
}
