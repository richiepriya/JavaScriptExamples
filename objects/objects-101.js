//store related pieces of the object like : title,publicher, price
let myBook = {
  title : '1984',
  author: 'Gorege Orwell',
  pageCount :326
}
//console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal farm'

//console.log(`${myBook.title} by ${myBook.author}`)

//Challenge Person
//name,age,location
//generate String Andrew is 27 and lives in Philandelphia
//increase age by 1 and print msg again

let person ={
firstName : 'Andrew',
age : 27,
location : 'Philadephia'
}

console.log(`${person.firstName} is ${person.age} and lives in ${person.location}`)

person.age = person.age+1

console.log(`${person.firstName} is ${person.age} and lives in ${person.location}`)
