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
let greetings = "Hello, my name is "+yourName;
console.log(greetings);

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
/*
A. Talk about it:

1. elements
2. yes, using index
3. a list of students in class

*/

//B Easy Does It

let quotes = [" Got your back ",
            " if you can dream it, you can do it",
             "Do the best you can ",];

//C. Accessing elements
const randomThings = [1, 10, "Hello", true];
//1. access first element
randomThings[0];
console.log(randomThings[0]);

//2. change value of "Hello" to "World"
randomThings[2]= "World";
// ccheck to make sure it updated
console.log(randomThings);

//D Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//1. access the third element
ourClass[2];
console.log(ourClass[2])// check if it is working

//2. change "github" to " Octocat"
ourClass[4] = "Octocat";

// 3. add a new element "Coud City"
ourClass.push("Cloud City" );

console.log(ourClass);

//E Mix it Up
const myArray = [5, 10, 500, 20];
//1. add "Aegon" at the end of the array and another string
myArray.push("Aegon", "water");

//2 remove 5 from the array
myArray.shift();

//3. Add the string "Bob Marley"to the beginning of the array
myArray.unshift("Bob Marley");

//Remove the string of your choice from the end of the array.
myArray.pop();

// 5. Reverse this array 

// myArray.reverse();
myArray.reverse()
//The method returns the reference to the same array where elements are turned towards
// the opposite direction to the original array. Mutating means changing value without creating
// an entirely new value. Arrays and objects are mutable.

// F Biggie Smalls

let number = 80;
if(number < 100){
    console.log("little number");
}else{
    console.log("big number");
}

// G. Monkey in the Middle
const MonkeyInTheMiddle = (number) => {
    if(number < 10){
        console.log("little number");
    }else if(number > 10){
        console.log("big number")
    }else{
        console.log("monkey");
    }
}
MonkeyInTheMiddle(10);

//H. What's in your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  // 1. log the following sentence.
  console.log(`Krstyn is rocking that `+kristynsCloset[2]+`today`);

  //2. add raybans and then yellow knit hat to her collection
  kristynsCloset.splice(6,0,"raybans");
  console.log(kristynsCloset);

  //3. modify the hat to stained knit hat
  kristynsCloset[5] = "stained knit hat"
  console.log(kristynsCloset);

// 4.  access Thom's shirt first element
thomsCloset[0][0];

//5. access pants
thomsCloset[1][2];

//6. access thom's accessory array
thomsCloset[2][0];

// 7. what Thom is wearing
console.log(`Thom is looking fierce in  ${thomsCloset[0][1]}, ${thomsCloset[1][0]} 
and ${thomsCloset[2][2]}`);
//8. modify name of his PJ pants to Footie Pajamas

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);



//IV. FUNCTIONS

//A. printGreeting

const printGreeting = (name) =>{
    return `Hello there, ${name}`;

}
printGreeting("Bonheur");
console.log(printGreeting("Bonheur"));

// B. printCool

const printCool = (name) =>{
    return console.log(`${name} is cool`);
}
printCool("Captain Reynolds");

// c. a function that takes a single number and prints the volume of it's cube
const calculateCube = (number) => {
    return console.log(number * number * number);
}
calculateCube(2);

// D. a function that takes a letter and returns whether it is a vowel or not

const isVowel = (vowel)=> {
    if (vowel.length == 1){
        return (['a', 'e', 'i', 'o', 'u'].includes(vowel.toLowerCase()));
    }
  return false;
}
console.log(isVowel("u"));

// E. getTwoLengths .. a function with two string parameters, returning an array of 
// their corresponiding length

const getTwoLengths = (firstString, SecondString) => {
    return [firstString.length, SecondString.length];
}
 let newArr = getTwoLengths("Hank", "Hippopopalous");
 console.log(newArr);


 // F. getMultipleLengths
 // a function that an array of strings and return an array with lenghts of the strings

 const getMultipleLengths = (array) => {
    let stringLengths = [];
   
    array.forEach(element => {
        stringLengths.push(element.length);   
    });
    return stringLengths
 }
 console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

 // maxOfThree; a function that takes 3 numbers as arguments and return the largest

//  const maxOfThree = (firstNumber, secondNumber, thirdNumber) => {
//     return Math.max(firstNumber,secondNumber,thirdNumber);
//  }
//  console.log(maxOfThree(6, 9, 1));

const maxOfThree = (firstNumber, secondNumber, thirdNumber) => {
    let userArg = [firstNumber,secondNumber,thirdNumber];
    let max = userArg[0];

    for(let i = 1; i < userArg.length; i++){
        if(userArg[i] > max){
            max = userArg[i];
        }
        return max;
    }

}
console.log(maxOfThree(6, 9, 1));


//H. printLongestWord: a method that prints the longest word from a strings of arguments

const printLongestWord = (strs) => {
    let longest = '';
    for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > longest.length)
    longest = strs[i];
    }
    return longest;
    }

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


//Objects

//A. Make a user object

const user = {
    name: "Erik",
    email: "erik@gmail.com",
    age:21,
    purchased: [] 

};

// B. Update the user
//1. update the email
user.email = "erik.new@gmail.com";
console.log(user);

//2. increment the age of the user. It is their birthday

 user.age ++;
 console.log(user.age)

 //C. Adding keys and values
 //add users location data
 user.location = "N 32 55, W 100 16";


 // D. Shopaholic!
 //1-3. add a purchased items to the array

 user.purchased.push("carbohydrates");
 user.purchased.push("peace of mind");
 user.purchased.push("Merino jodhpurs");

 //4. log the "merino jodhpurs"
 console.log(user.purchased[2]);

 // E. Object - within - object
//1. write a friend object with age, name, location

user.friend = {
    name:"Liz",
    age:20,
    location:"N 33 59, 97 16",
    purchased: []
}

// 2. console log a friend's name

console.log(user.friend.name);

//3. console log a friend's location
console.log(user.friend.location);

//4. change the friend's age to 55
user.friend.age = 55;

//5-6 add purchased item to your friend's purchase array
user.friend.purchased.push("The One Ring", "A latte");

// 7. log " a latte" from a friends's purchased array
console.log(user.friend.purchased[1]);

// F. Loops
//1. for loop to iterate over purchased

user.purchased.forEach(item => {
    console.log(item);   
});

// iterate over friend's purchased items
user.friend.purchased.forEach(item => {
    console.log(item);   
});









 

































