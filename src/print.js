function printOwing(invoice) {
  let outstanding = 0;

  outstanding = calculateOutstanding(invoice, outstanding);

  getDueDate(invoice);
  return setPrintResult(invoice,outstanding);
}

function calculateOutstanding(invoice, outstanding) {
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function setPrintResult(invoice,outstanding) {
  let result = '***********************\n'
    + '**** Customer Owes ****\n'
    + '***********************\n';

  return result += `name: ${invoice.customer}\n`
    + `amount: ${outstanding}\n`
    + `amount: ${invoice.dueDate.toLocaleDateString()}`
}

function getDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

module.exports = { printOwing }