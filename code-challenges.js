// These coding challenges were completed during Lambda School's Full Time
// Full Stack Software Engineering/Computer Science program.



//*==========* 01/14/19: Reverse Case *==========*

// Good morning! Write a function that takes in a string, reverses the 'casing'
// of that string, and returns the "reversed-casing" string.

// const string = 'HELLO world!';
// console.log(reverseCase(string)); // <--- hello WORLD!

const flu = "two EXAMPLES of FLU symptoms ARE diarrhea AND vomiting.";

function reverseCase(str) {
  
  let revCaseStr = '';
  
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  for (let i = 0; i < str.length; i++) {
    
    if (lower.includes(str[i])) {
      
      for (let j = 0; j < lower.length; j++) {
        if (str[i] === lower[j]) {
          revCaseStr += upper[j];
        }
      }
      
    } else if (upper.includes(str[i])) {
      
      for (let k = 0; k < upper.length; k++) {
        if (str[i] === upper[k]) {
          revCaseStr += lower[k];
        }
      }
      
    } else revCaseStr += str[i];
    
  }
  
  return revCaseStr;
}

console.log(reverseCase(flu));



//*==========* 01/10/19: Reverse Number *==========*

// Good morning! Write a function called reverseNumber that reverses a number.

// Input Example: 
// 12345
// 555

// Output Example:  
// 54321
// 555

const bigNumber = 1234567;

function reverseNumber(num) {
  let numString = num.toString();
  let revNumArray = [];

  for (let i = 0; i < numString.length; i++) {
    console.log(numString[i]);
    
    revNumArray.unshift(numString[i]);
  }

  return parseInt(revNumArray.join(""));
}

console.log(reverseNumber(bigNumber));



//*==========* 01/09/19: Reverse String *==========*

// Good morning! Write a function called reverseString that accepts a
// string and returns a reversed copy of the string.

// Input Example:
// 'hello world'
// 'asdf'
// 'CS rocks!'

// Output Example:
// 'dlrow olleh'
// 'fdsa'
// '!skcor SC'

const codeFamString = "My #CodeFam includes: Jake, Dennis, Marc, Julian, Ryan, Andrew (Lowell), Jamie, and myself."

function reverseString(str) {
  console.log(str);
  
  const strArray = str.split("");
  console.log(strArray);
  
  let revArray = [];
  console.log(revArray);
  
  for (i = 0; i < strArray.length; i++) {
    revArray.unshift(strArray[i]);
  }

  return revArray.join("");
}

console.log(reverseString(codeFamString));



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
