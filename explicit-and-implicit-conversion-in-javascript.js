/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// This first example doesn't need to change as it converts the string "5" to a number using the subtraction operator. So I will have it print normally and then show a version where the opposite occurs.
let result = "5" - 2;
console.log(" ");
console.log("The result is: " + result);
console.log("Data Type of result: " + typeof(result));
result = "5" + 2; // I changed the - to a + which reverses the data type conversion. Initially, the - converted the string "5" into a number and then subrated 3. By changing to + the number 2 is converted into a string and concatenated onto string "5".
console.log(" ");
console.log("The result is now: " + result)
console.log("Data Type of result: " + typeof(result));

console.log(" ");
let isValid = "false"; //Even though the string is the word "false" Boolean() will change it to true since strings are truthy.
console.log("The Data Type of isValid is: " + typeof(isValid));
isValid = Boolean(isValid);
console.log("The Data Type of isValid is now: " + typeof(isValid));
if(isValid)
{
  console.log("This is valid!");
}
else 
{
  console.log("This is false!");
}

console.log(" ");
isValid = NaN; // Only six values can be changed to false using Boolean(). Strings are not one of them unless empty. I changed "false" to NaN, one of the 6 falsy values.
console.log("The Data Type of isValid is: " + isValid);
isValid = Boolean(isValid);
console.log("The Data Type of isValid is now: " + typeof(isValid));
if (isValid) {
    console.log("This is valid!");
    
}
else {
  console.log("This is invalid!"); // Added an else statement so the console mentions when the Boolean is false.
}

console.log(" ");
let age = "25";
console.log("The Data Type of age is: " + typeof(age));
let totalAge = Number(age) + 5; //By converting "25" to a number, 25 and 5 add correctly instead of the 5 being concatenated onto the end of the string "25"
console.log("Total Age: " + totalAge);
console.log("The Data Type of totalAge is: " + typeof(totalAge));


//My Examples
console.log(" ");
console.log(" ");

console.log("And now for my personal examples.")
console.log(" ");
console.log("Explicit Conversion:")

let empty = ""; // empty here contains an empty string. It is considered a string but when Boolean() is used on it, it will become the boolean value false.
console.log("This variable, empty (" + empty + "), is a " + typeof(empty) + "."); // Here I print the value inside empty and print its data type
console.log("I will now use Boolean() on empty, converting it into a boolean value.");
empty = Boolean(empty); // Empty is being converted explicitly into a Boolean value.
console.log("Now the variable empty (" + empty + ") is a " + typeof(empty) + "."); // Here I print the new value of empty and its data type.

console.log(" ");
console.log(" ");
console.log("Implicit Conversion:");

let string = "606"; // string contains the word "606"
console.log("This variable, string (" + string + "), is a " + typeof(string) + "."); // Here I print the value of string and the data type of its value. 
console.log("Without using any intentional conversion I'm going to perform some math on this string: string = string / 42");
string = string / 42; // Using division will transform the string "606" into a number and then divide it by 42;
console.log("What value is now in string? And what is its data type?")
console.log("Value: " + string + " Data Type: "  + typeof(string)); // Here I print the new value of string which is the reult of the division I performed. I also print its data type which is now a Number.
