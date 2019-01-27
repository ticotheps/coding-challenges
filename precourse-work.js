// This coding challenge was completed during the precourse work that was
// required for acceptance into Lambda School's Full Time Full Stack
// Software Engineering/Computer Science program.



//*==========* JavaScript: Array Methods *==========*

// The following arrays will be used through the questions:
const words = [ 'cattywampus', 'snickersnee', 'lollygag', 'pandiculation', 'ratoon' ];
const numbers = [ 8, 3, 22, 0, -73, 15 ];

// Question 1: 
// Use forEach to console.log all the words in the words array. Do not write a for loop. 
function logWords(array){
  words.forEach(function(item) {
    console.log(item);
  });
}

logWords(words);



// Question 2: Use forEach to console.log each number in the numbers array divided by two
// It should console.log: 
// 4
// 1.5
// ...etc. 
function logHalfNumbers(array){
  numbers.forEach(function(item) {
    console.log(item/2);
  });
}

logHalfNumbers(numbers);



// Question 3: Using the getFirstLetter function below as your callback,
//             use map to create an array contaning the first letter of 
//             every word from the words array.
function getFirstLetter(word) {
  let firstChar = word[0];
  return firstChar;
}

const firstLetters = words.map(getFirstLetter);
console.log(firstLetters);



// Question 4: Use map to create an array containing the last letter of every word
//             from the words array. 
const lastLetters = words.map(function(word) {
  let numOfChars = word.length;
  let lastChar = word[numOfChars-1];
  return lastChar;
});
console.log(lastLetters);



// Question 5: Use map to create an array containing the reversed version of each word
//             from the word array. For example, the first entry will be 'supmawyttac'.
const reversedWords = words.map(function(item) {
  let arrayOfWord = item.split("").reverse();
  return arrayOfWord.join("");
});

console.log(reversedWords);



// Question 6: Use map to create an array containing the absolute value of every number
//             in the numbers array.
const absoluteNumbers = numbers.map(function(item) {
  return Math.abs(item);
});

console.log(absoluteNumbers);



// Question 7: Use map to create an array containing each number from the numbers array
//             rounded to the nearest 10. For example: 10, 0, 20, 0, etc. 
const roundedToTenNumbers = numbers.map(function(item) {
  let tenthOfNum = (Math.abs(item))/10;

  if (tenthOfNum < 0.5) {
    return (Math.floor(item/10))*10;
  } else if ((tenthOfNum > 0.5) && (tenthOfNum < 1)) {
      return (Math.ceil(item/10))*10;
    } else if ((tenthOfNum > 1) && (tenthOfNum < 10)) {
        return (Math.round(item/10))*10;
      }
});

console.log(roundedToTenNumbers);



// Question 8: Use map to create an array that contains only the words from the words
//             array containing 's'. All other words should be replaced with null.
//             For example: 'cattywampus', 'snickersnee', null, etc. 
const wordsWithS = words.map(function(item) {
  if (item.includes("s") === true) {
    return item;
  } else {
    return null;
  }
});

console.log(wordsWithS);



// Stretch Questions:
// The stretch question will use the array method reduce, which was only briefly reviewed 
// in the lecture. Refer to online documentation for more information on reduce. 

// Question 9: Use reduce to sum up all of the numbers in the numbers array. 

// function sum(currentTotal, nextNumber) {

// }

// const sumTotal = numbers.reduce();

// Question 10: Use reduce to find the word from the words array that is last in the alphabet.

// const alphabeticallyLast = words.reduce(function() {

// });



//*==========* JavaScript: Higher Order Functions vs. Callbacks *==========*

/* For each example of code please identify 
   the higher order function and the callback function(s) */
   
/* For both types of functions, you will describe the 
   parameters and return values (if any) */

// Question 1:

