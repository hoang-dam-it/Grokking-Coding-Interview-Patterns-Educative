function isHappyNumber(n) {
  function sumOfSquaredDigits(number) {
    let totalSum = 0;
    while (number > 0) {
      let temp = Math.floor(number / 10),
        digit = number % 10;
      number = temp;
      totalSum += digit ** 2;
    }
    return totalSum;
  }

  let slowPointer = n;
  let fastPointer = sumOfSquaredDigits(n);

  while (fastPointer !== 1 && slowPointer !== fastPointer) {
    slowPointer = sumOfSquaredDigits(slowPointer);
    fastPointer = sumOfSquaredDigits(sumOfSquaredDigits(fastPointer));
  }

  if (fastPointer == 1) {
    return true;
  }
  return false;
}

function main() {
  inputs = [1, 5, 19, 25, 7];
  for (var i = 0; i < inputs.length; i++) {
    console.log(i + 1 + ".\tInput Number:", inputs[i]);

    var result = isHappyNumber(inputs[i]) ? "True" : "False";

    console.log("\n\tIs it a happy number?", result);
    console.log("-".repeat(100));
  }
}

main();
