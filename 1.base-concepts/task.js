"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2-4*a*c);

  if (d === 0) {
    let onlyRoot = (-b/(2*a));
    .push(onlyRoot);
  } else if (d > 0) {
    let firstRoot = (-b + Math.sqrt(d) )/(2*a);
    let secondRoot = (-b - Math.sqrt(d) )/(2*a);
    arr.push(firstRoot);
    arr.push(secondRoot);
  } 

  return(arr);
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let body = (amount - contribution);
  let monthlyPercent = percent/1200;

  let creditPercent = body * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths) - 1)));

  let total = (creditPercent * countMonths);

  let shortTotal = (total.toFixed(2));

  return(shortTotal);
}