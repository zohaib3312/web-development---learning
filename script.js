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

{
    var blockvariable = "I am inside a block";
}


console.log(blockvariable); // This will work because var is function-scoped, not block-scoped.


