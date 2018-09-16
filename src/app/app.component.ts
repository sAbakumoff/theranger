import { Component, OnInit } from '@angular/core';
import { AppStateService } from './services/app-state.service';
import { questions } from './resources/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentRangeObj: object;
  currentQuestion: object;
  state = 0;
  constructor(private appStateService: AppStateService) {
    this.currentQuestion = this.selectRandonQuestion();
  }

  private selectRandonQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
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
        ret.push(rangeItem.getSummaryNotation(startInd));
      }
    });
    return ret.join(', ');
  }

  checkAnswer() {
    if (this.currentRangeStr === this.currentQuestion['answer']) {
      this.state = 1;
    } else {
      this.state = -1;
    }
  }

  nextQuestion() {
    this.state = 0;
    this.currentQuestion = this.selectRandonQuestion();
    this.appStateService.reset();
  }

}
