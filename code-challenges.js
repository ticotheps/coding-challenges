// These coding challenges were completed during Lambda School's Full Time
// Full Stack Software Engineering/Computer Science program.



//*==========* 01/31/19: Operators *==========*

// Good morning! Implement four functions called multiply, divide, modulo, and
// negCheck. The first three functions should multiply, divide, or return the 
// remainder of two arguments after invoking negCheck upon the two numbers.

// Now for the tricky part: you can only use + and - to implement these functions.
// Do not use the JavaScript operators for multiply, divide and modulo: * / %

// The negCheck function needs to indicate whether or not the resulting product,
// quotient and remainder would be positive or negative. Use a Boolean value to
// indicate this (you can use the not operator ! to toggle the Boolean value.) 
// negCheck should return an array with that Boolean having converted num1 and 
// num2 into positive integers.

// Hint: divide should drop the remainder.
// NOTE: the test suite will check to see if you are using the * / or % operators. This test will fail if you have commented out code within your functions.

// For example:
// console.log(negCheck(12, 34)); //   <--- [ false, 12, 34 ]
// console.log(negCheck(-12, 34)); //  <--- [ true, 12, 34 ]
// console.log(negCheck(12, -34)); //  <--- [ true, 12, 34 ]
// console.log(negCheck(-12, -34)); // <--- [ false, 12, 34 ]
// console.log(multiply(3, 4)); //     <--- 12
// console.log(multiply(-3, 4)); //    <--- -12
// console.log(multiply(3, -4)); //    <--- -12
// console.log(multiply(-3, -4)); //   <--- 12
// console.log(divide(10, 3)); //      <--- 3
// console.log(divide(-10, 3)); //     <--- -3
// console.log(divide(10, -3)); //     <--- -3
// console.log(divide(-10, -3)); //    <--- 3
// console.log(modulo(10, 3)); //      <--- 1
// console.log(modulo(-10, 3)); //     <--- -1
// console.log(modulo(10, -3)); //     <--- 1
// console.log(modulo(-10, -3)); //    <--- -1


function negCheck (num1, num2) {
  let positives = [];
  if ((num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0)) {
    positives.push(false);
  }
  else {
    positives.push(true);
  }
  positives.push(Math.abs(num1));
  positives.push(Math.abs(num2));
  return positives;
}

function multiply(x, y) {
  const arr = negCheck(x, y);
  let first = arr[1];
  while (arr[2] > 1) {
    first += arr[1];
    arr[2]--;
  }
  if (arr[0]) {
    if (first === 0) {
      return 0;
    }
    return -(first);
  }
  else {
    return first;
  }
}

function divide(x, y) {
  const arr = negCheck(x, y);
  let first = arr[1];
  let counter = 0;
  while (first >= arr[2]) {
    first -= arr[2];
    counter++;
  }
  if (arr[0]) {
    return -(counter);
  }
  else {
    return counter;
  }
}

function modulo(x, y) {
  const arr = negCheck(x, y);
  let first = arr[1];
  let counter = 0;
  while (first >= arr[2]) {
    first -= arr[2];
    counter++;
  }
  if (arr[0]) {
    return -(first);
  }
  else {
    return first;
  }
}

console.log(negCheck(12, 34)); //   <--- [ false, 12, 34 ]
console.log(negCheck(-12, 34)); //  <--- [ true, 12, 34 ]
console.log(negCheck(12, -34)); //  <--- [ true, 12, 34 ]
console.log(negCheck(-12, -34)); // <--- [ false, 12, 34 ]
console.log(multiply(3, 4)); //     <--- 12
console.log(multiply(-3, 4)); //    <--- -12
console.log(multiply(3, -4)); //    <--- -12
console.log(multiply(-3, -4)); //   <--- 12
console.log(divide(10, 3)); //      <--- 3
console.log(divide(-10, 3)); //     <--- -3
console.log(divide(10, -3)); //     <--- -3
console.log(divide(-10, -3)); //    <--- 3
console.log(modulo(10, 3)); //      <--- 1
console.log(modulo(-10, 3)); //     <--- -1
console.log(modulo(10, -3)); //     <--- 1
console.log(modulo(-10, -3)); //    <--- -1




//*==========* 01/16/19: String to Camel Case *==========*

// Good morning! Complete the function so that it converts dash-delimited
// ("kebab" case) & underscore-delimited ("snake" case) words into "camel"
// casing. The first word within the output should be capitalized only if
// the original word was capitalized.

// toCamelCase("the-stealth-warrior")
// returns "theStealthWarrior"

// toCamelCase("The_stealth_warrior")
// returns "TheStealthWarrior"

const warrior = "The-best-player-on-the-golden_state_warriors-is-Steph-Curry."

function toCamelCase(str) {
  
  let myArr = str.split('');
  console.log(myArr);
  
  for (let i = 1; i < myArr.length; i++) {
    
    if (myArr[i] === '_' || myArr[i] === '-') {
      
      myArr[i] = '';
      myArr[i + 1] = myArr[i + 1].toUpperCase();
      
    } else {
        continue;
        
      }
    
  }
  
  return myArr.join('');
}

console.log(toCamelCase(warrior));



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
