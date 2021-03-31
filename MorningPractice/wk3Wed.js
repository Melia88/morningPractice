// Examples
  // 'taco cat' => true
  // 'kayak' => true 
  // 'hello' => true | 'aibohphobia' (the fear of palindromes)
  // Output: true      | true    | false   | true
function isPalindrome(str){
// find the length of the string
  let len = str.length;
// loop through half of the string
  for(let i = 0; i < len / 2; i++){
    // check if first and last string are the same
    if(str[i] !== str[len - 1 - i]){
      return 'It is NOT a palindrome'
    }
  }
  return 'It is a palindrome'
}

// take input
let str = prompt('Enter a string: ');

// call the function
let value = isPalindrome(str);

console.log(value);


/* A string is a palindrome if it is read/spelled the same from forward or backward.
https://www.programiz.com/javascript/examples/palindrome*/