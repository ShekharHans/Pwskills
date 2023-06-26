function firstUniqChar(s) {
    // Create a character frequency map
    const charMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    // Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charMap.get(char) === 1) {
            return i;
        }
    }

    // No non-repeating character found
    return -1;
}

// Example test cases
const s1 = "leetcode";
console.log("Input:", s1);
console.log("Output:", firstUniqChar(s1));

// User input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a string: ", input => {
    const s = input.trim();
    console.log("Input:", s);
    console.log("Output:", firstUniqChar(s));
    readline.close();
});
