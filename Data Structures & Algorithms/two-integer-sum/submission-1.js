class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i, j;
        const hash = new Map();
        nums.forEach((num, key) => hash.set(num, key));
        for (i = 0; i < nums.length; i++) {
            j = hash.get(target - nums[i]);
            if (j && j !== i) {
                break;
            }
        }
        return [i, j];
    }
}
