var userNames = ['sehar', 'manahil', 'numra', 'bisma', 'saba'];
if (userNames.length === 0) {
    console.log("your array is empty we need some user! ");
}
else {
    //using a foreach loop on array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("hello ".concat(oneUser, ", would you like to see status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ",thankyou for logging in again."));
        }
    });
}
