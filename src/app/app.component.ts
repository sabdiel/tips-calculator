import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  billTotal: number = 100;
  tipPercentage: number = 20;
  splitNumber: number = 1;

  get total(): number {
    return this.billTotal * (1 + (this.tipPercentage / 100));
  }

  get tip(): number {
    return this.billTotal * (this.tipPercentage / 100);
  }

  get split(): number {
    return this.total / this.splitNumber;
  }

}
