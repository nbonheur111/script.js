/* A. Q + A


1. How do we assign a value to a variable? let or const, name of a variable followed by equal sign and the value
let i = 1;

2. How do we change the value of a variable?
name of the variable = new value : i = 2;

3. How do we assign an existing variable to a new variable?
let or const keyword, name of the new variable followed by equal sign and the  old variable
let anotheri = num;

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
console.log( isCow);

//E. Driver's Ed

const isEligible = (age) =>{
    if(age >= 16){
        return "Here are the keys";
    }else{
        return "Sorry, you are too young";
    }
}
console.log(isEligible(30));


// II Loops
//1.  print 0 to 10 inclussive;
for(let i = 0; i <= 10; i++){
    console.log(i);
}

//2. print 10 to 400 inclusive.
for(let i = 10; i <= 400; i++){
    console.log(i);
}

//3. print every 3rd number starting with 12 up to 4000

for(let i = 12; i <= 4000; i+=3){
    console.log(i);
}

//B Get even
//1. print 1 - 100
for(let i =1; i <= 100; i++){
    console.log(i);
}
// mark an even number
for(let i =1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(`${i} is an even number`);
    }else {
        console.log(i);
    }
}

// Give me Five
//1 && 2.if a number is divisible by 5 print out I found a number! or div by 3, Three is a crowd


for(let i =1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`I found a ${i}. Three is a crowd`)
        console.log(`I found a ${i}. High five!`);
    }else if(i % 3 == 0){
        console.log(`I found a ${i}. Three is a crowd`);
    }else if( i % 5 == 0){
        console.log(`I found a ${i}. High five!`);
    }
}

//D Savings account
//1. save sum of numbers 1- 55

let bank_account = 0;
for(let i = 1; i <= 10; i++){
    bank_account += i;
}
console.log(bank_account)
//2 You got a bonus, your paychecck is doubled each week. get sum of 1 - 100 multiplied by 2

let sum = 0;
for(let i =0; i <= 100; i++){
    sum += i;
}
let doubledSum = sum * 2;
console.log(doubledSum);

// III Arrays & Control flow.







