function reverseWords(s) {
  s = s.split("");
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    if (s[end] == " ") {
      reverse(s, start, end - 1, true);
      start = end + 1;
    }
  }

  // reverse last word
  reverse(s, start, s.length - 1, true);

  reverse(s, 0, s.length - 1, false);

  return s.join("");
}

function reverse(s, start, end) {
  let temp;
  while (start <= end) {
    temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
}

let testCase1 = "We love JavaScript";

let epxect = "JavaScript love We";

if (reverseString(testCase1) == epxect) console.log("Passed");
else console.log("Failed");
