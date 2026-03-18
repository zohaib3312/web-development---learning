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

// Create an object for a student with:
// - name
// - marks
// - age
// - isPassed (boolean)

// Then:
// 1. Print student name using template literal
// 2. Use if else to print their grade (A, B, C, D, Fail)
// 3. Use ternary to print "Passed" or "Failed"
// 4. Use && to check if student is above 18 AND passed
//    → print "Eligible for scholarship" or "Not eligible"


// let student = {
//     name : "zohaib",
//     marks: 60,
//     age: 25,
//     isPassed : true
// }

// console.log(`My name is ${student.name}`);
// if (student.marks >= 90){
//     console.log("A Grade");

// }else if(student.marks >= 80){
//     console.log("B Grade")
// }else if(student.marks >= 70){
//     console.log("C Grade")
// }else if(student.marks >= 60){
//     console.log("D Grade")
// }else{
//     console.log("Fail")
// }
    
// console.log(student.isPassed ? "Passed":"Failed");

// if (student.age >= 18 && student.isPassed) {
//     console.log("Eligible for scholarship");
// }else{
//     console.log("Not eligible");
// }


// exercise 2 — print only even numbers from 1 to 20 using for loop.
// for (let number = 1; number<= 20; number++) {
//     if (number % 2 === 0) {
//      console.log(number)
//  };
// }  



// exercise 3 — print numbers from 10 to 1 backwards.



// for (let i = 10; i >= 1; i--) {
//  console.log(i);
   
// }


// exercise 4 — print numbers 1 to 5 using while loop

// let i = 1;

// while (i <= 5) {
// console.log(i)
//    i++
// }


// score counter using while loop:

// let score = 0;

// while (score < 50 ) {
//    score += 10;
//    console.log(score)
// }



//  exercise 6 — create an array of 5 city names, print each one using for of:

// let country = ["Pakistan", "India", "England", "Australia", "Canada"];

// for (let i  of country) {
//    console.log(i)
// }



// Exercise 7 — create an array of numbers, print each number multiplied by 2:

// let numbers = [5,2,6,9,4];

// for (let number of numbers) {
//    console.log(number*2)
// }




// Exercise 8 — create a student object with 4 fields, print every key and value using for in:

// let students  = {
//    name : "zohaib",
//    age : 25,
//    education: "Bs Computer science",
//    rollNo: "5664646464" 
// }


// for (let key in students) {
    
//    console.log(key, students[key])
    
     
// }


// Create an array of marks for 5 students, use for loop to print pass or fail for each student:


// let marks = [30,55,20,40,90];
// for (let i = 0; i < 5; i++) {
// if (marks[i] >= 50) {
//    console.log("Pass")
// }else{
//    console.log("Fail")
// }     
// }


// console.log("hello")

// exercise 1 — write a function called greet that takes a name and prints "Hello Zohaib!" using template literal! 
// function greet(name) {
//     console.log(`Hello ${name}`)
// }
// greet("zohaib");



// exercise 2 — write a function called add that takes two numbers and returns their sum. Print the result:

// function add(a , b){
//     return a+b;
// }

// let result = add(5,10);

// console.log(result);



//  exercise 3 — write a function called isEven that takes a number and returns true if even, false if odd:


// function isEven(number) {
//      return number % 2 === 0;
// }

// let result1 = isEven(2);
// console.log(result1);
// let result2 = isEven(5);
// console.log(result2);

// Exercise 4 — write a function called getGrade that takes marks and returns the grade:

// function getGrade(number) {
//     if (number >=90) {
//         return "A Grade"
//     }else if(number >= 80){
//         return "B Grade"
//     }else if(number >= 70){
//         return "C Grade"
//     }else if(number >= 60){
//         return "D Grade"
//     }else{
//         return "Fail"
//     }
// }

// let result1 = getGrade(55);
// console.log(result1)

// let result2 = getGrade(60);
// console.log(result2)

// Now try exercise 5 — write a function called canVote that takes age and returns "Can vote" or "Cannot vote":

// function canVote(age) {
//     if (age >= 18) {
//         return "Can Vote"
//     }else{
//         return "Cannot Vote"
//     }
// }

// let result1 = canVote(25);
// console.log(result1)
// let result2 = canVote(12);
// console.log(result2)



//  exercise 6 — rewrite your add function as an arrow function:

// const add = (a , b) => a + b; 
// let result1 = add(5 , 5);
// let result2 = add(8 , 5);
// console.log(result2)


// Exercise 7 — rewrite canVote as an arrow function:

// const canVote = (age) =>{
//     if (age >= 18) {
//         return "Can Vote"
//     }else{
//         return "Cannot Vote"
//     }
// }

