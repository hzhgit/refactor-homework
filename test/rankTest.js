const rankTest = require('ava');
const { voyageRisk, rating, captainHistoryRisk, voyageProfitFactor } = require("../src/rank");

rankTest('case1 : test voyageRisk length=4 && zone=china', t => {
  const voyage = {
    length: 4,
    zone: 'china'
  }
  t.is(voyageRisk(voyage), 5)
})

rankTest('case2 : test voyageRisk length=8 && zone=china', t => {
  const voyage = {
    length: 8,
    zone: 'china'
  }
  t.is(voyageRisk(voyage), 7)
})

rankTest('case3 : test voyageRisk length=9 && zone=china', t => {
  const voyage = {
    length: 9,
    zone: 'china'
  }
  t.is(voyageRisk(voyage), 8)
})

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

rankTest('case 4 : test rating length=5 && zone=china', t => {
  const voyage = {
    zone: 'china',
    length: 5,
  };

  const rank = rating(voyage, history)
  t.is('A', rank)
});

rankTest('case 5 : test rating length=5 && zone=east-indies', t => {
  const voyage = {
    zone: 'east-indies',
    length: 5,
  };

  const rank = rating(voyage, history)
  t.is('B', rank)
});

rankTest('case 6 : test captainHistoryRisk length=4 && zone=china', t => {
  const voyage = {
    zone: 'china',
    length: 4
  }
  t.is(captainHistoryRisk(voyage, history), 4)
})

rankTest('case 7 : test captainHistoryRisk length=4 && zone=east-indies', t => {
  const voyage = {
    zone: 'east-indies',
    length: 10
  }
  t.is(captainHistoryRisk(voyage, history), 6)
})

rankTest('case 8 : test voyageProfitFactor length=4 && zone=china', t => {
  const voyage = {
    zone: 'china',
    length: 4
  }
  t.is(voyageProfitFactor(voyage, history), 6)
})

rankTest('case 9 : test voyageProfitFactor length=4 && zone=china && has no history', t => {
  const voyage = {
    zone: 'china',
    length: 4
  }
  t.is(voyageProfitFactor(voyage,[]), 3)
})

rankTest('case 10 : test voyageProfitFactor length=4 && zone=east-indies', t => {
  const voyage = {
    zone: 'east-indies',
    length: 4
  }
  t.is(voyageProfitFactor(voyage, history), 3)
})