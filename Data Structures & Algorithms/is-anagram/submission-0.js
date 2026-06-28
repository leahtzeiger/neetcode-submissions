class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let isAnagram = true;
        const hash_s = new Map();
        const hash_t = new Map();
        s.split('').forEach(a => hash_s.set(a, (hash_s.get(a) ||0)+1));
        t.split('').forEach(a => hash_t.set(a, (hash_t.get(a)|| 0) + 1));
        
       if (hash_s.size !== hash_t.size) return false;
       for (let [key, val] of hash_s) {
        if (!hash_t.get(key) || hash_t.get(key) != val) {
            isAnagram = false;
            break;
        }
       }
       return isAnagram;
    }
}
