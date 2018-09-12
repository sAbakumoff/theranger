import { Component, OnInit } from '@angular/core';
import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentRangeObj: object;
  constructor(private appStateService: AppStateService) {

  }

  ngOnInit() {
    this.appStateService.CurrentRange.subscribe(range => this.currentRangeObj = range);
  }

  get rangeItems() {
    return this.appStateService.structure;
  }

  get amountOfHands(): number {
    let ret = 0;
    this.appStateService.structure.forEach(rangeItem => {
      const startInd = this.currentRangeObj[rangeItem.name];
      if (startInd >= 0) {
        ret += rangeItem.getNumberOfHands(startInd);
      }
    });
    return ret;
  }

  get amountOfCombos(): number {
    let ret = 0;
    this.appStateService.structure.forEach(rangeItem => {
      const startInd = this.currentRangeObj[rangeItem.name];
      if (startInd >= 0) {
        ret += rangeItem.getNumberOfCombos(startInd);
      }
    });
    return ret;
  }

  get percentOfCombos() {
    return this.amountOfCombos / 1326;
  }

  onSubrangeChanged(event: { r: string, i: number }) {
    this.appStateService.setSubRangeStart(event);
  }

  get currentRangeStr(): string {
    const ret = [];
    this.appStateService.structure.forEach(rangeItem => {
      const startInd = this.currentRangeObj[rangeItem.name];
      if (startInd >= 0) {
        ret.push(rangeItem.getNotation(startInd));
      }
    });
    return ret.join(', ');
  }

}
