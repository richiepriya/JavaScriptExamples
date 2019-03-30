let add = function (a,b) {
    return (a+b)
}
let result = add(1,1)
console.log(result);


//Default arguement score have the zero value

let getScoreText = function(name,score =0)
{
    //console.log(name)
    //console.log(score)
    // return 'Name : ' +name 
    // +' : ' + 'Score : ' + score 
    //template string
    return `Name : ${name} , Score : ${score} `
}

let scoreText = getScoreText('Richie',100)
console.log(scoreText)

console.log("Andrew" + 'Rici')

let name ="richie"

console.log(`hey my name is ${name}!!`)