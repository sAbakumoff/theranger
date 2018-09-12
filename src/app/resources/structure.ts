import {CommonRangeGroup} from '../classes/range-group';

export let data: CommonRangeGroup[] = [
  new CommonRangeGroup('pp', 'Pairs',
    ['22', '33', '44', '55', '66', '77', '88', '99', 'TT', 'JJ', 'QQ', 'KK', 'AA'].reverse(), 6),
  new CommonRangeGroup('as', 'Suited Aces',
    ['A2s', 'A3s', 'A4s', 'A5s', 'A6s', 'A7s', 'A8s', 'A9s', 'ATs', 'AJs', 'AQs', 'AKs'].reverse(), 4),
  new CommonRangeGroup('ao', 'Offsuit Aces',
    ['A2o', 'A3o', 'A4o', 'A5o', 'A6o', 'A7o', 'A8o', 'A9o', 'ATo', 'AJo', 'AQo', 'AKo'].reverse(), 12),
  new CommonRangeGroup('ks', 'Suited Kings',
    ['K2s', 'K3s', 'K4s', 'K5s', 'K6s', 'K7s', 'K8s', 'K9s', 'KTs', 'KJs', 'KQs'].reverse(), 4),
  new CommonRangeGroup('ko', 'Offsuit Kings',
    ['K2o', 'K3o', 'K4o', 'K5o', 'K6o', 'K7o', 'K8o', 'K9o', 'KTo', 'KJo', 'KQo'].reverse(), 12),
  new CommonRangeGroup('qs', 'Suited Queens',
    ['Q2s', 'Q3s', 'Q4s', 'Q5s', 'Q6s', 'Q7s', 'Q8s', 'Q9s', 'QTs', 'QJs'].reverse(), 4),
  new CommonRangeGroup('qo', 'Offsuit Queens',
    ['Q2o', 'Q3o', 'Q4o', 'Q5o', 'Q6o', 'Q7o', 'Q8o', 'Q9o', 'QTo', 'QJo'].reverse(), 12),
  new CommonRangeGroup('qs', 'Suited Jacks',
    ['J2s', 'J3s', 'J4s', 'J5s', 'J6s', 'J7s', 'J8s', 'J9s', 'JTs'].reverse(), 4),
  new CommonRangeGroup('qo', 'Offsuit Jacks',
    ['J2o', 'J3o', 'J4o', 'J5o', 'J6o', 'J7o', 'J8o', 'J9o', 'JTo'].reverse(), 12)
  ];
