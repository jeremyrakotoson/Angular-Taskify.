import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onIncrease() {
    if (this.counter < 10)
      this.counter++;
  }

  onDecrease() {
    if (this.counter > 0)
      this.counter--;
  }

}
