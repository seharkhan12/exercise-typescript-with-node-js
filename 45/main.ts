//define a function loop to create a car object with optional options...


function creat_car(manufacturer: string , model: string , ...options: string[]){
       //initializa a car object with manufacture and model 

       let car = {
        manufacturer: manufacturer
       model = model

       };

       //add additional options to the car object 

       options.forEach(options  => {


        let [key , value] = options.split(":");
        car [key. trim()] = value.trim();
       });

       return car;  
        
}

let my_car = creat_car("toyota", "corolla" ,"color:Black ", "sunroof: true" , "year: 2024");

//print the variableto ensure all th informaton is stored correctly in the car object

console.log(my_car);




