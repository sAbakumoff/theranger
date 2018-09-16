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
  tbl: any;
  constructor() {
    this.selectRandonQuestion();
  }

  ngOnInit() {
  }
  private selectRandonQuestion() {
    this.currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    this.currentQuestionRange = prange(this.currentQuestion['answer']);
    // console.log(this.currentQuestionRange);
  }
  onClick(event) {
    this.tbl = event.currentTarget;
    const target = event.target || event.srcElement || event.currentTarget;
    target.classList.toggle('bg-info');
    /*if (target.classList.contains('pair')) {
      target.classList.add('bg-success');
    }*/
  }
  check() {
    const givenAnswer = $(this.tbl).find('.bg-info').map(function () { return this.innerText; }).get();
    const missing = this.currentQuestionRange.filter(item => givenAnswer.indexOf(item) < 0);
    $(this.tbl).find('td').filter(function () {
      return missing.indexOf($(this).text()) >= 0;
    }).addClass('bg-warning');

    const extra = givenAnswer.filter(i => this.currentQuestionRange.indexOf(i) < 0);
    $(this.tbl).find('td').filter(function () {
      return extra.indexOf($(this).text()) >= 0;
    }).addClass('bg-danger');

  }
}
