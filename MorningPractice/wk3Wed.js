// Examples
  // 'taco cat' => true
  // 'kayak' => true 
  // 'hello' => true | 'aibohphobia' (the fear of palindromes)
  // Output: true      | true    | false   | true

  // we know the 
  // input string


  function isPalindrome(str){
  /* reverse the string and compare to the original*/

  
    }
// and the
// Output string

function isPalindrome(str){
  /* compare each letter with its opposite on the other end of the string (0,last), (1 and last - 1) this one is most efficent
   if not the same -> false*/

   for(let i = 0; i < Math.floor(str.length/2); i++){
    let start = str[i]
    let end = str[str.length - 1 - i]
    if(start != end){
      return false
    }
    } 
    return true
  }
// and the
// Output string


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

// program to check if the string is palindrome or not
  //  Below works too
function checkPalindrome(str) {

  // convert string to an array
  const arrayValues = string.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if(string == reverseString) {
      console.log('It is a palindrome');
  }
  else {
      console.log('It is not a palindrome');
  }
}

//take input
const string = prompt('Enter a string: ');

checkPalindrome(string);