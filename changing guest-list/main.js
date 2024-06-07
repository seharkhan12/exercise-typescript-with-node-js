var guestlist = ['daniyal', 'hashim', 'manahil'];
var dontCome = guestlist[0];
console.log(dontCome, "nh a skta");
guestlist.splice(0, 1, "bisma");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would u like to dinner with me?")); });
