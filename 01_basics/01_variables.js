const accountId= 12002
let accountEmail = "hampi@google.com"
var accountPassword = "1289"
accountCity = "Mumbai"

let accountState;

accountEmail = "hhao@husid.com"
accountPassword = "9981"
accountCity = "Delhi"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])
