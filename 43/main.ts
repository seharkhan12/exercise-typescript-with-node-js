function show_magicians(magicians: string[]){


magicians.forEach(name => console.log(name))
}
        


function make_great(magicians: string[]){
return magicians.map(name => `the Great ${name}` );

}

let magician_name = ["sehar", "hamza", "daniyal"];

//making a copy of oridinal array through .slice( function

let copy_magician_names = magician_name.slice()

//modify the copied array to include "the Great" with thier names

let copy_great_magicians = make_great(copy_magician_names)

//show both arrays original and copied

//original
console.log("original Array\n")

show_magicians(magician_name);

//copied
console.log("\nCopied array\n")

show_magicians(copy_great_magicians);






