let name= 'RichiePriya'

//length property
console.log(name.length);

//convert upppercase
console.log(name.toUpperCase())

//convert to lowercase
console.log(name.toLowerCase())

//iclude password

let password ='abcd123455&*&(('

//console.log(password.includes('password'))

//challange Area



let isValidPassword = function(password)
{
    if(password.length>8 && !password.includes('password'))
     {    return true
     }
     else
     {
         return false
     }
}


console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abcd123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoipassword'))
