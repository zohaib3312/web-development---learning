// leanring javascript


// console.log("Hey there! welcome to the world of javascript. This is a simple script to demonstrate how to use JavaScript in your web projects.");

// learning about variables : 

// var a = 10;
// var b = 20;
// var c = "zohaib";

// console.log(a+b+c);
// console.log(typeof a, typeof b, typeof c);




// Exercise 1 — Create a variable for your name, age, and city and print all three using console.log.

// let name = "zohaib";
// let age = 25;
// let city = "lahore";

// console.log(name,age,city);



// Exercise 2 — Create a const for your country name and try to change it. See what error you get in the console.

// const country = "Pakistan";
// country= "lahore";
// console.log(country);


// Exercise 3 — Create a let variable called score with value 10, then change it to 50, then print it.

// let score = 10;
// score = 50;
// console.log(score); 


// Exercise 1 — Create a let variable inside a block and try to access it outside. See the error.



// {
// let blockvariable = "I am inside a block";

// }


// console.log(blockvariable); // This will throw an error because blockvariable is not defined outside the block.

// Exercise 2 — Do the same with var and see that it works outside. Notice the difference.

// {
//     var blockvariable = "I am inside a block";
// }


// console.log(blockvariable); // This will work because var is function-scoped, not block-scoped.






// Create variables for your name, age, city, and whether you are a student. Use let or const correctly for each one.


// const name = "zohaib";
// let age = 25;
// let city = "karachi";

// create two number variables and print their sum, difference, and multiplication. Use console.log() to print. 


// let a = 50;
// let b = 20;

// console.log("sum" , a+b);//sum
// console.log("multiplication" , a*b); // multiplication
// console.log("difference" ,  a-b); // difference



// // Create a variable with no value assigned. Print it — what do you see? Now assign a value and print again.
// let a;
// console.log(a); //undefined 
// a = 25;
// console.log(a); // get 25 value



//  exercise 4 — store your first and last name in two separate variables, combine them into one full name and print it using template literals 

// let Firstname = "zohaib";
// let Lastname = "Akhtar"

// console.log(`${Firstname} ${Lastname}`) // zohiab Akhtar


//  exercise 5 — store any sentence in a variable and print its length.

// let sentence = "he is driving a car";
// console.log(sentence.length); // 19 length




// create an object for a phone with these fields: brand, model, price, isAvailable. Print each field using dot notation. 

// let phone = {
// brand: "samsung",
// model: "3rd generation",
// price: 25000,
// isAvailable: true
// };

// console.log(phone.brand);
// console.log(phone.model);
// console.log(phone.price);
// console.log(phone.isAvailable);

// exercise 7 — take your phone object, change the price and add a new field called color. Then print the full object using console.log(phone)

// let phone = {
// brand: "samsung",
// model: "3rd generation",
// price: 25000,
// isAvailable: true
// };

//  phone.price = 30000;
// phone.color= "black"
// console.log(phone)


//  exercise 8 — create an object for yourself with at least 5 fields:

// let userInfo = {
// name : "zohaib",
// age : 25,
// Email:"za809475@gmail.com",
// phoneNo: "03156113665",
// is18yearold: true
// };

// Now try exercise 9 — why does this cause an error? Fix it:

// let country = "Pakistan";
// country = "India";
// console.log(country)



//  exercise 10 — the last one!
// Write one example of null and one example of undefined with a comment explaining why you used each one

//null is intiontilly leave the varialbe empthy 
// undefined mean varialbe is declared but not assign any value or forget to assign the value

// let car; //undefined 
// let name = null // intionlly leave empthy 

// Create two variables a = 15 and b = 4. Print the result of all arithmetic operators including remainder %.

// let a = 15;
// let b = 4;
// console.log("Additon" , a+b); // 19
// console.log("subtraction" ,a-b); // 11
// console.log("multiplication" ,a*b); // 60
// console.log("Division" ,a/b); // 3.75
// console.log("Reminder" ,a % b); // 3


// exercise 2 — create a variable score = 10, use += to add 5 to it and print the result 

// let score = 10; // 10 
// score += 5; // score = score + 5;
// console.log(score) // 15 



// exercise 3 — check if "5" === 5 and "5" == 5, print both results and tell me what you notice

// let a = "5";
// let b = 5;

//  console.log(a === b); // false check value with type 
//  console.log(a == b); // true check only value
 

// exercise 4 — create a variable temperature, if above 30 print "hot", between 20 and 30 print "normal", below 20 print "cold" 

// let temperature = 25;

// if (temperature > 30) { // false
//     console.log("hot"); 
// }else if(temperature >= 20 && temperature <=30){ // true
// console.log("normal"); 
// }else{
//     console.log("cold")
// }

// // output Normal  


// Exercise 5 — grading system:
// Create a variable marks and write a grading system:
// 90 and above  →  print "A grade"
// 80 to 89      →  print "B grade"
// 70 to 79      →  print "C grade"
// 60 to 69      →  print "D grade"
// below 60      →  print "Fail"

// let marks = 66;

// if (marks >= 90) {
//     console.log("A grade");
// }else if(marks >= 80){
// console.log("B grade")
// }else if(marks >= 70 ){
// console.log("C grade")
// }else if(marks >= 60 ){
// console.log("D grade")
// }else{
// console.log("Fail")
// }

// output  D

// using ternory operator 
// above 30   →  print "hot"
// 30 or below →  print "cold"


// let a = 30;
// console.log(a >= 30 ? "hot": "cold"); // hot 


// Exercise 7 — use ternary to print "Welcome back!" or "Please login":

// let islogin = true;
// console.log(islogin ? "Welcome back!":"please Login");



// exercise 8 — use && to check if someone can enter a club:
// // must be over 18 AND have ID to enter
// // print "Welcome in!" or "Sorry you cannot enter"

// let age = 20;
// const hasID = true;
// if (age >= 18 && hasID ) {
//     console.log("Welcome in!");
// }else{
//     console.log("sorry you cannot enter");
// }

// member OR has invite → can enter
// print "Welcome to the party!" or "Sorry you cannot enter"

// let isMember = false;
// let hasInvite = true;

// if (isMember || hasInvite ) {
//     console.log("Welcome to the party!");
// }else{
//     console.log("Sorry you cannot enter")
// }




















