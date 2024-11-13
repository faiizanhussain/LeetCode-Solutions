function strStr(haystack: string, needle: string): number {
    if (needle === "") return 0;
    return haystack.indexOf(needle);
}

// Example usage:
console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1