function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the Great ".concat(name); });
}
var magician_name = ["sehar", "hamza", "daniyal"];
var great_magicians = make_great(magician_name);
console.log(great_magicians);