// callback function
// parameters: none
// return values: none
function returned() {
    console.log("The king hath returned from the hunt!");
  }
  
  // callback function
  // parameters: none
  // return values: none
  function death() {
    console.log("The king is dead!");
  }
  
  // callback function
  // parameters: none
  // return values: none
  function birth() {
    console.log("An heir has been born today!");
  }
  
  // higher order function
  // parameters: callback function
  // return values: callback function
  function announce(cb) {
    console.log("Hear ye! Hear ye!");
    cb();
  }
  
  announce(returned);
  announce(birth);
  announce(death);
  
  /**
    1a) What is the higher order function in this example? List the parameters and return values. 
          -The higher order function in this example is 'announce'. 
          -There is only one parameter for this higher order function ("callback" or "cb").
          
    1b) What are the callbacks in this example? List the parameters and return values for each.  
          -The callback functions in this example are: "returned", "death", and "birth".
          -Each of the aforementioned callback functions do not have any return values.
  */
  
  // Question 2:
  
  // callback function
  // parameters: x, y
  // return values: the sum of x and y (x + y)
  function addFn(x, y) {
    return x + y;
  }
  
  // callback function
  // parameters: x, y
  // return values: the difference of x and y (x - y)
  function subtractFn(x, y) {
    return x - y;
  }
  
  // higher order function
  // parameters: x, y, cb (or "callback")
  // return values: the return value of whichever callback function is passed to it (addFn || subtractFn)
  function combine(x, y, cb) {
    return cb(x, y);
  }
  
  const result1 = combine(1, 4, addFn);
  const result2 = combine(9, -2, subtractFn);
  const result3 = combine(2, 3, function(x, y) {
    return x * y;
  })
  
  /**
    2a) What is the higher order function? List the parameters and return values. 
          -The higher order function in this example is 'combine'. 
          -There are three parameters for this higher order function (x, y, and cb (or "callback").
    
    2b) What are the callbacks? List the parameters and return values for each.  
          -The callback functions in this example are "addFn" and "subtractFn".
            -addFn:
              -parameters: x, y
              -return value: (only one) the sum of x and y
            -subtractFn:
              -parameters: x, y
              -return value: (only one) the difference of x and y
  */
  
  
  // Question 3:
  
  function addExcitement(string) {
    return 'string' + '!';
  }
  
  const phrases = [ 'A fish rots from the head down', 'A rolling stone gathers no moss', 'A rose is a rose is a rose'];
  const excitedPhrases = phrases.map(addExcitement);
  
  /**
    3a) What is the higher order function? List the parameters and return values. 
          -The higher order function in this example is '.map( )'. 
          -There is only one parameter (a callback function => 'addExcitement') for this higher order function.
    3b) What are the callbacks? List the parameters and return values for each.  
          -The callback function in this example is 'addExcitement'.
            -addExcitement:
              -parameters: "string"
              -return value: (only one) the concatenation of "string" and "!"
  */
  
  
  // Stretch Question 4:
  
  function findLongest(str1, str2) {
    const firstLonger = str1.length >= str2.length;
  
    if (firstLonger) {
      return str1;
    } else {
      return str2;
    }
  }
  
  const words = [ 'cattywampus', 'snickersnee', 'lollygag', 'pandiculation', 'ratoon' ];
  
  const longestWord = words.reduce(findLongest);
  const longestPhrase = phrases.reduce(findLongest);
  
  /**
    4a) What is the higher order function? List the parameters and return values. 
          -The higher order function in this example is '.reduce( )'. 
          -There is only one parameter (a callback function => 'findLongest') for this higher order function.
    4b) What are the callbacks? List the parameters and return values for each.  
          -The callback function in this example is 'findLongest'.
            -findLongest:
              -parameters: "str1", "str2"
              -return value: (only one) str1 OR str2
  */
  
  console.log(longestWord);
  console.log(longestPhrase);



//*==========* JavaScript: Classes *==========*

