//array of current user

let current_users = ["zohaan", "balaj", "zubair", 'alisher'];

//array of new users

let new_users = ["sehar", "manahil", "numra" ,"bisma", "saba"];

new_users.forEach(new_one_user => {
    let our_condition = (current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase()))
        if(our_condition){
            console.log(`sorry ${new_one_user} is already taken!`)

      }else{
        console.log(`this username ${new_one_user} is available`)
      }

})



