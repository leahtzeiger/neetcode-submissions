class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanStr = s.replace(/[^0-9A-Z]+/gi,"");
        let start_pos = 0;
        let end_pos = cleanStr.length - 1
        let isPalindrom = true;
        if (cleanStr.length === 1) return true;
        while (start_pos < end_pos) {
            if (cleanStr[start_pos].toLowerCase() !== cleanStr[end_pos].toLowerCase()) {
                isPalindrom = false;
                break;
            }
            start_pos += 1;
            end_pos -= 1;
        }
        return isPalindrom;
    }
}