// let result = canVote(25);
// let result2 = canVote(12)
// console.log(result2)


// const calculator = (a,b,operators) =>{
//      if (operators === "+") {
//         return a + b;
//      }else if( operators === "-"){
//         return a - b;
    
//      }else if( operators === "*"){
//         return a * b;
    
//      }else if( operators === "/"){
//         if (b === 0) {
//             return "Cannot divide by zero";
//         }
    
//         return a / b;
//      }
// }

// let result = calculator(5,6,"+");
// let result1 = calculator(10,6,"-");
// let result2 = calculator(5,20,"/");
// let result3 = calculator(5,0,"/");
// let result4 = calculator(5,6,"*");
// console.log(result)
// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)

// Create a string with your full name. Print it in uppercase and lowercase.
// let userName = "zohaib akhtar";
 
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());

// Exercise 2 — create a string with extra spaces, remove them and print it:

// let word = " pakistan  "
// console.log(word.trim());


// Exercise 3 Create a variable with someone's email. Check if it is a Gmail account using includes(). Print "Valid Gmail" or "Not Gmail".
//  


// let userEmail = "za809475@gmail.com";
//  let verify= userEmail.includes("@gmail.com");
//  if (verify) {
//    console.log("Valid Gmail")
//  }else{
//    console.log("Not Gmail")
//  }




// Create a full name "zohaib akhtar". Extract first name and last name separately using slice() and indexOf().

// let myName = "Akhtar Ali";
// let spacepostion = myName.indexOf(" ");
// let firstName = myName.slice(0,spacepostion);
// let lastName = myName.slice(spacepostion + 1);
//   console.log(firstName);
//   console.log(lastName);

// let myName1 = "wahab hussain";
// let spacepostion1 = myName1.indexOf(" ");
// let firstName1 = myName1.slice(0,spacepostion1);
// let lastName1 = myName1.slice(spacepostion1 + 1);
//   console.log(firstName1);
//   console.log(lastName1);



// exercise 5 — create a string "I love Python and Python is great". Replace both occurrences of Python with JavaScript.
// let text = "I love Python and Python is great";
//  console.log(text.replaceAll("Python","Javascript"));



// exercise 6** — create a string of 5 Pakistani cities separated by commas, split into array, loop through it and print each city in uppercase:

// let cities = "karachi,lahore,islamabad,peshawar,quetta";
// let city = cities.split(",");
// for (let i = 0; i <  5; i++) {
    
//    console.log(city[i].toUpperCase())
   
// }



// Build a function called validateEmail that:

// Takes an email as parameter
// Checks if it contains "@"
// Checks if it ends with ".com"
// Returns "Valid email" or "Invalid email"

// function validateEmail(email) {
   
//    if (email.includes("@") && email.endsWith(".com")) {
//       return "valid email"
//    }else{
//       return "Invalid email"
//    }
// }

// let result = validateEmail("za809475@gmail.com");
// console.log(result)




// let first,second;
// let rand1 = Math.floor(Math.random()*3)
// let rand2 = Math.floor(Math.random()*3)

// if (rand1 === 0) {
//    first = "Tech";
// }else if(rand1 === 1){
//    first = "Smart";
// }else{
//    first = "Digital"
// }

// if (rand2 === 0) {
//    second = "Hub";
// }else if(rand2 === 1){
//    second = "Store";
// }else{
//    second = "Zone"
// }

// console.log(`${first}${second}`);


// let arr = [1,2,3,4,5];
// console.log(arr)
// arr[1] = "zohaib"
// console.log(arr)
// let arr2 = "karachi";
// arr2[1] = "w";
// console.log(arr2);


// Exercise 1 — Create an array of 5 fruits:

// Print the first item
// Print the last item
// Print the array length



// let fruits = ["mango", "apple", "banana", "grape", "orange"];
// console.log(fruits[0]);
// console.log(fruits[fruits.length-1]);
// console.log(fruits[4]);
// console.log(fruits.length)



//  exercise 2 — create array of 3 cities, then:

// Add city at end
// Add city at beginning
// Remove one from end
// Remove one from beginning
// Print array after each step

// let city = ["karachi","lahore","multan"];
// city.push("islamaband");
// console.log(city);
// city.unshift("peshawar");
// console.log(city);
// city.pop();
// console.log(city);
// city.shift();
// console.log(city);

// Now exercise 3 — harder this time!
// Create an array of 7 numbers. Use slice to:

// Copy first 3 numbers into new array
// Copy last 3 numbers into new array
// Copy middle 3 numbers into new array

// Print all three new arrays. Original array should remain unchanged — prove it by printing it at the end. 


// let numbers = [4,5,6,7,8,9,12];
// let one = numbers.slice(0, 3);
// let two = numbers.slice(4, 7);
// let three = numbers.slice(2, 5);
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(numbers)



