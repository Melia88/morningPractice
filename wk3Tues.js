// NOTE Write a function that will take in a single argument, a string. The string will be a sentence and your function will return the longest word in that sentence. If there are multiple words tied for longest word, then return the word that appears in the sentence first. (Using the Split method here)


// Step1 what do we know?

// INPUT STRING
function longestWord(str){
  let longest = ""
  // your code here

  // look at each word one at a time
  let arr = str.split(' ')
  // now itterate through the array
  for(let i= 0; i < arr.length; i++){
    // want to look at one single element at a time
    let word = arr[i]
    // count the letters and compare to the longest (we have seen so far)
    // if longer
    if(word.length > longest.length){
      // make it the new longest
    }
  }
  return longest
}

// output String

longestWord('What is the longest word in this sentence')


