function findSumOfThee(nums, target) {
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length - 2; i++) {
    let low = i + 1;
    let hight = nums.length - 1;
    while (low < hight) {
      let triple = nums[low] + nums[hight] + nums[i];

      if (triple == target) return true;
      else if (triple < target) low++;
      else hight--;
    }
  }
}

let nums = [3, 7, 1, 2, 8, 4, 5];
let target = 10;

console.log(findSumOfThee(nums, target));
