const rankTest = require('ava');
const { voyageRisk, rating } = require("../src/rank");

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

  const rank = rating(voyage,history.slice(0,5))
  t.is('A',rank)
});

rankTest('case 5 : test rating length=5 && zone=east-indies', t => {
  const voyage = {
    zone: 'east-indies',
    length: 5,
  };

  const rank = rating(voyage,history.slice(0,5))
  t.is('B',rank)
});