/* === DO NOT ALTER CODE BELOW THIS LINE UNTIL LINE 88 === */
// HtmlElement is a javascript class that represents an HTML element
// It's constructor takes in two arguments: type and text
// type is the type of element (example div, p, span, h1, etc)
// text is an optional argument and represents any text in the element
const HtmlElement = function(type, text) {
    this.type = type;
    this.text = text || "";
    this.id = null;
    this.classes = [];
    this.children = [];
  };
  
  // The addID method will add an id to an HTML element
  // If an id already exists, it will overwrite it. 
  HtmlElement.prototype.addID = function(id) {
    this.id = id;
  };
  
  // The addClass method will add a class to an HTML element
  // addClass can be called multiple times to add different classes
  HtmlElement.prototype.addClass = function(className) {
    this.classes.push(className);
  };
  
  // The addChild method will add children elements
  // The argument must be an HtmlElement object
  HtmlElement.prototype.addChild = function(element) {
    if (!(element instanceof HtmlElement)) {
      throw new Error('Invalid argument for addChild method');
    }
  
    this.children.push(element);
  };
  
  // The toString method returns a string version of the HTML element
  // Note: The following code is quite complicated
  // While you can use this method to check your work,
  // there is no need to read through it or understand it
  // (until you get the stretch question)
  HtmlElement.prototype.toString = function() {
    const openingTag = getOpeningTag(this.type, this.id, this.classes);
    const closingTag = "</" + this.type + ">";
  
    return openingTag + this.text + closingTag;
  
    function getID(id) {
      if (!id) {
        return "";
      }
  
      return "id=\"" + id + "\"";
    }
  
    function getClasses(classes) {
      if (!classes.length) {
        return "";
      }
  
      const classList = classes.reduce(function(string, name) {
        return string + ' ' + name;
      });
  
      return "class=\"" + classList + "\"";
    }
  
    function getOpeningTag(type, id, classes) {
      const idText = getID(id);
      const classText = getClasses(classes);
  
      let text = type;
      
      if (idText) {
        text += " " + idText;
      }
  
      if (classText) {
        text += " " + classText;
      }
  
      return "<"+text+">"
    }
  };
  
  /* === DO NOT ALTER ANY CODE ABOVE THIS LINE === */
  
  
  // Question 1: Create following instances of HtmlElement. 
  //             You will need to use the method of addID and addClass.
  //             The toString method may be used to check your work. 
  //
  //  a. <p>To every action, there is an equal and opposite reaction.</p> 
  //  b. <h1 id="main">Welcome to the Webpage</h1>
  //  c. <div class="container important"></div>
  //  d. <li id="first-item" class="stir-fry">Scallion</li>
  //  e. <span id="CTA" class="inline important"></span> 
  
  // Assign the following variables correctly:
  const elementA = new HtmlElement('p', 'To every action there is an equal and opposite reaction.');
  
  const elementB = new HtmlElement('h1', 'Welcome to the Webpage');
  elementB.addID('main');
  console.log(elementB.id.toString());
  
  const elementC = new HtmlElement('div');
  elementC.addClass('container');
  elementC.addClass('important');
  console.log(elementC.classes.toString());
  
  const elementD = new HtmlElement('li', 'Scallion');
  elementD.addID('first-item');
  elementD.addClass('stir-fry');
  console.log(elementD.id.toString());
  console.log(elementD.classes.toString());
  
  const elementE = new HtmlElement('span');
  elementE.addID('CTA');
  elementE.addClass('inline');
  elementE.addClass('important');
  console.log(elementE.id.toString());
  console.log(elementE.classes.toString());
  
  // Question 2: Create an element that represents the following ordered list.
  //             You will need to create an new element for each of its children
  //             and add them to their parent using the addChild method. 
  //             Note that the toString method won't fully work on elements with 
  //             children (see stretch question). 
  //
  // <ol id="world-domination">
  //   <li>Discover the secret to prime factorization</li>
  //   <li class="illegal">Hack through online banking security</li>
  //   <li class="illegal">Blackmail all the major global leaders</li>
  //   <li>World domination</li>
  // </ol> 
  
  const stepsToWorldDomination = new HtmlElement('ol');
  stepsToWorldDomination.addID('world-domination');
  
  const childElement1 = new HtmlElement('li', 'Discover the secret to prime factorization');
  stepsToWorldDomination.addChild(childElement1);
  console.log(stepsToWorldDomination.children.toString());
  
  const childElement2 = new HtmlElement('li', 'Hack through online banking security');
  childElement2.addClass('illegal');
  stepsToWorldDomination.addChild(childElement2);
  console.log(stepsToWorldDomination.children.toString());
  
  const childElement3 = new HtmlElement('li', 'Blackmail all the major global leaders');
  childElement3.addClass('illegal');
  stepsToWorldDomination.addChild(childElement3);
  console.log(stepsToWorldDomination.children.toString());
  
  const childElement4 = new HtmlElement('li', 'World domination');
  stepsToWorldDomination.addChild(childElement4);
  console.log(stepsToWorldDomination.children.toString());
  
  // Question 3: Write the removeClass method on the HTMLElement class.
  
  
  // The removeClass method will remove a class from an element
  // by removing that class name from the this.classes array
  // Example: if element.children were equal to ['inline', 'important']
  //          and you called element.removeClass('inline'), afterward 
  //          element.classes would be equal to ['important']
  
  HtmlElement.prototype.removeClass = function(className) {
    
    if (this.classes.length <= 0) {
      return "Sorry! This class cannot be removed because this element has no classes on it!";
      
    } else {
        console.log("Number of Classes on this Element: " + this.classes.length);
        
        let matchingIndex = this.classes.findIndex(function(matchingClass) {
            return matchingClass === className;
        });
        
        console.log("Index of Matching Class: " + matchingIndex);
        
        if (matchingIndex < 0) {
          return "Sorry, but this class name does not exist on this element!";
          
        } else {
            let oldZeroIndex = this.classes[0];
            let newZeroIndex = this.classes[matchingIndex];
  
            this.classes[0] = newZeroIndex;
            this.classes[matchingIndex] = oldZeroIndex;
  
            console.log(this.classes);
            this.classes.shift();
            console.log(this.classes);
          }
          
        if (this.classes.length < 1) {
          return "Sorry, there are no classes on this element any more. You have just removed the only class.";
          
        } else {
            return this.classes;
          }
      }
  };
  
  
  
  // STRETCH QUESTION (NOT REQUIRED)
  // Question 4: Update toString
  //
  // As you notice in Question 2 toString does not work for elements with children.
  // Your job is to update the method so that it prints the element containing it's children.
  // The first step will be to spend some time reading through the existing code and understanding it.
  //
  // Note: The string should not include any new lines or tabbing.
  //
  // Example: stepsToWorldDomination.toString() should yield:
  // "<ol id="world-domination"><li>Discover the secret to prime factorization</li><li class="illegal">Hack through online banking..."
  // (Full string not shown because it would be super long, but you get the point...)




