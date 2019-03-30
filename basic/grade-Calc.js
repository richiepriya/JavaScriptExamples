//students score , total possible score

//15/20 => You got a c(75%) !

//A 90-100, B 80-89, C 70-79 , D 60-69, F 0-59

let gradeCalc = function(studentScore = 0, totalScore =100)
{   let result = (studentScore/totalScore)*100
    let grade = ''
    if(result>=90 && result <=100)
    {
        grade = 'A' 
    }
    else if(result>=90 && result <=100)
    {
        grade = 'B' 
    }
    else if(result>=80 && result <=89)
    {
        grade = 'C' 
    }
    else if(result>=70 && result <=79)
    {
        grade = 'D' 
    }
    else if(result>= 60 && result <=69)
    {
        grade = 'E' 
    }
    else if(result>=0 && result <=59)
    {
        grade = 'F' 
    }
    return `You got a ${grade} (${result}%) !`
}

let grade = gradeCalc(15,20)
console.log(grade)