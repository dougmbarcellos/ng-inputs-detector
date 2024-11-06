import { InputSignal } from '@angular/core'
import { FormControl } from '@angular/forms'

export abstract class InputBase {
  abstract label: InputSignal<any>
  abstract type: string
  abstract control: FormControl
}