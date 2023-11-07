function getArrayParams(...args) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  if (args.length === 0) {
    return 0;
  }

  for (let i = 0; i < args.length; i++) {
    if (args[i] > max) {
    max = args[i];
    }

    if (args[i] < min) {
    min = args[i];
    }

    sum += args[i];
  }

    let avg = +(sum / args.length).toFixed(2);

    return { min: min, max: max, avg: avg };
}


function summElementsWorker(...args) {
  if (args.length === 0) {
    return 0;
  }
 
  let sum = 0;
  for (i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

function differenceMaxMinWorker(...args) {
  if (args.length === 0) {
    return 0;
  }

  return (Math.max(...args) - Math.min(...args));
}

function differenceEvenOddWorker(...args) {
  if (args.length === 0) {
    return 0;
  }
 
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      sumEvenElement += args[i];
    } else {
      sumOddElement += args[i];
    }

  }
    return (sumEvenElement - sumOddElement);
}



//ПРОБЛЕМНАЯ ФУНКЦИЯ

function averageEvenElementsWorker(...args) {
  if (args.length === 0) {
    return 0;
  }
 
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      sumEvenElement += args[i];
      countEvenElement++;
    }
  }

  let avg = sumEvenElement / countEvenElement;

  return avg;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let array of arrOfArr) {
    const result = func(...array); 
    if (result > maxWorkerResult) {
    maxWorkerResult = result;
   }
  }

  return maxWorkerResult;
}
