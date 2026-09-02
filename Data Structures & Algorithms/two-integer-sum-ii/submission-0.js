class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftIndex = 0;
        let rightIndex = numbers.length - 1;
        while (leftIndex < rightIndex) {
            if (numbers[leftIndex] + numbers[rightIndex] > target) {
                rightIndex -= 1;
            } else if (numbers[leftIndex] + numbers[rightIndex] < target) {
                leftIndex += 1;
            } else {
                break;
            }
        }
        return [leftIndex + 1, rightIndex + 1];
    }
}
