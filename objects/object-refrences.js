let myAccount = {
    name:'Richie Priya',
    expenses: 0,
    income: 0 
}

let addExpense = function(account, amount)
{
    //account={}
    account.expenses = account.expenses + amount
    console.log(account)
}

addExpense(myAccount,2.50)
console.log(myAccount)

//add income 
// reset account static zero
// get Account Summary
//Account for Richir has $900, $1000 in come.
//$100 in expenses.

let addIncome = function(account, income)
{ 
    account.income = account.income+income

}

let resetAccount= function(account)
{
  account.expenses =0
  account.income =0
}

let getAccountSummary = function(account)
{
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}

addIncome (myAccount,2000)
addExpense(myAccount,2.50)
addExpense(myAccount,160)

console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))