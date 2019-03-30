//global scope
//local scope (outside we cant have access- for exp :num and temp)
//local scope (isFreezing)
let tempConersion = function(num)
{
    //local scope
  let temp = (num-32) * 5/9
  if(temp<=0)
  {
      let isFreezing = true
  }
  return temp
}
let fahrenheitTemp =68
let celsiusTemp = tempConersion(fahrenheitTemp)
console.log(celsiusTemp)