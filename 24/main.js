var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//test for equalityand inequality with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");
console.log("is apple is not equal to apple?");
console.log(apple != "apple");
//tests using lowercase functions
console.log("is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nis APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//numerical tests
console.log("\nis ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\nis ten is not equal to twenty?");
console.log(ten != twenty);
//greater than
console.log("\nis ten is greater than zero?");
console.log(ten > 0);
//less than
console.log("\nis twenty is less than 10");
console.log(twenty < 10);
//greater than or equal to
console.log("\nis ten is greater than or equal to 5?");
console.log(ten >= 5);
//less than or equal to
console.log('\n twenty is less than or equal to 10');
console.group(twenty <= 10);
//testsusing "and" & "or" operators
console.log("\ntwenty is not equal to 10 and twentyis greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// using || (oR)
console.log("/n 20 is greater than 50 OR20 is not equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("/n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//test wheatheran item is include in array
console.log("/n9is orange include in my fruits array");
console.log(fruits.includes("orange"));
