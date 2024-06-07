let userNames = ["sehar","manahil",'numra','bisma','saba'];

//using a foreach loop on array

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
console.log(`hello ${oneUser}, would you like to see status report?`);
    }else{
        console.log(`hello ${oneUser},thankyou for logging in again.`)
    }
})
    
