/*

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

- '.' Matches any single character.​​​​
- '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

*/

// Using String
const isMatchString = (s, p) => {
    if (p.length === 0) return s.length === 0;
    const firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');
    if (p.length >= 2 && p[1] === '*') {
        return isMatchString(s, p.slice(2)) || (firstMatch && isMatchString(s.slice(1), p));
    } else {
        return firstMatch && isMatchString(s.slice(1), p.slice(1));
    }
}

console.log(isMatchString('aa', 'a'));
