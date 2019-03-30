//convert FahrenheitTo Celcius 
//32->0 60 ->20

//print the converted Value

let tempConersion = function(num)
{
  let temp = (num-32) * 5/9
  return temp
}
let fahrenheitTemp =68
let celsiusTemp = tempConersion(fahrenheitTemp)
console.log(celsiusTemp)