/* Given an integer x, return true if x is a 
palindrome , and false otherwise. */

// Using String, creating afunction to get palindrome
const isPalindromeString = (x: number): boolean => {
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Using Math
const isPalindromeMath = (x: number): boolean => {
    if (x < 0) return false;
    let reversed = 0;
    let remainder;
    let original = x;
    while (x !== 0) {
        remainder = x % 10; // output: 123 % 10 = 3, 12 % 10 = 2, 1 % 10 = 1
        reversed = reversed * 10 + remainder; // output: 0 * 10 + 3 = 3, 3 * 10 + 2 = 32, 32 * 10 + 1 = 321
        x = Math.floor(x / 10); // output: 123 / 10 = 12, 12 / 10 = 1, 1 / 10 = 0
    }
    return original === reversed;
}

console.log(isPalindromeString(121));
console.log(isPalindromeMath(525));
