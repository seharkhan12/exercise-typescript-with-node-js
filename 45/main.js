//define a function loop to create a car object with optional options...
function creat_car(manufacturer, model) {
    //initializa a car object with manufacture and model 
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //add additional options to the car object 
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = creat_car("toyota", "corolla", "color:Black ", "sunroof: true", "year: 2024");
//print the variableto ensure all th informaton is stored correctly in the car object
console.log(my_car);
