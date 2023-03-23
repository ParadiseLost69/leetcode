/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  // Define a function called isValid that takes in a string s
  const stack = []; // Initialize an empty stack array
  const mapping = {
    // Define a mapping object that maps closing brackets to their corresponding opening brackets
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    // Loop through each character in the input string
    const char = s[i]; // Get the current character
    if (mapping[char]) {
      // If the current character is a closing bracket
      if (!stack.length || stack.pop() !== mapping[char]) {
        // Check if the stack is empty or if the top of the stack does not match the corresponding opening bracket for the current closing bracket
        return false; // If either condition is true, the input string is not valid, so return false
      }
    } else {
      // If the current character is an opening bracket
      stack.push(char); // Push it onto the stack
    }
  }
  return stack.length === 0; // If the stack is empty, the input string is valid, so return true; otherwise, return false
}
