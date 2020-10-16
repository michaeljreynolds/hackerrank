// Complete the isBalanced function below.
// make an array and push first value to it
// set prev value to first value
// now loop through rest of string input
// check character against key/value containing key = closing characters
// if we have a hash hit, grab value
// if value === prev value, we are valid still. 
// pop end value off of array
// next end value becomes prev
// repeat
// if get to end and array is empty, we are balanced
function isBalanced(s) {
    if (s.length === 1) {
        return false;
    }
    // console.log(s); // {[()]}
    let passed = true;
    let queue = [];
    let prev = s[0];
    queue.push(s[0]);
    
    let hash = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };    
    for (let i = 1; i < s.length; i++) {        
      const letter= s[i];
      if (hash[letter] !== undefined) {
          const symbolToMatch = hash[letter];
          if (prev !== symbolToMatch) {
              passed = false;
              break;
          } else {
              queue.pop();
              prev = queue[queue.length - 1];
          }
      } else {
          queue.push(letter);
          prev = letter;
      }
    }
    return (passed && queue.length === 0) ? 'YES' : 'NO';
}

function runTest(input, expected) {
    let result = isBalanced(input);
    let passed = result === expected;
    console.log(`Running hackerrank tests for balancedBrackets problem. Result ${result} \n Expected ${expected}`);
    console.log(`Passed ${passed}`);
}

runTest('[({})]', 'YES');
runTest('{[(])}', 'NO');
runTest('{{[[(())]]}}', 'YES');