

function makeSAndwich(... items : string[]){
    console.log("\nmaking a sandwich with the following items: \n")


items.forEach(singleItem => console.log(singleItem));

console.log("\nnow enjoy sandwich")

}

makeSAndwich("chicken" , "cheese", "mayo" , "egg");
makeSAndwich("bread", "butter");
makeSAndwich("bread" , "butter", "mayo" ,"egg" , "cheese" ,"chicken" , "lettuce" , "tomato");