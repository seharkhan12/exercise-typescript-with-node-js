function makeSAndwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nnow enjoy sandwich");
}
makeSAndwich("chicken", "cheese", "mayo", "egg");
makeSAndwich("bread", "butter");
makeSAndwich("bread", "butter", "mayo", "egg", "cheese", "chicken", "lettuce", "tomato");
