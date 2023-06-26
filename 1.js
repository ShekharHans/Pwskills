function moveZeroes(nums) {
    let nonZeroIndex = 0;

    // Move all the non-zero elements to the beginning of the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

    // Fill the remaining elements with zeroes
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

// Example test cases
const nums1 = [0, 1, 0, 3, 12];
console.log("Input:", nums1);
console.log("Output:", moveZeroes(nums1));

// User input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the elements of the array separated by spaces: ", input => {
    const nums = input.split(" ").map(Number);
    console.log("Input:", nums);
    console.log("Output:", moveZeroes(nums));
    readline.close();
});