//*==========* JavaScript: Arrays & Objects *==========*

// getThird takes in an array 
// it returns the third item in the array
// if there is no third item, return null
// Example: getThird(['Doc', 'Biff', 'Marty']) returns 'Marty'

function getThird(array) {
    if  (array.length >= 3) {
      return array[2];
    } else {
      return null;
    }
  }
  
  
  // stringLengths takes in four strings
  // it returns an array containing the length of each string
  // Example: stringLengths('mushroom', 'onion', '', 'garlic') returns [8, 5, 0, 6] 
  
  function stringLengths(str1, str2, str3, str4) {
    let objectOfArgs = arguments;
    const arrayOfArgs = [];
    
    for (let key in objectOfArgs) {
      arrayOfArgs.push(objectOfArgs[key].length);
    }
  
    return arrayOfArgs;
  }
  
  
  // removeFirst takes in an array
  // it returns the same array, but with the first item removed
  // Example: removeFirst(['frog', 'toad', 'cricket', 'skunk']) would
  //          return ['toad', 'cricket', 'skunk'] 
  
  function removeFirst(array) {
    array.shift();
    return array;
  }
  
  
  // swap takes in an array and two indices 
  // it returns the array with the items at i and j swapped
  // Example: swap(['unicycle', 'scooter', 'skateboard', 'canoe'], 0, 2) would
  //          return ['skateboard', 'scooter', 'unicycle', 'canoe'];
  
  function swap(array, i, j) {
    let newItemI = array[j];
    let newItemJ = array[i];
    
    array[i] = newItemI;
    array[j] = newItemJ;
    
    return array;
  }
  
  // getValue takes in an object and a key name
  // if the key exists in the object, return the value of that key
  // if not, return null
  // Example: getValue({ first: 'Gordon', last: 'Peppermill'}, 'last') 
  //          would return 'Peppermill'
  
  function getValue(object, key) {
    if (object[key] !== undefined) {
      return object[key];
    } else {
      return null;
    }
  }
  
  
  // generateCSS takes in three strings containing CSS values
  // it returns an object with the CSS key value pairs
  // Example: generateCSS('100px', '70px', 'blue') would return
  //          { height: '100px', width: '70px', color: 'blue' }
  
  function generateCSS(height, width, color) {
    const objectOfValues = arguments;
    const arrayOfCssProperties = ['height', 'width', 'color'];
    const arrayOfValues = [];
    const newObjectOfValues = {};
  
    for (let key in objectOfValues) {
      arrayOfValues.push(objectOfValues[key]);
    }
  
    for (let i = 0; i < arrayOfCssProperties.length; i++) {
      newObjectOfValues[arrayOfCssProperties[i]] = arrayOfValues[i];
    }
  
    return newObjectOfValues;
  }
  
  // getValues takes in an object
  // it returns an array containing the values from that object
  // Example: getValues({ name: 'Ally', age: 27, job: 'hypnotist' })
  //          would return ['Ally', 27, 'hypnotist']
  
  function getValues(obj) {
    const newArray = [];
  
    for (var key in obj) {
      newArray.push(obj[key]);
    }
  
    return newArray;
  }
  
  // STRETCH PROBLEMS (NOT REQUIRED)
  
  // wrapAround takes in an array
  // and returns an array with the last item in the first spot
  // and everything else shifted one index over
  // Example: wrapAround(['teaspoon', 'meat grinder', 'spatula', 'salad fork'])
  //          would return ['salad fork', 'teaspoon', 'meat grinder', 'spatula']
  
  function wrapAround(array) {
    let poppedItem = array.pop();
    array.unshift(poppedItem);
    return array;
  }
  
  // count takes in an array
  // and returns an object containing a frequency count for each item in the array
  // Example: count(['red', 'blue', 'blue', 'pink', 'blue', 'green', 'red']) would
  //          return { red: 2, blue: 3, pink: 1, green: 1}
  
  function count(array) {
    let redCount = 0;
    let blueCount = 0;
    let pinkCount = 0;
    let greenCount = 0;
    const counterObject = {};
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 'red') {
        redCount++;
      } else if (array[i] === 'blue') {
        blueCount++;
      } else if (array[i] === 'pink') {
        pinkCount++;
      } else if (array[i] === 'green') {
        greenCount++;
      }
    }
  
    counterObject.red = redCount;
    counterObject.blue = blueCount;
    counterObject.pink = pinkCount;
    counterObject.green = greenCount;
  
    return counterObject;
  }



