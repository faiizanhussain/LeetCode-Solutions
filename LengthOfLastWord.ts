function lengthOfLastWord(s: string): number {
    // Trim trailing spaces
    s = s.trim();
    // Start from the end of the string
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            break;
        }
        length++;
    }
    return length;
}

// Example usage:
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6