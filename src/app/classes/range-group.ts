import {RangeGroup} from '../interfaces/range';


export class CommonRangeGroup implements RangeGroup {
  public name: string;
  public title: string;
  public hands: string[];
  public multiplier: number;

  constructor(name: string, title: string, hands: string[], multiplier: number) {
    this.name = name;
    this.title = title;
    this.hands = hands.slice();
    this.multiplier = multiplier;
  }

  getNotation(ind: number) {
    if (ind < 0) {
      return '';
    }
    if (ind > 0) {
      return this.hands[ind] + '+';
    }
    return this.hands[ind];
  }

  getNumberOfHands(ind: number) {
    if (ind < 0) { return 0; }
    return ind + 1;
  }

  getNumberOfCombos(ind: number) {
    if (ind < 0) { return 0; }
    return this.getNumberOfHands(ind) * this.multiplier;
  }

  getPercentOfCombos(ind: number) {
    if (ind < 0) { return 0; }
    return this.getNumberOfCombos(ind) / 1326;
  }
}
