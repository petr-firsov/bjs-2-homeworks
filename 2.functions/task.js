function getArrayParams(...args) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arguments[0][i].length; i++) {
    if (arguments[0][i] > max) {
    max = arguments[0][i];
    }

    if (arguments[0][i] < max) {
    min = arguments[0][i];
    }
  }

  let sum = 0;
  for (let i = 0; i < arguments[0].length; i++) {
    sum += arguments[0][i];
  }


  let avg = sum/arguments[0].length;
  avg.toFixed(2);
  +avg;

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...args) {
  if (arguments.length === 0) {
    return 0;
  }
 
  let sum = 0
  for (i = 0; i < arguments[0].length; i++) {
    sum += arguments[0][i];
  }
  return sum;
}

function differenceMaxMinWorker(...args) {
  if (arguments.length === 0) {
    return 0;
  }

  Math.max(arguments);
  Math.min(arguments);

  return Math.max - Math.min;
}

function differenceEvenOddWorker(...args) {
  if (arguments.length === 0) {
    return 0;
  }
 
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 0) {
      sumEvenElement ++;
    } else if (arguments[i] % 2 === 1) {
      sumOddElement ++;
    }

    let difference = Math.abs(sumEvenElement - sumOddElement);
    return difference;
  }

}

function averageEvenElementsWorker(...args) {
  if (arguments.length === 0) {
    return 0;
  }
 
  let sumEventElement = 0;
  let countEventElement = 0;

  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 0); {
      sumEventElement ++arguments[i];
      countEventElement += 1;
    }
  }

  let avg = sumEventElement / countEventElement;

  return avg;
}

function makeWork (arrOfArr, func) {
  
}
