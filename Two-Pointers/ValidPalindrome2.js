function isPal(l, r, s) {
  while (l < r) {
    if (s[l] != s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

function validPalindrome(s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r && s[l] == s[r]) {
    l++;
    r--;
  }
  return isPal(l + 1, r, s) || isPal(l, r - 1, s);
}

let testCase1 = "madame";

if (validPalindrome(testCase1)) console.log("Ok");
else console.log("No");
