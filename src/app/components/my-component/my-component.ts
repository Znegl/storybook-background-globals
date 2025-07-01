import {Component, input} from '@angular/core';

@Component({
  selector: 'app-my-component',
  imports: [],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'
})
export class MyComponent {
  public title = input.required<string>()
}
