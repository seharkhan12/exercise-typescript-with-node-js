//making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "i love typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage));
}
//calling a function by default values
make_shirt();
//calling a function with a medium size and default message
make_shirt("medium");
//calling a function with a small size also with a different message
make_shirt("small", "i love jvascript");