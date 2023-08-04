"use strict"
function solveEquation(a, b, c) {
  let arr = [ ];
  let roots = b**2-4*a*c;

  if (roots < 0) {
  arr = [];
  } else if (roots === 0) {
  arr = [-b/(2*a)]
  } else if (roots > 0) {
  let firstRoot = (-b + Math.sqrt(d) )/(2*a);
  let secondRoot = (-b - Math.sqrt(d) )/(2*a);
  arr.push(firstRoot);
  arr.push(secondRoot);
  } 

  return(arr);
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  percent/1200
  let body = amount - contribution;
  let monthlyPercent = percent/12;

  let total = body * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths) - 1)));

  total.toFixed(2);

  console.log(total);
}

solveEquation(2, 4, 6);


calculateTotalMortgage(10, 0, 50000, 12);