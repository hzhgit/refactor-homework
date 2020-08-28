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
      zone: 'USA',
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
      zone: 'USA',
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


rankTest('captainHistoryRisk case 3 : given history length = 5 profit = 5 zone =  china, history include china', t => {
  const voyage = {
    length: 10,
    zone: 'china'
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 5,
    }, {
      zone: 'USA',
      profit: 5,
    },
    {
      zone: 'west-africa',
      profit: 5,
    },
    {
      zone: 'china',
      profit: 5,
    },
  ];
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 0);
});

rankTest('captainHistoryRisk case 4 : given history length = 5 profit = 5 zone =  china, history not include china', t => {
  const voyage = {
    length: 10,
    zone: 'china'
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 5,
    }, {
      zone: 'USA',
      profit: 5,
    },
    {
      zone: 'west-africa',
      profit: 5,
    },
    {
      zone: 'west-africa',
      profit: 5,
    },
  ];
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 1);
});

rankTest('voyageProfitFactor case 1 : given voyage = china , history not include china', t => {
  const voyage = {
    zone: 'china'
  };
  const history = [{
    zone: 'east-indies',
    profit: 5,
  }];
  const result = voyageProfitFactor(voyage, history)
  t.is(result, 3)
});

rankTest('voyageProfitFactor case 2 : given voyage = china , history include china', t => {
  const voyage = {
    zone: 'china'
  };
  const history = [{
    zone: 'china',
    profit: 5,
  }];
  const result = voyageProfitFactor(voyage, history)
  t.is(result, 6)
});

rankTest('voyageProfitFactor case 3 : given voyage = china, history length = 11, history include china', t => {
  const voyage = {
    zone: 'china'
  };
  const history = [{
    zone: 'china',
    profit: -2,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, ];
  const result = voyageProfitFactor(voyage, history)
  t.is(result, 6)
});

rankTest('voyageProfitFactor case 4 : given voyage = china, history length = 13, history include china', t => {
  const voyage = {
    zone: 'china'
  };
  const history = [{
    zone: 'china',
    profit: -2,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, {
    zone: 'west-africa',
    profit: 7,
  }, ];
  const result = voyageProfitFactor(voyage, history)
  t.is(result, 8)
});