// Now exercise 4 — harder!
// Create an array of 6 names. Use splice to:

// Remove 2 names from the middle
// Then add 2 new names at position 1
// Print array after each operation
// What happened to original array?


// let names = ["zohaib","wahab","waleed hussain","saad haris","hafiz","suzain"];

// names.splice(2 , 3);
// console.log(names)
// names.splice(1,0 ,"shoaib","Ali");
// console.log(names)

//  exercise 5 — the problem:
// Create an array of 5 students, each with a name and marks. Print each student's name and whether they passed or failed. Pass is 50 or above.


// "You are building a school system. You have 5 students with their names and marks. Your job is to display each student's result showing their name and whether they passed or failed. Pass mark is 50."

//  arry of obj obj obj 
// 2) loops arry 
// 3) condition pas fail 


// let students = [
// {name : "zohaib", marks : 50},
// {name : "wahab" , marks : 60},
// {name :"hussain", marks:70},
// {name :"saad haris", marks:80},
// {name : "saba", marks:40}
// ]

//  for (const element of students) {
//    if (element.marks >= 50) {
//       console.log(`${element.name} is Pass`);
//    }else{
//       console.log(`${element.name} is Fail`);
//    }

   
//  }
// array.forEach(element => {
//    if (element.marks >= 50) {
//       console.log(`${element.name} is Pass`);
//    }else{
//       console.log(`${element.name} is Fail`);
//    }
// });


// "You have a list of 5 product prices. Create a new list with 20% discount applied to each price."

// let products = [50,60,200,400,500];
// let discountPrice = products.map((price)=> price *0.8)
// console.log(discountPrice);



// "You have a list of numbers. Show only numbers greater than 10."

// let numbers = [5,6,50,80,10,12];
// let greaterNumbers = numbers.filter((number)=> number >10);
// console.log(greaterNumbers);


// "You have a list of 5 product prices. Find the total cost of all products."
// let prices = [100, 250, 75, 400, 150];
// let totalPrice = prices.reduce((sum , num)=> sum + num, 0);
// console.log(totalPrice);



// "You have a list of students with names and marks. Find the first student who scored above 80."

// let students = [
//   {name: "zohaib", marks: 65},
//   {name: "ahmed", marks: 85},
//   {name: "ali", marks: 90},
//   {name: "sara", marks: 72}
// ];


// let highScoreStudent = students.find((num)=> num.marks > 80)
// console.log(highScoreStudent); 


// "You have a list of 5 names. Sort them alphabetically and print."

// let names = ["zohaib","shoaib","wakar hussain","umair"];
// names.sort();
// console.log(names)



// "You are building a student result system. You have 8 students with marks."

// Do all four of these:

// How many students passed? (marks >= 50)
// Find first student who scored above 90
// Create new array with all marks doubled
// Get total sum of all marks



// let students = [
//   {name: "zohaib", marks: 45},
//   {name: "ahmed", marks: 78},
//   {name: "ali", marks: 92},
//   {name: "sara", marks: 33},
//   {name: "usman", marks: 67},
//   {name: "haris", marks: 88},
//   {name: "saba", marks: 23},
//   {name: "waleed", marks: 95}
// ];

//   for (let i = 0; i < students.length; i++) {
//     if (students[i].marks >50) {
//       console.log(`${students[i].name} is pass `)
//     }else{
//       console.log(`${students[i].name} is Fail `)
//     }
   
//   }


// students.forEach(element => {
//    if (element.marks > 50) {
//       console.log(`${element.name} is pass`)
//    }else{
//       console.log(`${element.name} is Fail`)
//    }
// });

// let student = students.find((value)=> value.marks > 90);
// console.log(student.marks)

// let student2 = students.map((value)=> value.marks *2);
// console.log(student2);

// let totalSum = students.reduce((sum, num)=> sum + num.marks, 0);
// console.log(totalSum);


// todo APP 



// Build a Todo List with these 4 actions:
// 1. Add a new todo
// 2. Show all todos
// 3. Delete a todo
// 4. Mark a todo as complete


// Add a new todo
// let toDos = [];

// const addNewTodo = (todo) =>{
//      toDos.push(todo);
// }

// addNewTodo("wake up at 10am tomorrow");
// addNewTodo("Have fun at night");
// addNewTodo("pickup my father");
// addNewTodo(`i want to get 10000Rs`);
// addNewTodo("Have a date at 11:00pm");

// Show Todos

// const showTodos = () =>{
//      for (const element of toDos) {
//         console.log(element)
//      }
// }

// showTodos();

 
// Delete Todos 

// const deleteTodos = (num) =>{
//      toDos.splice(num , 1); 
// }

