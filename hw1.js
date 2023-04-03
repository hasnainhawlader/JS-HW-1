// hw 1
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

// hw 2

const arrForSum = [10, 50, 2, 5, 95, 45, 6, 2];
let sum = 0;
for (let i = 0; i < arrForSum.length; i++) {
  if (arrForSum[i] > 10) sum += arrForSum[i];
}
console.log(sum);

// hw 3

const arrForAverage = [10, 50, 2, 5, 95, 45, 6, 2];

let average = 0,
  sumForAverage = 0,
  len = arrForAverage.length;

for (let i = 0; i < len; i++) sumForAverage += arrForAverage[i];
average = (sumForAverage / len).toFixed(2);
console.log(average);

// hw 4
function isBigEnough(value) {
  return value > 10;
}
function canCut(total, value) {
  return total + value;
}
console.log(
  (arrForTreeCutting = [10, 50, 2, 5, 95, 45, 6, 2]
    .filter(isBigEnough)
    .reduce(canCut))
);
