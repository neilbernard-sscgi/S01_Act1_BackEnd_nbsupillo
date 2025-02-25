/*[SECTION] Syntax Statements and Comments
 Statements in programming are instruction that we tell the computer to perform
    - it usuallly end with semi-colon(:)
 
 Syntax it is a set of rules that describes how statements must be constructed
   - all line/blocks of code should be written in a specific manner to work.
    - This is due to how these codes were initially programmed to function and perform in a certain manner
 
 Comments are parts of the code that gets ignored by the language.
    -to describe the written code
-single - line / multi - line;*/

//Variables
/*  it is used to contain data
    any informatoin that is used by an application is stored in what we called "memory"
 
*/

//Declare Variable
let myVariable;
console.log(myVariable);
myVariable = "Juan Dela Cruz";
console.log(myVariable);

// variables must be decalared first before they are use
// console.log(hello);
// let hello;

//Declaring and Initializing the variables - the instance when a variable is given its initial/starting value
//  Syntax: let/const variableName = value;

let productName = "desktop computer";
console.log(productName);

let productPrice = 1500;
console.log(productPrice);

const interest = 3.59;
console.log(interest);

//Reassigning Variable values
// Syntax variableName = newValues

productName = "laptop";
console.log(productName);

productPrice = 1000;
console.log(productPrice);

// values of constant cannot be changed
// interest = 1.25;
// console.log(interest);

// var vs let/const
// var -is also used in declaring a variable but var is an ECMAScript2015 or ES6 features -let/const
// hoisting - default behavior of moving declarations to the top, in terms of variables and constants, kwy word var is hoisted and let/const does not allow hoisting
a = 5;
console.log(a);
var a;

//Scope essentially means these variables are available for use
//let and const are blocked scope
// a block is a chunk of code bounded by {}.

let outerVariable = "hello again";
{
  let innerVariable = "goodbye";
  console.log(innerVariable);
}

console.log(outerVariable);
//console.log(innerVariable); //error

/** [Section] Data types
 *  Strings are series of characters that create a word,
 *  a sentence or anything related to create text
 *  - single('') or double ("") quote
 *
 *  Concatenating Strings
 *      -combining multiple strings to create single string
 *      - + symbol
 */

let province = "Makati City";
let country = "Philippines";

let fullAddress = province + " " + country;

let greet = "I live in the " + country;
console.log(greet);

//Escape Character (\) in strings in combination with other characters can produce different effect in text
// "\n" refers to creating new line in between text

let mailAddress = "Metro Manila\n\n Philippines";
console.log(mailAddress);

//use double quotes along with single quotes to allow us to easily include single quotes in texts without using escape character
let message = "Datu's employee went home early.";
console.log(message);
message = "Via's charm";
console.log(message);

//Boolean Values are normally used to store values relating to the state of certain things
let isMarried = false;
let inGoodConduct = true;
console.log("Juan is " + isMarried);
console.log("Juan is in Good Conduct" + inGoodConduct);

// Array - are special kind of data type that is used to store multiple values.
//[] square brackets or array literal
// syntax: let/conts arrayName = [elementA, elementB]

let grades = [98, 99, 100, 84];
console.log(grades);

let details = ["Dave", "26", true, false];
console.log(details);

//Objects
//Objects - another special kind of data type that's used to mimic real world objects/items
// {} curly braces or object literal
// syntax: key-valued pair

/**
 *  let/const objectName = {
 *      propertyA: value
 *      propertyB: value
 *   }
 */

let person = {
  name: "Juan",
  age: 23,
  address: ["Makati", "San Pedro"],
};
