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