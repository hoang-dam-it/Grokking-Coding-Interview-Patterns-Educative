var removeDuplicates = function (nums) {
  let nextNonDuplicate = 1;
  let i = 0;
  while (i < nums.length) {
    if (nums[nextNonDuplicate - 1] !== nums[i]) {
      nums[nextNonDuplicate] = nums[i];
      nextNonDuplicate++;
    }

    i++;
  }

  return nextNonDuplicate;
};

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));
