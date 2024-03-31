var isAnagram = function(s, t) {
    let sort_s = [...s].sort();
    let sort_t = [...t].sort();
    return sort_s===sort_t
};
console.log(isAnagram("anagram","nagaram"))
let s = "anagram";
console.log([...s].sort())
let t = "nagaram";
console.log([...t].sort())