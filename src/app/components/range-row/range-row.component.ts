import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-range-row',
  templateUrl: './range-row.component.html',
  styleUrls: ['./range-row.component.css']
})
export class RangeRowComponent implements OnInit {
  @Input() hands: Array<string>;
  @Input() multiplier: number;
  @Input() title: string;
  currentHandInd = 0;
  constructor() { }

  ngOnInit() {
  }

  get currentHand() {
    return this.hands && this.hands.length ? this.hands[this.currentHandInd] : '';
  }

  get range() {
    return this.currentHand + '+';
  }

  get amountOfHands() {
    return this.currentHandInd + 1 + '';
  }

  get amountOfCombos() {
    return this.multiplier * (this.currentHandInd + 1);
  }

  get percentOfCombos() {
    return this.amountOfCombos / 1326;
  }

  onDown() {
    if (this.currentHandInd > 0) { this.currentHandInd--; }
  }

  onUp() {
    if (this.currentHandInd < this.hands.length - 1) { this.currentHandInd++; }
  }
}
