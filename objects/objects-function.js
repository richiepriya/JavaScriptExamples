//store related pieces of the object like : title,publicher, price
let myBook = {
  title : '1984',
  author: 'Gorege Orwell',
  pageCount :326
}

let otherBook = {
  title : 'A Peoples History',
  author: 'howard Zinn',
  pageCount :723
}


//console.log(`${myBook.title} by ${myBook.author}`)

//myBook.title = 'Animal farm'

//console.log(`${myBook.title} by ${myBook.author}`)

//Challenge Person
//name,age,location
//generate String Andrew is 27 and lives in Philandelphia
//increase age by 1 and print msg again

// let person ={
// firstName : 'Andrew',
// age : 27,
// location : 'Philadephia'
// }

// console.log(`${person.firstName} is ${person.age} and lives in ${person.location}`)

// person.age = person.age+1

// console.log(`${person.firstName} is ${person.age} and lives in ${person.location}`)


let getSummary = function(book)
{ 
  return{
    summary: `${book.title} by ${book.author}`
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
    
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)