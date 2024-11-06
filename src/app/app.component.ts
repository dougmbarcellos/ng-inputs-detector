import { AfterContentInit, Component, viewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputNumberComponent } from "./components/input-number/input-number.component";
import { InputTextComponent } from "./components/input-text/input-text.component";
import { InputBase } from './components/tokens/input-base';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputNumberComponent, InputTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterContentInit {
  inputs = viewChildren(InputBase)

  ngAfterContentInit(): void {
    console.log(this.inputs())
  }
}
