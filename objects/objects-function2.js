//challenge area

//create function - take fahrenheit in - return objects with all three

let convertfahrenheit =  function(fahrenheit)
{
return{
    fahrenheit:fahrenheit,
    kelvin: (fahrenheit +459.67) +(5/9),
    celsius : (fahrenheit-32) *(5/9)
}
}

let temps = convertfahrenheit(74)
console.log(temps);
