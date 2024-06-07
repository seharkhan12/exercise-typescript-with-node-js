
//creating a function with parameter which return a value in astring

function city_country(city: string, country: string) : string{
    return `${city} , ${country}` ;

}

//calling a function and print the returned values

console.log(city_country("karachi", "pakistan"));
console.log(city_country("tokyo", "japan"));

console.log(city_country("berlin", "germany"));