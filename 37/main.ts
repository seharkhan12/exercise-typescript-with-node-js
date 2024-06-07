//making a function

function make_shirt (size: string =  "large", printMessage: string = "i love typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage}`)
}


//calling a function by default values

make_shirt();

//calling a function with a medium size and default message

make_shirt("medium")
//calling a function with a small size also with a different message
make_shirt("small", "i love jvascript")

