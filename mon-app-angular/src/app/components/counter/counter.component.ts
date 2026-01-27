import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() name: any;

  value = 0;

  increment(){
    this.value++;
  }
  decrement(){
    this.value--;
  }
}
