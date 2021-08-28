import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'refinitiv-question1';
  anwser: boolean = false;
  number: number = 0;
  event: string = "isPrime"

  getNumber(event: any) {
    this.number = Math.round(event.target.value);
    if (this.number < 0) {
      this.number = 1
    }
    this.callEvent();
  }

  isPrime() {
    for (var i = 2; i < this.number; i++)
      if (this.number % i === 0) return false;
    return this.number > 1;
  }

  isFibonacci() {
    if (this.isSquare(5 * (this.number * this.number) - 4) || this.isSquare(5 * (this.number * this.number) + 4)) {
      return true;
    } else { return false; }
  }

  isSquare(n: number) {
    return this.number > 0 && Math.sqrt(n) % 1 === 0;
  }

  getEvent(event: any) {
    this.event = event.target.value;
    this.callEvent();
  }

  callEvent() {
    if (this.event == 'isPrime') {
      this.anwser = this.isPrime();
    } else {
      this.anwser = this.isFibonacci();
    }
  }
}
