const deliveryTest = require('ava');
const { deliveryDate } = require('../src/delivery');

deliveryTest('case 1:isRush is ture && deliveryState is MA', t => {
    const anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: (deliveryTime) => {
                return deliveryTime;
            }
        }
    }

    t.is(2, deliveryDate(anOrder, true))
})

deliveryTest('case 2:isRush is ture && deliveryState is NY', t => {
    const anOrder = {
        deliveryState: 'NY',
        placedOn: {
            plusDays: (deliveryTime) => {
                return deliveryTime;
            }
        }
    }

    t.is(3, deliveryDate(anOrder, true))
})

deliveryTest('case 3:isRush is false && deliveryState is MA', t => {
    const anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: (deliveryTime) => {
                return deliveryTime;
            }
        }
    }

    t.is(4, deliveryDate(anOrder, false))
})

deliveryTest('case 4:isRush is false && deliveryState is ME', t => {
    const anOrder = {
        deliveryState: 'ME',
        placedOn: {
            plusDays: (deliveryTime) => {
                return deliveryTime;
            }
        }
    }

    t.is(5, deliveryDate(anOrder, false))
})

deliveryTest('case 5:isRush is true && deliveryState is not in the deliveryState', t => {
    const anOrder = {
        deliveryState: 'XX',
        placedOn: {
            plusDays: (deliveryTime) => {
                return deliveryTime;
            }
        }
    }

    t.is(4, deliveryDate(anOrder, true))
})