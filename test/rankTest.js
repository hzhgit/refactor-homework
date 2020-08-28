const rankTest = require('ava');
const { voyageRisk, rating, captainHistoryRisk, voyageProfitFactor } = require("../src/rank");

rankTest('voyageRisk case 1 : given voyage length=3 && zone=USA', t => {
  const voyage = {
    length: 3,
    zone: 'USA'
  };
  const result = voyageRisk(voyage);
  t.is(result, 1);
});

rankTest('voyageRisk case 2 : given voyage length=3 && zone=china', t => {
  const voyage = {
    length: 3,
    zone: 'china'
  };
  const result = voyageRisk(voyage);
  t.is(result, 5);
});

rankTest('voyageRisk case 3 : given voyage length=8 && zone=USA', t => {
  const voyage = {
    length: 8,
    zone: 'USA'
  };
  const result = voyageRisk(voyage);
  t.is(result, 3);
});

rankTest('voyageRisk case 4 : given voyage length=8 && zone=china', t => {
  const voyage = {
    length: 8,
    zone: 'china'
  };
  const result = voyageRisk(voyage);
  t.is(result, 7);
});

rankTest('voyageRisk case 5 : given voyage length=9 && zone=USA', t => {
  const voyage = {
    length: 9,
    zone: 'USA'
  };
  const result = voyageRisk(voyage);
  t.is(result, 4);
});

rankTest('voyageRisk case 6 : given voyage length=9 && zone=china', t => {
  const voyage = {
    length: 9,
    zone: 'china'
  };
  const result = voyageRisk(voyage);
  t.is(result, 8);
});

rankTest('captainHistoryRisk case 1 : given history length = 4 voyage zone = USA', t => {
  const voyage = {
    length: 10,
    zone: 'USA'
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
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 6);
});

rankTest('captainHistoryRisk case 2 : given history length = 5 voyage zone = USA', t => {
  const voyage = {
    length: 10,
    zone: 'USA'
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
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 2);
});