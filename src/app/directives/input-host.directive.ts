import { Directive, inject } from '@angular/core';
import { InputBase as InputControl } from '../components/tokens/input-base';

@Directive({
  selector: '[appInputHost]',
  standalone: true
})
export class InputHostDirective {
  host = inject(InputControl)

  constructor() { }

}
