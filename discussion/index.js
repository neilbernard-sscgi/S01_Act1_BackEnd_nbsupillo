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

/*
typeof operator is used to determine the type of data or the avlue of a variable, It outputs a string

*/
console.log(typeof person);

//Notw: array is a special type of object with methods and fucntions to manipulate it.

console.log(typeof grades);

console.log(typeof interest);

//anime[0] = ["demon slayer"];

/*
  Constant Object and Arrays
    The keywork const is a little misleading

    It does not define a constant value. It defines a constant reference to a value

    Because of this you can NOT:
      -reaasign a constant value
      -reaasign a constant array
      -reaasign a constant object

      But you CAN:
        - change the elements of constant array
        - change the properties of a constant object
*/
//Null is used to intentionally express the absence of a value in a variable declation/initialization
// numm simple means that a data type was assigned to a variable but it does not hold any value/amount or is nullified

//type coercion = implicit
let spouse = null;
let juan = "";
let result = "5" + 1;
console.log(result);

// type conversion = explicit
let num = "5";
num = Number(num);
console.log(num);

//undefined represents the state of a variable that has been declared but without an assigned value

//let fullName;
//console.log(funnName);

//numm vs undefined
// undefined a variable was created but was not provided a vlue, null means that a variable was created and was assign a value that does not hold any value/amount

console.log(spouse);

let products = [
  { name: "banana", price: 1, stockQuantity: 1, category: "fruits" },
  {
    name: "apple",
    price: 1,
    stockQuantity: 1,
    category: "fruits",
  },
];

let stop = false;
while (stop == false) {
  let operations = prompt(
    "1 if add, 2 if update, 3 if delete, 4 if display all, 5 if display one, 6 if stop"
  );
  //console.log(typeof operations);

  if (operations == 6) {
    stop = true;
  }
  if (operations == 1) {
    let name = prompt("name");
    let price = prompt("price");
    let stock = prompt("stock");
    let category = prompt("category");

    let product = {
      name: name,
      price: price,
      stockQuantity: stock,
      category: category,
    };
    products[products.length] = product;
    console.log("Added new product");
  }

  if (operations == 2) {
    let index = prompt("input the index");
    if (index >= products.length || index < 0) {
      console.log("Products don't exist");
    } else {
      let name = prompt("index" + index + "name");
      let price = prompt("index" + index + "price");
      let stock = prompt("index" + index + "stock");
      let category = prompt("index" + index + "category");

      let product = {
        name: name != "" ? name : products[index].name,
        price: price != "" ? price : products[index].price,
        stockQuantity: stock != "" ? stock : products[index].stockQuantity,
        category: category != "" ? category : products[index].category,
      };
      products[index] = product;
      console.log("Updated Index " + index + " products");
    }
  }
  if (operations == 3) {
    let index = prompt("input the index");

    if (index >= products.length || index < 0) {
      console.log("Products don't exist");
    } else {
      products.splice(index, 1);
      console.log("Deleted Index " + index + " product");
    }
  }
  if (operations == 4) {
    products.forEach((pr) => {
      if (pr.name)
        console.log(
          pr.name +
            ", " +
            pr.price +
            ", " +
            pr.stockQuantity +
            ", " +
            pr.category
        );
    });
  }
  if (operations == 5) {
    let index = prompt("input the index");

    if (index >= products.length || index < 0) {
      console.log("Products don't exist");
    } else {
      console.log(products[index]);
    }
  }
}