//*==========* JavaScript: Functions *==========*

// addOne takes in a number as a parameter 
// and returns that numbers +1
// Example: addOne(-7) returns -6

function addOne(x) {
    let num = x + 1;
    return num;
  }
  
  // divide takes in two numbers as parameters
  // and returns the first divided by the second
  // Example: divide(6, 3) returns 2
  
  function divide(x, y) {
    let answer = x / y;
    return answer;
  }
  
  // getBiggest takes in two numbers
  // and returns the largest of the two
  // if they are the same, return either
  // Example getBiggest(-1, 3) returns 3
  
  function getBiggest(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  // getLength takes in a string
  // and returns the length of the string
  // Example: getLength('tazerface') returns 9
  
  function getLength(str) {
    return str.length;
  }
  
  // orderPizza takes in a boolean
  // if it is true return the string 'cheese pizza'
  // if not, return the string 'pepperoni pizza'
  // Example: orderPizza(true) returns 'cheese pizza'
  
  function orderPizza(vegetarian) {
    if (vegetarian === true) {
      let cheese = 'cheese pizza';
      return cheese;
    } else {
      let pepperoni = 'pepperoni pizza';
      return pepperoni;
    }
  }
  
  // countDown takes in a number greater than 0
  // it logs every number starting from the input down to 0
  // there is no return value
  // Example: countDown(3) logs the following
  // 3 
  // 2 
  // 1 
  // 0
  
  function countDown(start) {
    for (let i = start; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // repeat logs a phrase x number of times
  // there is no return value
  // Example: repeat("not your mama's edamame", 4) logs the following
  // "not your mama's edamame"
  // "not your mama's edamame"
  // "not your mama's edamame"
  // "not your mama's edamame"
  
  function repeat(phrase, x) {
    for (let i = 0; i < x; i++) {
      console.log(phrase);
    }
  }
  
  // getHTMLTag takes in a tag name 
  // and returns the opening and closing tag
  // Example: getHTMLTag('div') would return '<div></div>'
  
  function getHTMLTag(tagName) {
    let openAndClose = '<' + tagName + '></' + tagName + '>';
    return openAndClose;
  }
  
  
  // STRETCH PROBLEMS (NOT REQUIRED)
  
  // getHeaderTag takes in header text and a header size 
  // and returns the opening and closing H tag with the text inside
  // Example: getHeaderTag('Welcome', 2) would return '<h2>Welcome</h2>'
  
  function getHeaderTag(text, size) {
    let fullTag = '<h' + size + '>' + text + '</h' + size + '>';
    return fullTag;
  }
  
  // logMultiples takes in two numbers 
  // and logs any number between 1 and 100 that is a multiple of x or y
  // there is no return value
  // Example: logMultiples(20, 25) would log
  // 20
  // 25
  // 40
  // 50
  // 60
  // 75
  // 80
  // 100
  
  function logMultiples(x, y) {
    for (let i = 1; i <= 100; i++) {
      if ((i % x === 0) ||  (i % y === 0)) {
        console.log(i)
      } else {
        continue;
      }
    }
  }
  
  // reverseWords takes in a string and reverses every word in the phrase
  // it returns the reversed version of the string
  // Example: reverseWords('good luck') would return 'kcul doog'
  
  function reverseWords(phrase) {
    let phraseArray = phrase.split();
    let newArray = [];
    for (let i = phrase.length; i >= 0; i--) {
      let char = phrase.charAt(i-1);
      newArray.push(char);
    }
    let newPhrase = newArray.join('');
    return newPhrase;
  }



//*==========* JavaScript: FOR-Loops & IF-Statements *==========*

// example:
// Write a for loop that logs the numbers 0 through 5
for (let i = 0; i < 6; i++) {
    console.log(i);
  }
  
  
  // 1.
  // Write a for loop that logs the numbers 0 through 10
  for (let i = 0; i < 11; i++) {
    console.log(i);
  }
    
  
  
  // 2.
  // Write a loop that logs the numbers 10 through 0
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
  
  
  // 3.
  // Write a loop that logs the word "Hippopotamus" 17 times.  
  for (let i = 0; i < 17; i++) {
    console.log('Hippopotamus');
  }
  
  
  // 4.
  // Write a for loop that logs 2, 4, 6, 8, 10
  for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
  }
  
  
  // 5.
  // Write a loop that logs the numbers 2, 4, 6, 8.
  // Do not edit the existing code.
  
  for (let i = 0; i < 4; i++) {
    let num = (i * 2) + 2;
    console.log(num);
  }
  
  // 6.
  // Write a loop that logs the numbers 5 through 10. 
  // Do not edit the existing code.
  
  for (let i = 0; i < 20; i++) {
    if (i < 5) {
      continue;
    } if (i > 10) {
      continue;
    }
    console.log(i);
  } 
  
  // 7. 
  // Write a loop that logs "Marco!" when i is even,
  // "Polo!" when i is odd, 
  // and 'Game Over!' when i is 0. 
  // Do not edit the existing code.
  
  for (let i = 10; i >= 0; i--) {
    if ((i % 2) === 0) {
      console.log('Marco!');
    } if ((i % 2) !== 0) {
      console.log('Polo!');
    } if (i === 0) {
    console.log('Game Over!');
    }
  }
  
  // 8.
  // Use an else-if statement to assign all four null variables based on the age variable.
  // The code should work regardless of what value age is assigned to. 
  // Assume the driving age is 16, voting age is 18, drinking age is 21, and retirement age is 66.
  const age = 26;
  let canDrive = null;
  let canVote = null;
  let canDrink = null;
  let canRetire = null;
  
  // Write all of your code below. Do not change the code above. 
  
  if (age < 16) {
    canDrive = false;
    canVote = false;
    canDrink = false;
    canRetire = false;
    } else if (age < 18) {
        canDrive = true;
        canVote = false;
        canDrink = false;
        canRetire = false;
      } else if (age < 21) {
        canDrive = true;
        canVote = true;
        canDrink = true;
        canRetire = false;
        } else if (age < 66) {
          canDrive = true;
          canVote = true;
          canDrink = true;
          canRetire = false;
          } else if (age >= 66) {
            canDrive = true;
            canVote = true;
            canDrink = true;
            canRetire = true;
  }
  
  
  // STRETCH PROBLEMS (NOT REQUIRED)
  
  // 9.
  // Find a second way to write the loop from question 4. 
  for (let i = 2; i <= 10; i++) {
    if ((i % 2) !== 0) {
      continue;
    }
    console.log(i);
  }
  
  
  // 10. 
  // Write a loop that logs the numbers 0 through 10. 
  // Only add code in the parenthesis following the 'for' keyword
  // Finish the code in the parentheses
  
  for (let i = 0; i <= 50; i = i+5) {
    
    //Do not add or edit code below here!
    if (i < 0) {
      continue;
    } else if ( i > 50) {
      break;
    } else {
      console.log(i/5);
    }
  }
  
  // 11.
  // Imagine you throw two six sided dice and sum up the total.
  // Write a loop that logs every possible score you could roll.
  // Used a nested for loop ( a loop inside of a loop)
  // Bonus Challenge: Don't log repeats.



//*==========* JavaScript: True vs. False *==========*

// Example: 
const resultExample = true && true;
let resultExample_answer = true;

// 1.
const result1 = true && false;
let result1_answer = false;

// 2.
const result2 = true || false;
let result2_answer = true;

// 3. 
const result3 = true && (true || false);
let result3_answer = true;

// 4. 
const result4 = !true || false;
let result4_answer = false;

// 5. 
const result5 = !(true && false);
let result5_answer = true;

// 6. 
const result6 = !undefined;
let result6_answer = true;

// 7.
const likesPizza = true;
const hasPizza = false;
const eatsPizza = likesPizza && hasPizza;
const result7 = eatsPizza;
let result7_answer = false;

// 8. 
const result8 = (null === undefined);
let result8_answer = false;

// 9.
const result9 = (0 < 10) && true;
let result9_answer = true;

// 10. 
const ordersPizza = true;
const makesPizza = false;
const hasPizza1 = ordersPizza || makesPizza;
const result10 = hasPizza1;
let result10_answer = true;

// 11.
const firstName = 'Candice';
const lastName = null;
const hasFullName = !!firstName && !!lastName;
const result11 = hasFullName;
let result11_answer = false;

// 12.
const emptyStr = '';
const result12 = !!emptyStr;
let result12_answer = false;

// 13. 
const result13 = (true || false) === false;
let result13_answer = false;

// 14.
const result14 = true && !false;
let result14_answer = true;

// 15.
const hasPizza2 = true;
const canAffordGoodPizza = false;
const hasLowStandards = true;
const enjoysPizza = hasPizza2 && (canAffordGoodPizza || hasLowStandards);
const result15 = enjoysPizza;
let result15_answer = true;


// STRETCH QUESTIONS (NOT REQUIRED)

// 16. 
const mondayHours = 4;
const tuesdayHours = 0;
const wednesdayHours = 2;
const workedThisWeek = (!!mondayHours || !!tuesdayHours || !!wednesdayHours);
const result16 = workedThisWeek;
let result16_answer = true;
// (true || false || true)

// 17.
const result17 = !(true && false) || (false && true);
let result17_answer = true;
// true || false

// 18.
const result18 = ((0 < 12) || !0) === false;
let result18_answer = false;
// 

// 19.
const orderedFood = false;
const madeFood = false;
const hasFood = orderedFood || madeFood;
const isHungry = true;
const likesFood = false;
const wantsFood = !hasFood && isHungry && likesFood;
const result19 = wantsFood;
let result19_answer = false;
// hasFood = false;
// true && true && false;

// 20. 
const result20 = !(!true || false) && !(false || (true && false));
let result20_answer = true;
// true && true;



//*==========* JavaScript: Reading Code *==========*

const var1 = 'Lambda School';
const var2 = 9.8;
const var3 = var2.toString();
const var4 = var2 < 10;
const var5 = var4.toString;

// Exercise 1:
// What are the variables types of var1 - var5?
// var1: String
// var2: Number
// var3: String
// var4: Boolean
// var5: Undefined 

// Exercise 2:
// What are the values for of var1 - var5?
// var1: 'Lambda School'
// var2: 9.8
// var3: '9.8'
// var4: true
// var5: Undefined

//Exercises 3 - 6
const firstName = 'Grace';
const lastName = 'Hopper';
let length = firstName.length;
console.log(length);
const fullName = firstName + lastName;
const mysteryVariable = lastName;

length = lastName.length;
console.log(mysteryVariable);

// 3. How many variables were declared?
let answer3 = 5;

// 4. What two values were logged to the console? 
let answer4Part1 = 5;
let answer4Part2 = 'Hopper';

// 5. What does the variable 'fullName' contain? 
let answer5 = firstName + lastName;

// 6. What is the final value of length?
let answer6 = 6;

// Exercises 7 - 9:
const x = 7;
const y = 3.3;
const z = y + 1;
const a = Math.ceil(y);
const b = Math.random();
const c = Math.pow(2, 2);
const randomize = Math.random();


// 7. How many function calls occur in this piece of code?
let answer7 = 4;

// 8. What are the arguments for each function call? Remember, none is valid answer. 
// Answer a: y;
// Answer b: none;
// Answer c: (2, 2)

// 9. What are the return values for each?
// Answer a: 4;
// Answer b: 0.6662103157470614;
// Answer c: 4;
// Answer randomize: 0.04119832560487979;


// Exercise 10:
// const x = '9';
// const y = 1.4;
// const z = x++;
// const sum = console.log(y + 10);
// const greeting = hello;
// x = Math.round(y);

// What is wrong with the above code? 
// Answer: (1) 'const greeting' must have quotations around it's value of 'hello', 
// (2) the variable 'x' must be declared with a 'let' instead of a 'const' because
// lines 76 and 79 call for changes to be made to the value of 'x'; however, because
// it is has been declared with a 'const', it must remain constant, and therefore,
// cannot be changed.




//*==========* JavaScript: Variables *==========*

const noData = null;

// Remove _replaceMe_ and add your own code so that each variable is the type that its name indicates
const numberVar = 55;
const stringVar = 'Tico';
const booleanVar = true;
const nullVar = noData;
const undefinedVar = undefined;

// Remove _replaceMe_ and use math operators to assign the following variables. Use Math methods where ever possible. 
const pi = 3.1415926;
const piPlusOne = pi+1;
const piMinusOne = pi-1;
const piDividedByThree = pi/3;
const piSquared = Math.pow(pi, 2);
const piRoundedDown = Math.floor(pi);
const piRoundedUp = Math.ceil(pi);

// Create an if-else statement that will randomly log "Marco" half of the time and "Polo" the other half.  

if (Math.round(Math.random()) === 1) {
  console.log('Marco');
} else {
  console.log('Polo');
}

// Remove _replaceMe_ and assign the variables below using x and y. 
const x = 7.5;
const y = -15;
const isXLessThanY = x<y;
const xMinusY = x-y;
const yDividedByX = y/x;
const xAsAString = x.toString();
const YToThePowerOfX = Math.pow(y, x);
const yRoundedUp = Math.ceil(y);

//move the console log at the start of the code to greet Evelyn. Do not modify anything else. 
let mysteryVar = 'start value';


const name = 'Evelyn';
const greeting1 = 'Good morrow';
const greeting2 = 'Farewell';

if (name.length < Math.random()*10) {
  mysteryVar = greeting1 + ', ' + name;
} else {
  mysteryVar = greeting2 + ', ' + name;
}
console.log(mysteryVar);
mysteryVar = null;

// Stretch Task: 
// Research the following string methods: includes, indexOf, slice, toUpperCase, toLowerCase
// Using those methods on 'sampleText', correctly remove _replaceMe_ and assign the following variables.
const sampleText = "Isn't documentation great!";
const trueValue = sampleText.includes('great!');
const falseValue = sampleText.includes('awesome!');
const three = sampleText.slice(3);
const nine = sampleText.slice(9);
const cumen = sampleText.includes('cumen');
const eat = sampleText.indexOf('eat');
const DOC = sampleText.slice(6, 9).toUpperCase();
const is = sampleText.slice(0, 2).toLowerCase();



