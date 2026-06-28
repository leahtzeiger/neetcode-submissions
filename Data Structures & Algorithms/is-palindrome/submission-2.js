class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * "Was it a car or a cat I saw?"
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1
        while (l < r) {
            while(l < r && /[^0-9A-Z]+/gi.test(s[l])) {
                l += 1;
            }
            while (r > l && /[^0-9A-Z]+/gi.test(s[r])) {
                r -= 1;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }
            l += 1;
            r -= 1;
        }
        return true;
    }
}
