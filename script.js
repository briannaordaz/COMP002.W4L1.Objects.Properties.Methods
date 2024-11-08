// 1. Instantiate a new array and add 5 numeric values to it.
// - Inside of a console.log(...) statement, output the first value of the array.
// - Inside of a console.log(...) statement, output the last value of the array.
// - What numbers did you have to pass as indexes? Why?
let myArray = [2, 3, 8, 24, 25];   // let myArray = [0, 1, 2, 3, 4]

console.log(myArray[0]); // output: 2
console.log(myArray[4]); // output: 25

// 2. Using a for loop containing a console.log(...) statement, output each of the values in the array.
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// 3. Use the push() method to add 5 more values to your array. 
// - What are the contents of your array now? Where did the new values appear?
// - Use the pop() statement 3 times on your array. What are the contents of your array now?
myArray.push(30, 48, 50, 88, 75);

console.log(myArray); // output: (10) [2, 3, 8, 24, 25, 30, 48, 50, 88, 75]

myArray.pop();
myArray.pop();
myArray.pop();

console.log(myArray); // output: (7) [2, 3, 8, 24, 25, 30, 48]

// 4. Declare a new string variable “myString” and place a string of your choosing inside.
// - Output the length of the string inside of a console.log(...) statement.
let myString = "Minecraft is fun!"

console.log(myString.length);  // output: 17 