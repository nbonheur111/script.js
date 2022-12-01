/* A. Q + A


1. How do we assign a value to a variable? let or const, name of a variable followed by equal sign and the value
let num = 1;

2. How do we change the value of a variable?
name of the variable = new value : num = 2;

3. How do we assign an existing variable to a new variable?
let or const keyword, name of the new variable followed by equal sign and the  old variable
let anotherNum = num;

4. Remind me, what are declare, assign, and define?
declare:  a variable is creating a variable
assign: using equal sign to assing a value to a variable
define: 

5. pseudocodes: Plain english, detailed step by step in the process of creating a programm.
pseudocodes cannot be run by a compiler.

6. 50%
*/

// B Strings

let firstVariable = "Hello World";
firstVariable = 69;

let secondVariable = firstVariable;
secondVariable = "not today";

console.log(firstVariable); // 69

let yourName = "Bonheur";
return "Hello, my name is "+yourName;

//C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a != b);
console.log(c != d);
console.log('Name' == 'Name');
//FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false);
console.log(e == 'Kevin');
console.log(a + b == c);
console.log(a * a == d);
console.log(48 == '48');

//D. The farm
let animal = 'cow';
let isCow = (animal == 'cow')? "mooooo": "Hey! You are not a cow";

