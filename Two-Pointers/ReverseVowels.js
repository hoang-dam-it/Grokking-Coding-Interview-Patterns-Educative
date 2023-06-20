var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  let first = 0,
    last = s.length - 1;
  let array = s.split("");
  while (first < last) {
    while (first < last && vowels.indexOf(array[first]) === -1) {
      first++;
    }

    while (first < last && vowels.indexOf(array[last]) === -1) {
      last--;
    }

    [array[first], array[last]] = [array[last], array[first]];

    first++;
    last--;
  }

  return array.join("");
};

reverseVowels("Hello");
