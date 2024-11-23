function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || map[stack.pop()!] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example usage:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true