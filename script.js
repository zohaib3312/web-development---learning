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

// let count = document.querySelector("#count");
// let increase = document.querySelector("#increase");
// let decreases = document.querySelector("#decrease");
// let reset = document.querySelector("#reset");
// let countNumber = 0;

// increase funciton 
// increase.addEventListener("click", () => {
//     countNumber++
//     count.textContent = countNumber;
// });

// decrease funciton
// decreases.addEventListener("click", () => {
//     countNumber--
//     count.textContent = countNumber;
// });
// reset funciton
// reset.addEventListener("click", () => {
//     countNumber = 0;
//     count.textContent = countNumber;
// });


// build the background color changer: When button is clicked — page background changes to a random color every time. Think about:



// let pageColor = document.querySelector("#pagecolor");
// let bodyelement = document.querySelector("body")

// const randomColor = () => {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;

// }
// pageColor.addEventListener("click", () => {
//     let output = randomColor();
//     bodyelement.style.backgroundColor = output;
// })

// targeting html element 
// takeing value of input and print in console
// show that value on ui 
// add css delete btn with dodo 
// dlelete all btn will delete all 



// targeting input elememet and show on screen  
// let todo = document.querySelector("#todo");
// let add = document.querySelector("#btn-add");
// let dele_btn = document.querySelector("#deleteall");
// let showTodolist = document.querySelector("#todos");
// let todolist = [];

// add.addEventListener("click", () => {
//     if (todo.value === "") {
//         alert("Please Don't add empty todos")
//         return;
//     }
//     todolist.push(todo.value);
//     showTodolist.innerHTML = todolist.map((item, index) => `<p>${item} <button  class="dynamic-btn" onclick="deleteTodo(${index})">Delete</button></p>`).join("")

//     todo.value = "";

// });

// delete all todos

// dele_btn.addEventListener("click", () => {
//     todolist = [];
//     showTodolist.innerHTML = "";
// })


// delete one by one todos

// const deleteTodo = (index) => {
//     todolist.splice(index, 1);
//     showTodolist.innerHTML = todolist.map((item, index) => `<p>${item} <button class="dynamic-btn"  onclick="deleteTodo(${index})">Delete</button></p>`).join("")
// }



// Exercise 1 — Target container and print all its children.

// let parent = document.querySelector("#container").children;
// console.log(parent);


//  Exercise 2 — Target container and print first and last child.

// let parent = document.querySelector("#container").firstElementChild
// let parent2 = document.querySelector("#container").lastElementChild
// console.log(parent);
// console.log(parent2);



// Exercise 3 — target heading and print its next sibling!

// let heading = document.querySelector("#heading").nextElementSibling
// console.log(heading);


// Exercise 4 — target span and print its parent element! 

// let span_Parent = document.querySelector("span").parentElement
// console.log(span_Parent);


// Exercise 5 — target para and change its next sibling text to "I am span — changed!"

// let para = document.querySelector("#para").nextElementSibling;
// para.textContent="I am span"; 
// console.log(para)




// let boxes = document.querySelectorAll(".box");

// button logic 

// const randomColorGenerator = () =>{
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;

// }
// const applyColor =()=>{
// boxes.forEach((value)=>{
// value.style.backgroundColor=randomColorGenerator();
// })    
// }


// applyColor();

// page load logic

// const randomColorGenerator = () =>{
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;

// }

// let allValues = boxes.forEach((value)=>{
// value.style.backgroundColor=randomColorGenerator();
// })



// Exercise 1 — Create a new h2 element with text "Hello DOM" and append it to body.

// let heading2 = document.createElement("h2");
// heading2.innerText="Hello Dom";
// document.body.append(heading2);
//  console.log(heading2)



// Now try Exercise 2 — create a new p element and prepend it to a container div!

// let para = document.createElement("p");
// let container = document.querySelector(".container");
//  container.prepend(para);
// console.log(container);


// Exercise 3 — create a button that adds a new list item to a ul every time clicked!

// let menu = document.querySelector("#menu");
// let btn = document.createElement("button");
// btn.innerText = "Click me";
// document.body.append(btn);
// btn.addEventListener("click", ()=>{
// let items = document.createElement("li");
// items.innerText = "Hello World"
// menu.appendChild(items);
// })

// console.log(btn)


// Exercise 4 — create a button that removes the last item from the ul list every time clicked.
// You already have the ul targeted. Think about:

// How to get the last child of ul
// How to remove it


// let menu2 = document.querySelector("#menu");
// let btn2 = document.createElement("button");
// btn2.innerText = "remove me";
// document.body.append(btn2);
// btn2.addEventListener("click", ()=>{
//  menu2.lastElementChild.remove();
// })