// deleteTodos(1);
// showTodos();


// mark todo has complete 

// const markTodos = (num) =>{
//      console.log(`${toDos[num]} is Completed`)
// }

// markTodos(1);

// let toDos = [];

// const addNewTodo = (todo) => {
//   let newTodo = {
//     text: todo,
//     isComplete: false
//   };
//   toDos.push(newTodo);
// }

// const showTodos = () => {
//   for (const element of toDos) {
//     console.log(element);
//   }
// }

// const deleteTodo = (num) => {
//   toDos.splice(num, 1);
// }

// const markComplete = (num) => {
//   toDos[num].isComplete = true;
//   console.log(`${toDos[num].text} is completed!`);
// }

// test it
// addNewTodo("wake up at 10am");
// addNewTodo("buy groceries");
// addNewTodo("call mom");
// showTodos();
// deleteTodo(1);
// showTodos();
// markComplete(0);
// showTodos();


// 1. Add a product to cart (name and price)
// 2. Show all products in cart
// 3. Remove a product from cart
// 4. Calculate total price of all products
// Cart: [{name: "shirt", price: 500}, ...]
// Total: 1500



// Add a product to cart

// let cart  = [];

// const addToCard = (name , price) =>{
//   let cardobj = {
//     name : name,
//     price: price
//   }

//   cart.push(cardobj);
//   console.log(cart)
   
// }

// Show all products in cart

// const showProduct = ()=>{
//   cart.forEach(element => {
//     console.log(element)
//   });
// }

 // 3. Remove a product from cart

// const removeProduct = (num)=>{
//   cart.splice(num , 1)
// }


// / 4. Calculate total price of all products 

// const totalPrice = ()=>{
//     let total = cart.reduce((sum, num) => sum + num.price, 0);
//     console.log(`Total ${total}`);
// }


 
// addToCard("bubble", 20);
// addToCard("baloon", 300);
// addToCard("chocolate", 500); 
// addToCard("t shirt", 500);
// addToCard("cap", 200);
// showProduct()
// removeProduct(1)
// showProduct()
// totalPrice()

 
// let result = 1

// for (let i = 1; i <= 5; i++) {
//   result *= i;
  
// }
// console.log(result);



// let factoral = [1,2,3,4,5];

// let result1 = factoral.reduce((num, sum)=>num * sum , 1);

// console.log(result1);

// javascipt dom


// <!-- Target the heading and button
// When button clicked — change heading text -->


// let heading = document.querySelector("#heading");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   heading.textContent = "Text is change";
// })



// Now Try These Small Challenges

// Make button change heading color to red when clicked
// Make button toggle between "Hello World" and "Text is Changed" every click
// Add second button that hides the heading when clicked

// These will teach you style, toggle and display naturally! 


// Make button change heading color to red when clicked

// let btn = document.querySelector("#btn");
// let heading = document.querySelector("#heading");

// btn.addEventListener("click",()=> {
// heading.style.color="red";
// });




// Make button toggle between "Hello World" and "Text is Changed" every click 

// let btn = document.querySelector("#btn");
// let heading = document.querySelector("#heading");

// btn.addEventListener("click",()=> {
//  if (heading.textContent === "Hello World!") {
//   heading.textContent = "Text is Changed"
//  }else{
//   heading.textContent= "Hello World!"
//  }
// });

// Add second button that hides the heading when clicked


// 2 button method

// let btn = document.querySelector("#btn");
// let btn2 = document.querySelector("#btn2");
// let heading = document.querySelector("#heading");

// btn.addEventListener("click",()=> {
// heading.style.display="none";
// });
// btn2.addEventListener("click",()=> {
// heading.style.display="block";
// });

// one button method

// let btn = document.querySelector("#btn");
// let heading = document.querySelector("#heading");

// btn.addEventListener("click",()=> {
//  if (heading.style.display === "none") {
//   heading.style.display = "block";
//  }else{
//   heading.style.display= "none";
//  }
// });

// Combine everything into one small project:

// **Build a simple counter app:**
// ```
// Show a number starting at 0
// Button 1 → increases number by 1
// Button 2 → decreases number by 1
// Button 3 → resets to 0



let count = document.querySelector("#count");
let increase = document.querySelector("#increase");
let decreases = document.querySelector("#decrease");
let reset = document.querySelector("#reset");
let countNumber = 0;

// increase funciton 
increase.addEventListener("click", ()=>{
countNumber++
count.textContent = countNumber;
});

// decrease funciton
decreases.addEventListener("click", ()=>{
countNumber--
count.textContent = countNumber;
});
// reset funciton
reset.addEventListener("click", ()=>{
countNumber= 0;
count.textContent = countNumber;
});