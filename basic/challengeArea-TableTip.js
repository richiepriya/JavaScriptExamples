//Challenge Area
// total and tip Percentage

let tableCharge = function (total = 0 , tipPercent = 0.2) 
{
   //return     total*tipPercent  //Normal String used

   //template String used
   return `A ${tipPercent*100}% tip on $${total} would be $${total*tipPercent }`
}

let result = tableCharge(300,0.25)
console.log(result)
