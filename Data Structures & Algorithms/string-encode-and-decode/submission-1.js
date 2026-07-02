class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return '';
        return strs.reduce((accStr, str) => {
            accStr += `${str.length}|${str}`;
            return accStr;
        }, '');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     * "2as3asd"
     * i 0
     *
     */
    decode(str) {
        const resArr = [];
        let i = 0;
        let j;
        let currentStrLength;
        while (i < str.length) {
            j = i;
            while(str[j] !== "|") {
                j += 1;
            }
            currentStrLength = Number(str.slice(i, j));
            resArr.push(str.slice(j + 1, j + currentStrLength +1));
            i = j + currentStrLength + 1;
        }
        return resArr;
    }
}
