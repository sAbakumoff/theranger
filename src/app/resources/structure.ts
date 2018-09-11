function getPlusNotation(ind : number){
  if(ind < 0)
    return '';
  if(ind < this.hands.length - 1){
    return this.hands[ind] + '+';
  }
  return this.hands[ind];
}

function getNumberOfHands(ind : number){
  if(ind < 0) return 0;
  return this.hands.length - ind;
}

function getNumberOfCombos(ind : number){
  if(ind < 0) return 0;
  return this.getNumberOfHands(ind) * this.multiplier;
}

function getPercentOfCombos(ind : number){
  if(ind < 0) return 0;
  return this.getNumberOfCombos(ind) / 1326;
}

export var data = [
  {
    "name" : "pp",
    "title" : "Pairs",
    "hands" : ["22", "33", "44", "55", "66", "77", "88", "99", "TT", "JJ", "QQ", "KK", "AA"],
    "multiplier" : 6,
    "getNotation" : getPlusNotation,
    "getNumberOfHands" : getNumberOfHands,
    "getNumberOfCombos" : getNumberOfCombos,
    "getPercentOfCombos" : getPercentOfCombos
  },
  {
    "name" : "as",
    "title" : "Suited Aces",
    "hands" : ["A2s", "A3s", "A4s", "A5s", "A6s", "A7s", "A8s", "A9s", "ATs", "AJs", "AQs", "AKs"],
    "multiplier" : 4,
    "getNotation" : getPlusNotation,
    "getNumberOfHands" : getNumberOfHands,
    "getNumberOfCombos" : getNumberOfCombos,
    "getPercentOfCombos" : getPercentOfCombos
  },
  {
    "name" : "ao",
    "title" : "Offsuit Aces",
    "hands" : ["A2o", "A3o", "A4o", "A5o", "A6o", "A7o", "A8o", "A9o", "ATo", "AJo", "AQo", "AKo"],
    "multiplier" : 12,
    "getNotation" : getPlusNotation,
    "getNumberOfHands" : getNumberOfHands,
    "getNumberOfCombos" : getNumberOfCombos,
    "getPercentOfCombos" : getPercentOfCombos
  }
];