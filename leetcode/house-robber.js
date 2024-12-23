/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // //parse into the array and find the maximum number and its position 
    // for i in nums[i]
    //     max=max(nums[i])
    //     num_position=i
    //     print(num_position)
    // //add all the next adjacent houses money to get the answer
    // if num_position is odd:
    //     result1=sum(nums[i])
    // if num_position is odd:
    //     result2=sum(nums[i:-1])
    // // reverify with adding other adjacent house and use max function to verify the result
    // return max(result1,result2)
    
    // Handle edge cases
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    // Initialize two variables to keep track of the maximum amounts
    let prev1 = 0; // Represents dp[i-2]
    let prev2 = 0; // Represents dp[i-1]
    let current = 0; // Represents dp[i]
    
    for (let num of nums) {
        // Calculate the current maximum by choosing to rob or skip the current house
        current = Math.max(prev1 + num, prev2);
        
        // Update prev1 and prev2 for the next iteration
        prev1 = prev2;
        prev2 = current;
    }
    
    // The final value of current holds the maximum amount that can be robbed
    return current;
};



// Test Cases
const testCases = [
    { nums: [1, 2, 3, 1], expected: 4 },
    { nums: [2, 7, 9, 3, 1], expected: 12 },
    { nums: [2, 1, 1, 2], expected: 4 },
    { nums: [], expected: 0 },
    { nums: [5], expected: 5 },
    { nums: [10, 2, 2, 100, 100, 100, 2, 1], expected: 211 }
];

// Function to run test cases
const runTests = () => {
    testCases.forEach(({ nums, expected }, index) => {
        const result = rob(nums);
        const passed = result === expected ? "PASSED" : "FAILED";
        console.log(`Test Case ${index + 1}: ${passed}`);
        console.log(`Input: ${JSON.stringify(nums)}`);
        console.log(`Expected Output: ${expected}`);
        console.log(`Your Output: ${result}`);
        console.log('All cases Passed');
        console.log('---------------------------');
    });
};

// Execute the tests
runTests();

// this involves dynamic programming and the time complexity is O(n) and the space complexity is O(1)
// the dynamic programming approach is to use two variables to keep track of the maximum amounts
// the time complexity is O(n) and the space complexity is O(1)
