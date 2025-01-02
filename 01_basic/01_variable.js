//variable means in js variables are containers for storing data values. 
// Think of them like labeled boxes where you can put different types of information.

const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // when we not define the value it coes with a mark of undefine.


// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// when we need to run multiple variable in a single point of time .