

import inquirer from "inquirer";

const currency: any = {
     "USD" :     1,  //Base currency
     "GBP" :    1.26, "PKR" : 280, "EUR" : 0.91,"AUD" : 0.75,"CAD" : 0.76,"NZD" : 0.73, "CHF" : 0.92,"INR" : 74.57
};
let user_answer = await inquirer.prompt(
    [
        {
            name    :   "from",
            type    :   "list",
            message :   " Enter from currency",
             choices: ["PKR", "GBP", "USD", "EUR","AUD","CAD", "NZD","CHF","INR"],
        },
         {
             name: "to",
             type: "list",
             message :" Enter to currency",
             choices: ["PKR", "GBP", "USD", "EUR","AUD","CAD", "NZD", "CHF","INR"],
        },
         {
             name:   "amount",
             type:   "number",
             message: "Enter your amount.",
    }
]);
let userFromCurrency = user_answer.from
let userToCurrency = user_answer.to
let fromAmount = currency[userFromCurrency] //exchange rate
let toAmount = currency[userToCurrency]    // exchange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount        //USD base currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);

// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);


    