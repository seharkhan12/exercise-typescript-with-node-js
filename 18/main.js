var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["saudiarabia", "london", "turkey"];
console.log("orginal order:", countriesToVisit);
console.log("Alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
console.log("still in original order:", countriesToVisit);
console.log("Reverse order:", __assign({}, countriesToVisit).reverse());
console.log("still in original order:", countriesToVisit);
console.log("original aaray reversed:", countriesToVisit.reverse());
console.log("back to oiginal order:", countriesToVisit.reverse());
console.log("sorted in alphabetical order:", countriesToVisit.sort());
console.log("original array reversed again:", countriesToVisit.reverse());
