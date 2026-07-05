class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map();
        const countArr = Array.from({ length: nums.length + 1 }, () => [])
        const res = [];
        nums.forEach((num) => {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        })
        console.log(countMap)
        for (const [key, value] of countMap) {
            countArr[Number(value)].push(Number(key))
        }
        console.log(countArr);
        for(let i = countArr.length -1; i >= 0; i--) {
            if (countArr[i].length > 0) {
                for (let j = 0; j < countArr[i].length; j++) {
                    res.push(countArr[i][j]);
                }
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
