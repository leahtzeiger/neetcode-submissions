class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = new Map();
        let hasDuplicate = false;
        for (let i = 0; i < nums.length; i++) {
            if (hash.get(nums[i])) {
                hasDuplicate = true;
                break;
            }
            hash.set(nums[i], 1)
        }
        return hasDuplicate;
    }
}
