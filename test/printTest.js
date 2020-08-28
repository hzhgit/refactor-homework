const printTest = require('ava');
const { printOwing } = require("../src/print")

printTest('case 1 : test printOwing', t => {
    const invoice = {
        "customer": "Zach",
        "borderSpacing": [
            { amount: 20 },
            { amount: 30 }
        ]
    };
    let today = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(),today.getDate() + 30)


    const result = printOwing(invoice);
    t.is(result, `***********************\n` +
        `**** Customer Owes ****\n` +
        `***********************\n` +
        `name: Zach\n` +
        `amount: 50\n` +
        `amount: ${invoice.dueDate.toLocaleDateString()}`)
});