import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RangeGroup } from '../../interfaces/range';

@Component({
  selector: 'app-range-row',
  templateUrl: './range-row.component.html',
  styleUrls: ['./range-row.component.css']
})
export class RangeRowComponent implements OnInit {
  @Input() rangeItem: RangeGroup;
  @Output() rangeChanged: EventEmitter<{ r: string, i: number }> = new EventEmitter<{ r: string, i: number }>();
  currentHandInd = -1;
  constructor() { }

  ngOnInit() {

  }


  get range() {
    return this.rangeItem.getNotation(this.currentHandInd);
  }

  get amountOfHands() {
    return this.rangeItem.getNumberOfHands(this.currentHandInd);
  }

  get amountOfCombos() {
    return this.rangeItem.getNumberOfCombos(this.currentHandInd);
  }

  get percentOfCombos() {
    return this.rangeItem.getPercentOfCombos(this.currentHandInd);
  }

  onDown() {
    if (this.currentHandInd > 0) { this.currentHandInd--; this.emitChange(); }
  }

  onReset() {
    this.currentHandInd = -1;
    this.emitChange();
  }

  onUp() {
    if (this.currentHandInd < this.rangeItem.hands.length - 1) { this.currentHandInd++; this.emitChange(); }
  }

  emitChange() {
    this.rangeChanged.emit({ r: this.rangeItem.name, i: this.currentHandInd });
  }
}
