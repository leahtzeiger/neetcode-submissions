class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const outputStrs = {};
        let counter;
        for (let i in strs) {
            counter = new Array(26).fill(0);
            strs[i].split("").forEach(char => counter[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1)
            const counterStr = counter.join();
            if (!outputStrs[counterStr]) {
                outputStrs[counterStr] = []
            }
            outputStrs[counterStr].push(strs[i]);
        }
        return Object.values(outputStrs)
    }
}
