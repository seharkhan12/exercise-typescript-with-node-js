function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the Great ".concat(name); });
}
var magician_name = ["sehar", "hamza", "daniyal"];
//making a copy of oridinal array through .slice( function
var copy_magician_names = magician_name.slice();
//modify the copied array to include "the Great" with thier names
var copy_great_magicians = make_great(copy_magician_names);
//show both arrays original and copied
//original
console.log("original Array\n");
show_magicians(magician_name);
//copied
console.log("\nCopied array\n");
show_magicians(copy_great_magicians);
