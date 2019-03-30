let num = 103.941

console.log(num.toFixed(1))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum =Math.floor( Math.random() * (max-min +1)) +min
// 0 - .999999
console.log(randomNum)


//challenge area
//1-5 - true if correct
// false if it is not correct
let markGuess = function (params) {
    let min = 1
    let max = 5
    let randomNum =Math.floor( Math.random() * (max-min +1)) +min
    if(randomNum === params)
    {
        return true
    }
    else{
    return false 
    }
}


console.log(`Guess result is ${markGuess(7)}`)