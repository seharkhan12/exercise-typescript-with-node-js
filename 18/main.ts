let countriesToVisit: string[] = ["saudiarabia","london","turkey"];
console.log("orginal order:", countriesToVisit);

console.log("Alphabetical order:", [...countriesToVisit].sort());

console.log("still in original order:", countriesToVisit);

console.log("Reverse order:", {...countriesToVisit}.reverse());

console.log("still in original order:", countriesToVisit);

console.log("original aaray reversed:",countriesToVisit.reverse());

console.log("back to oiginal order:", countriesToVisit.reverse());

console.log("sorted in alphabetical order:", countriesToVisit.sort());

console.log("original array reversed again:", countriesToVisit.reverse());




