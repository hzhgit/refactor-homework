function isRushTrue(anOrder){
  const nearPort = ['MA','CT']
  const farPort = ['NY','NH']
  let deliveryTime;
  if (nearPort.includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  }
  else if (farPort.includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  }
  else {
    deliveryTime = 3;
  }
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function isRushFalse(anOrder){
  const nearPort = ['MA','CT','NY',];
  const farPort = ['ME','NH',];
  let deliveryTime;
  if (nearPort.includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  }
  else if (farPort.includes(anOrder.deliveryState)) {
    deliveryTime = 3;
  }
  else {
    deliveryTime = 4;
  }
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

function deliveryDate (anOrder, isRush) {
  if (isRush) {
    return isRushTrue(anOrder)
  }else {
    return isRushFalse(anOrder)
  }
}
module.exports={deliveryDate}