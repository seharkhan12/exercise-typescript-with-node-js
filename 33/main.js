//creating a array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for-loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinalEnding = void 0;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else if (oneNumber === 4) {
        ordinalEnding = "th";
    }
    else if (oneNumber === 5) {
        ordinalEnding = "th";
    }
    else if (oneNumber === 6) {
        ordinalEnding = "th";
    }
    else if (oneNumber === 7) {
        ordinalEnding = "th";
    }
    else if (oneNumber === 8) {
        ordinalEnding = "th";
    }
    else if (oneNumber === 9) {
        ordinalEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalEnding));
}
