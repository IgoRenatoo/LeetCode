/* Easy
3151. Special Array I

An array is considered special if every pair of its adjacent elements
contains two numbers with different parity.

Given an array of integers nums, return true if nums is a special array,
otherwise, return false.

Example 1:
  Input: nums = [1]
  Output: true
  Explanation: There is only one element. So the answer is true.

Example 2:
  Input: nums = [2,1,4]
  Output: true
  Explanation: There are two pairs: (2,1) and (1,4), and both contain numbers with different parity.

Example 3:
  Input: nums = [4,3,1,6]
  Output: false
  Explanation: nums[1] and nums[2] are both odd, the answer is false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const nums = [1,2,3,4]

var isArraySpecial = function(nums) {
  for (let i = 0; i < nums.length; i++){
    if ((nums[i] % 2) === (nums[i+1] % 2)) {
        return false
    }
}
return true
}

console.log(isArraySpecial(nums))
