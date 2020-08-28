function printOwing (invoice) {
  let outstanding = 0;
  let result = '***********************\n'
    +'**** Customer Owes ****\n'
    +'***********************\n';

  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  getDueDate(invoice);

  // print details
  return result += `name: ${invoice.customer}\n`
    +`amount: ${outstanding}\n`
    +`amount: ${invoice.dueDate.toLocaleDateString()}`
}

function getDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

module.exports = { printOwing }