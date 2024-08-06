/*
function additon(a,b){
    return a+b
}
console.log(`Addition of 3 and 4 is ${additon(3,4)}`)
*/
/* Arrow function 
let additon = (a,b) => {
    return a+b
}
console.log(`Addition of 3 and 4 is ${additon(3,4)}`)
*/

// Closures.

const Bank = (accounts,balance) => {
    return (amount,task) => {
        if (task == "Show") {
            console.log(`${accounts}: Your current balance is ${balance}`);
        }
        else if (task == "Withdraw") {
            balance -= amount
            console.log(`${accounts}: ${amount} debited from your account. Your current balance is ${balance}`);
        }
        else if (task == "Diposite") {
            balance += amount
            console.log(`${accounts}: ${amount} credited your account. Your current balance is ${balance}`);
        }
        
    }
}
let Ratul_account = Bank("Ratul",40000)
let Dipa_account = Bank("Dipa",45000)
Ratul_account(0,"Show");
Dipa_account(0,"Show");
Dipa_account(100,"Withdraw");
Ratul_account(0,"Show");
Dipa_account(0,"Show");

//Call back:

const Calculator = (a,b,c) => {
    return c(a,b)
}

const sum = (x,y) => {
    return x + y
}
const sub = (x,y) => {
    return x - y
}
const mul = (x,y) => {
    return x * y
}
const div = (x,y) => {
    return x / y
}

console.log(`The sum of 6 and 3 is ${Calculator(6,3,sum)}`)
console.log(`The sum of 6 and 3 is ${Calculator(6,3,sub)}`)
console.log(`The sum of 6 and 3 is ${Calculator(6,3,mul)}`)
console.log(`The sum of 6 and 3 is ${Calculator(6,3,div)}`)