//  Exercise 5 — toggle a class "active" on a div when clicked! 



// let container = document.querySelector(".box");
// container.addEventListener("click", ()=>{
// container.classList.toggle("active");
// })


// One button           →  toggles dark/light mode
// Entire page changes  →  background, text color
// Button text changes  →  "Dark Mode" / "Light Mode"

// let btn = document.querySelector(".btn");
// let heading = document.querySelector(".changing")
// btn.addEventListener("click", ()=>{
// btn.classList.toggle("active");
// document.body.classList.toggle("dark")
// if (heading.textContent === "Dark Mode Toggle") {
//   heading.textContent = "Light Mode Toggle";
// } else {
//   heading.textContent = "Dark Mode Toggle";
// }
// if (btn.textContent === "Light Mode ") {
//   btn.textContent = "Dark Mode ";
// } else {
//   btn.textContent = "Light Mode ";
// }

// })


// array of obj

// let cards = [];
// let container = document.querySelector(".container")
// const addCard = (imageurl, title, channelname, views, timeposted,timeduration) => {
//   let carddata = {
//     imageurl: imageurl,
//     title: title,
//     channelname: channelname,
//     views: views,
//     timeposted: timeposted,
//     timeduration: timeduration
//   };
//   cards.push(carddata);
// }

// addCard("https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ", "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "code with harry", 189, 5, "58:32")
// addCard("https://i.ytimg.com/vi/Lq7XRGyiYlo/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAezqS4pRjMn7A5p1TF_4UIMIp-SA", "Arcade x Mann Mera (Mashup) Full Version | Gravero", "Gravero", 
// 53724570, 5, "0:57")
// addCard("https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ", "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "code with harry", 189, 5, "66:32")
// addCard("https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ", "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "code with harry", 189, 5, "40:32")
// addCard("https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ", "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "code with harry", 189, 5, "40:32")
// addCard("https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ", "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "code with harry", 189, 5, "40:32")
// addCard("https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ", "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "code with harry", 189, 5, "40:32")
// addCard("https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ", "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "code with harry", 189, 5, "40:32")

// container.innerHTML = cards.map((item) =>
//   `<div class="card">
//   <div class="thubnail">
//   <img src="${item.imageurl}">
//   <span class="timeduration">${item.timeduration}</span>
//   </div>

//   <div class="card-dec"> 
//   <p>${item.title}</p>
//   <p>${item.channelname}. ${item.views} views .${item.timeposted} months ago </p>

//   </div>
// </div>`
// ).join("")


// Exercise 1 — Create a button that shows an alert after 3 seconds when clicked using setTimeout.

// let button = document.querySelector("#btn");
// button.addEventListener("click", ()=>{

//   setTimeout(() => {
//   alert("i was clicked after 3sec")
// },3000);
// })


// Exercise 2 — Create a counter that increases by 1 every second using setInterval. Add a stop button that uses clearInterval.

// let stopBtn = document.querySelector("#btn-stop");
// let container = document.querySelector(".counter")
// let counter = 0;
//  let timer = setInterval(() => {
//     counter += 1
//     container.textContent= counter;

// },1000);

//  stopBtn.addEventListener("click", ()=>{
//   clearInterval(timer);
//   container.textContent=0;
// })


// Exercise 3 — Create two nested divs. Add click event to both. Click inner div and see bubbling. Then stop bubbling using stopPropagation.

// let outerDiv = document.querySelector(".outer");
// let innerDiv = document.querySelector(".inner");

// outerDiv.addEventListener("click" ,(e)=>{
//     alert("Outer Div Was Clicked");


// })
// innerDiv.addEventListener("click" ,(e)=>{
//     alert("inner Div Was Clicked");
//     e.stopPropagation();
// })



// build a digital clock that updates every second using setInterval.

// setInterval(() => {
//     let date = new Date();
//     let hours = date.getHours()
//     let minuts = date.getMinutes()
//     let seconds = date.getSeconds()
//     let period = "";
//     if (hours >= 12) {
//         period = "PM";
//     } else {
//         period = "AM";
//     }

//     if (hours > 12) {
//         hours -= 12
//     }


//     if (hours === 0)
//         hours = 12;


//     hours = hours < 10 ? "0" + hours : hours
//     minuts = minuts < 10 ? "0" + minuts : minuts
//     seconds = seconds < 10 ? "0" + seconds : seconds

//     document.querySelector(".clock").textContent = `${hours}:${minuts}:${seconds}: ${period}`;
// }, 1000);

// function orderPizza(callback) {
//   console.log("Making pizza...");

