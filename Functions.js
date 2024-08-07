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

// Promises:

let test_promise = new Promise((res,rej)=>{
    console.log("If the message doesn't resolve in 5 sec then it will be rejected.")
    setTimeout(() => {
      res("This is resolved")
    }, 10000)
    
    setTimeout(() => {
      rej("This is rejected.")
    }, 5000)
    
})

let test_promise_1 = new Promise((res_1,rej_1)=>{
    setTimeout(() => {
      res_1("2.5 second completed")
    }, 2500)
    
})

test_promise.then((res) => {
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})

test_promise_1.then((res)=>{
    console.log(res)
})

// Two promises runs paralally. However we will not create the promises like this.
// We will create async funtions to call promise.

let test1 = async () => {
    return "Ratul Pal: I am from async function"
}

test1().then((r)=>{
    console.log(r)
})

/*
fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));
This function is similar as: 
*/

async function getText(file) {
  let myObject = await fetch(file);
  let myText = myObject.text();
  console.log(myText)
}

getText('https://jsonplaceholder.typicode.com/todos/1')