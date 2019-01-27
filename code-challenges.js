// These coding challenges were completed during Lambda School's Full Time
// Full Stack Software Engineering/Computer Science program.



//*==========* 01/08/19: Longest String *==========*

// Good morning! Write a function that takes an array of strings and return
// the longest string in the array.

// For example:
// const strings1 = ['short', 'really, really long!', 'medium'];
// console.log(longestString(strings1)); // <--- 'really, really long!'

// Edge case: If you had an array which had two "longest" strings of equal length, your function should just return the first one.

// For example:
// const strings2 = ['short', 'first long string!!', 'medium', 'abcdefghijklmnopqr'];
// console.log(longestString(strings2)); // <--- 'first long string!'

const codeFam = [
    "My program manager is Jake Thomas.", 
    "Ryan completed the super-super-yoga-stretch task yesterday.", 
    "Andrew's middle name is Lowell.", "Jamie was an actor before Lambda School."
];

function longestString(arr) {
  let numHolder = 0;
  let currentLongest = "";
  
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i].length);
    
    if (arr[i].length > numHolder) {
      
      numHolder = arr[i].length;
      currentLongest = arr[i];
      
    } else {
      
        continue;
        
      }
    
  }
  console.log("The longest string was " + numHolder + " characters.");
  return currentLongest;
  
}

console.log(longestString(codeFam));
