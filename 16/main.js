var guestlist = ['daniyal', 'hashim', 'manahil'];
//making a variable for those guest who can't come
var dontcome = guestlist[0];
//print a message of guest who can"t come
console.log(dontcome, "nh a sktyy hain");
//add or remove value from guest list array
guestlist.splice(0, 1, "bisma");
//message print for bigger table
console.log("good news ! we have found a bigger table for dinner.");
//adding a new value at starting index of array
guestlist.unshift("numra");
//adding a new value of ending index of array
guestlist.push("zain");
//adding a new guest at middle index of array
var middleindex = Math.floor(guestlist.length / 2);
//ading a new guest to middle index of array
guestlist.splice(middleindex, 0, "osama");
//print message of update ist
console.log("updated list of our guests");
//sending a invitation meassage to our guests one by one with their names
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me?")); });
