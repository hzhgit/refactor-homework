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