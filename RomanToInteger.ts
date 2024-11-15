/* 
Given a roman numeral, convert it to an integer.
Keep the runtime complexity of solution lowest.
*/

// Using String
const romanToIntString = (s: string): number => {
    const romanToInt: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanToInt[s[i]];
        const next = romanToInt[s[i + 1]];
        if (current < next) {
            sum += next - current;
            i++;
        } else {
            sum += current;
        }
    }
    return sum;
}
