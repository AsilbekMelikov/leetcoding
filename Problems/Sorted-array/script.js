/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const array = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let temp;
      if (nums[i] > nums[j]) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }

  return nums;
};

console.log(sortColors(array));
