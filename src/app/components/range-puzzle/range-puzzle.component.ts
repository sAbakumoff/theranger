import { Component, OnInit } from '@angular/core';
import { questions } from '../../resources/questions';
declare var require: any;
declare var $: any;
const prange = require('prange');

@Component({
  selector: 'app-range-puzzle',
  templateUrl: './range-puzzle.component.html',
  styleUrls: ['./range-puzzle.component.css']
})
export class RangePuzzleComponent implements OnInit {
  currentQuestion: object;
  currentQuestionRange: string[];
  tbl = '#tblRange';
  type1errors = 0;
  type2errors = 0;
  completed = false;
  combos = 0;
  constructor() {
    this.selectRandonQuestion();
  }

  ngOnInit() {
  }
  private selectRandonQuestion() {
    this.currentQuestion = questions[0]; // questions[Math.floor(Math.random() * questions.length)];
    this.currentQuestionRange = prange(this.currentQuestion['answer']);
  }
  onClick(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    target.classList.toggle('bg-info');
    let c = 0;
    $(this.tbl).find('td.bg-info').each(() => {
      const hand = $(this).text();
      if (hand.endsWith('o')) {
        c += 12;
      } else if (hand.endsWith('s')) {
        c += 4;
      } else {
        c += 6;
      }
    });
    this.combos = c;
  }
  check() {
    const givenAnswer = $(this.tbl).find('.bg-info').map(function () { return this.innerText; }).get();
    const missing = this.currentQuestionRange.filter(item => givenAnswer.indexOf(item) < 0);
    this.type1errors = $(this.tbl).find('td').filter(function () {
      return missing.indexOf($(this).text()) >= 0;
    }).addClass('bg-warning').length;

    const extra = givenAnswer.filter(i => this.currentQuestionRange.indexOf(i) < 0);
    this.type2errors = $(this.tbl).find('td').filter(function () {
      return extra.indexOf($(this).text()) >= 0;
    }).addClass('bg-danger').length;

    this.completed = true;

  }

  next() {
    $(this.tbl).find('td').removeClass('bg-info').removeClass('bg-danger').removeClass('bg-warning');
    this.selectRandonQuestion();
    this.completed = false;
    this.combos = 0;
  }

  get combosShare() {
    return this.combos / 1326;
  }
}
