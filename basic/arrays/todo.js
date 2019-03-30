//create an array with 5 different todo
//includes length you have x todo
//todo: walk the dog 
//Print the first and second to last items


todo =['HI how are you ','Order the cat','Cllean kitchen','You Are Mad','Do Work']

console.log(`you have ${todo.length} todos !`)
console.log(`Todo: ${todo[1]}`)
console.log(`Todo: ${todo[todo.length-1]}`)
//console.log(`Todo: ${todo[todo.length-1]}`)

//addd something on the end and remove something from the end 
todo.push('My new node')

console.log(`Todo: ${todo}`)


todo.pop()
console.log(`Todo: ${todo}`)

//remove or add something from the start

console.log(todo.shift())

console.log(todo.unshift('My first node'))

console.log(`Todo: ${todo}`)

//add element from the middle of the array and to remove from the middle of the array

//splice(start of index value, remove the index value)
///todo.splice(1,1)
//console.log(`Todo: ${todo}`)

//todo.splice(1,0,'Hi Richie see i have added ur data')
//console.log(`Todo: ${todo}`)

todo[2] ='Kitchen is not cleaned yet'

console.log(`Todo: ${todo}`)

//create new list
//Delete the 3rd item 
//Add new item to the end
//Remove 1st item from the list 


const prep = ['order cat food','clean kitchen', 'Buy Food', 'Do Work ','Excerise']

console.log(`Prep Items list ${prep}`)

//Delete the 3rd Item
prep.splice(2,1) //Buy Food
console.log(`Prep Items list After deleting hte 3rd Item : ${prep}`)

//Add new item to the end 

prep.push('Hi I am last Item added')
console.log(`Prep Items list Ading new Item @ End :  ${prep}`)

//Remove the 1st Item from the list - Order cat food 

prep.shift(1,1)
console.log(`Prep Items list  Removing 1st Item from the List :${prep}`)


//-------
//using foreach get the first Item and second item

prep.forEach(function (item, index) {

 console.log(`${index+1}. ${item} `)    
})


for(let count =0; count<prep.length;count++ )
{
    console.log(`${count+1}. ${prep[count]}`);
}

//1. Convert array to array of objects -> text, Completed Props
//2. Declare a function that remove by text value

//deleteTodo(prep,'buy food')
//console.log(prep)


const arrayObject=[
    {
        text :'Order the food',
        completedProps: true
    },
    {
        text :'Clean Kitchen',
        completedProps:false
    },
    {
        text :'Buy Food',
        completedProps: true
    },
    {
        text :'do Work',
        completedProps:false
    },
    {
        text :'Excerise',
        completedProps: true
    }
]

const deleteTodo = function (arrayObject,text)
{
    const index = arrayObject.findIndex(function(arrayObject)
    {
   return arrayObject.text.toLowerCase() === text.toLowerCase()
    })

    if(index >-1)
    {
        arrayObject.splice(index,1)
        return arrayObject
    }
    
     
}

deleteTodo(arrayObject,'buy food')
console.log(arrayObject)


