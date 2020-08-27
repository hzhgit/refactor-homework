const DESTINATION = [
  'china',
  'east-indies',
];

function voyageRisk(voyage) {
  let result = 1;
  result += voyage.length > 4 ? 2 : 0
  result += Math.max(0, voyage.length - 8);
  result += DESTINATION.includes(voyage.zone) ? 4 : 0;
  return result;
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
  let result = 1;
  result += history.length < 5 ? 4 : 0;
  result += history.filter(v => v.profit < 0).length;
  result += voyage.zone === 'china' && hasChina(history) ? -2 : 0;
  return Math.max(result, 0);
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  result += voyage.zone === 'china' ? 1 : 0;
  result += voyage.zone === 'east-indies'?1:0;
  result = isHasChinaHistory(voyage, history, result);
  return result;
}

function isHasChinaHistory(voyage, history, result) {
  if (voyage.zone === 'china' && hasChina(history)) {
    result += 3;
    if (history.length > 10) {
      result += 1;
    }
    if (voyage.length > 12) {
      result += 1;
    }
    if (voyage.length > 18) {
      result -= 1;
    }
  }
  else {
    if (history.length > 8) {
      result += 1;
    }
    if (voyage.length > 14) {
      result -= 1;
    }
  }
  return result;
}

function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  return vpf * 3 > (vr + chr * 2) ? 'A' : 'B';
}

module.exports = {
  voyageRisk,
  rating,
  captainHistoryRisk,
  voyageProfitFactor,
};

const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  }, {
    zone: 'west-indies',
    profit: 15,
  }, {
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