//   setTimeout(() => {
//     console.log("Pizza is ready!");
//     callback(); // call you back now
//   }, 3000);
// }

// function eatPizza() {
//   console.log("Eating pizza!");
// }

// orderPizza(eatPizza);

// Question 1:

// What will be the output?

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");

//output 

//start 
//end 
//Timeout


// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
// });

// console.log("C");


// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

// output 

// start 
// end  
// timeout 
// promise 



// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3");
// }).then(() => {
//   console.log("4");
// });

// console.log("5");

//output
// 1
// 5
// 3
// 4
// 2 

// Task:

// Create a function that simulates an API call using Promise

//  Requirements:

// Function name: getData
// After 2 seconds → return "Data received"
// Use setTimeout
// Use Promise
// Then print result using .then()


// let p = new Promise((resolve, reject) => {
// setTimeout(()=>{
//  resolve("Hello after 1 second");
// },1000);

//  });

// p.then((data)=>{
// console.log(data)
// });

// Task 1 (VERY EASY)

// 👉 Create a function:

// Name: getPosts
// Fetch from:
// https://jsonplaceholder.typicode.com/posts
// Print data



// const getPost = async () => {
//   let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let data = await res.json();
//   data.forEach(element => {
//     console.log(element.title)
//   });
// };
// getPost();


// const getUsers = async () => {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();
//   let users = document.querySelector("#users");
//   data.forEach(user => {
//     let li = document.createElement("li");
//     li.textContent = `${user.name} - ${user.email}` 
//   users.appendChild(li);
//   });
// };
// getUsers();


// let button = document.querySelector(".btn");
// let screen = document.querySelector(".content");
// let container = document.querySelector(".hacking_simiulator");

// let cursor = document.querySelector(".cursor"); // IMPORTANT

// let hacking = [
//     "Initializing hacking",
//     "Reading your files detected",
//     "Sending all passwords and personal files to server",
//     "Cleaning up"
// ];

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function showBlinking(text) {
//     let line = document.createElement("div");
//     screen.appendChild(line);

//     for (let i = 1; i <= 3; i++) {
//         line.innerHTML = text + ".".repeat(i);
//         await delay(500);
//     }
// }

// button.addEventListener("click", async () => {

//     screen.innerHTML = ""; // only text clears

//     for (let i = 0; i < hacking.length; i++) {
//         await showBlinking(`root@hack:~$ ${hacking[i]}`);
//         await delay(2000);

//         container.appendChild(cursor); // ALWAYS keep cursor at bottom
//     }

// });

// let container = document.querySelector(".hacking_simiulator");
// let screen = document.querySelector(".content");
// let btn = document.querySelector(".btn");
// let cursor = document.querySelector(".cursor")

// let hackingText = [
//     "Initializing hacking",
//     "Reading your files detected",
//     "Sending all passwords and personal files to server",
//     "Cleaning up"

// ];


// function dely(ms) {
//     return new Promise((res) => setTimeout(res, ms))
// }


// async function blinkingeffect(text) {

//     let line = document.createElement("div");
//     screen.appendChild(line);
//     for (let i = 0; i <= 3; i++) {

//         line.innerHTML = text + ".".repeat(i)
//         await dely(500)
//     }


// }

// btn.addEventListener("click", async () => {

//     for (let i = 0; i < hackingText.length; i++) {



//         await blinkingeffect(`root@hack:~$ ${hackingText[i]}`);

//         await dely(2000)
//         container.appendChild(cursor); // ALWAYS keep cursor at bottom
//     }

// })

// let a = prompt("Enter your 1st number");
// let b = prompt("Enter your 2st number");
// if (isNaN(a) || isNaN(b)) {
//     throw SyntaxError("Sorry this not allowed")

// }

// let c = parseInt(a) + parseInt(b);


// console.log(c)

// try {
//     console.log(c * x);
    
// } catch (error) {
//     console.log("error code")
// }


// What you need to build:
// A function that takes two numbers and divides them. But if someone passes zero as the second number, you throw a custom error.



// let divide = (numw1 , num2) =>{
// if (num2 === 0) {
//     throw new Error("This is not allowed");
// }

// return numw1 / num2;
// }


// try {
// let result = divide(25,0);    
// console.log(result)    
// } catch (error) {
//     console.log(error.message)
// }



let calcualtion = (num1 , num2) =>{
if (num2 === 0) {
    throw new Error("This is not allowed");
}

return num1 * num2;
}


try {
let result = calcualtion(25,0);    
console.log(result)    
} catch (error) {
    console.log(error.message)
}finally{
    console.log("calculation attempted")
}