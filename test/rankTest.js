const rankTest = require('ava');
const {voyageRisk} = require("../src/rank");

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