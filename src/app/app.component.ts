import { Component } from '@angular/core';
import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rangerator';
  currentRangeObj : object;
  constructor(private appStateService : AppStateService){

  }

  ngOnInit() {
    this.appStateService.CurrentRange.subscribe(range=>this.currentRangeObj = range)
  }

  get rangeItems(){
    return this.appStateService.structure;
  }

  get amountOfHands() : number{
    var ret = 0;
    this.appStateService.structure.forEach(rangeItem => {
      var startInd = this.currentRangeObj[rangeItem.name];
      if(startInd >= 0)
        ret += rangeItem.getNumberOfHands(startInd);
    })
    return ret;
  }

  get amountOfCombos() : number {
    var ret = 0;
    this.appStateService.structure.forEach(rangeItem => {
      var startInd = this.currentRangeObj[rangeItem.name];
      if(startInd >= 0)
        ret += rangeItem.getNumberOfCombos(startInd);
    })
    return ret;
  }

  get percentOfCombos() {
    return this.amountOfCombos / 1326;
  }

  onSubrangeChanged(event : {r:string, i :number}){
    this.appStateService.setSubRangeStart(event);
  }

  get currentRangeStr() : string{
    var ret = [];
    this.appStateService.structure.forEach(rangeItem => {
      var startInd = this.currentRangeObj[rangeItem.name];
      if(startInd >= 0)
        ret.push(rangeItem.getNotation(startInd));
    })
    return ret.join(', ');
  }

}
