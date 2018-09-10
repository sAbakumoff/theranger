import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rangerator';
  pairs = ['22', '33', '44', '55', '66', '77', '88', '99', 'TT', 'JJ', 'QQ', 'KK', 'AA'];
  suitedAces = ['A2s', 'A3s', 'A4s', 'A5s', 'A6s', 'A7s', 'A8s', 'A9s', 'ATs', 'AJs', 'AQs', 'AKs'];
}
