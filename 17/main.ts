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

//iform that only two guests invited for a dinner

console.log("unfortunately, the new dinner table won't arrive on time, so i can invite only two guest to dinner with me"); 
//using while.loop  to remove guest from array until only two names remain
while(guestlist.length > 2) {

    let removedguest = guestlist.pop();
    console.log(`sorry, ${removedguest} i cant invite you to dinner`); 
}
   //sending  a ivitation to last two guest on the list
console.log('invitation to the last 2 guests');

guestlist.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are  sthill invited to dinner `));
//removing last two  guest from the list

guestlist.pop();
guestlist.pop();
console.log("empty list:" ,guestlist);