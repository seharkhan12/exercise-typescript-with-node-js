let guestlist = ['daniyal','hashim','manahil'];

let dontCome = guestlist[0];

console.log(dontCome, "nh a skta");

guestlist.splice(0, 1, "bisma");

guestlist.forEach(guest => console.log(`salam ${guest}, would u like to dinner with me?`));