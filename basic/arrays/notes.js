const notes =['Note 1','Note 2' ,'Note 3']
//console.log(notes.length)

//console.log(notes[notes.length-1])



notes.forEach(function(item,index){

    console.log(index);

    console.log(item);
}
);

//counting ... 1 to 100
for(let count =0;count<=2;count++)
{  
console.log(count)

}

for(let count =0; count<notes.length;count++)
{
    console.log(notes[count])
}

//index of to search the string in the array

//console.log(notes.indexOf('Note 2'))

//index of return empty if no values is avaliable in the string

//console.log(notes.indexOf('Tannu')) //return -1

const Node= [
    {
        title: 'My next Trip',
        body : 'I would like to go to Spain'

    },
    {   title: 'Habbits to work on',
        body : 'Excerise. Eating a bot better'
        
    },
    { 
         title: 'Office modification',
         body: 'Get a new seat'
    }
]

//console.log(Node.indexOf({}))

//console.log({}==={})
//doesnt matter if the props of 2 object ,matches or not the object should be equal 

/*const index= Node.findIndex(function(Node,index)
{
console.log(index)
return Node.title ==='Office modification'
})
*/

//console.log(index)

const findNote = function(Node,NodeTitle)
{
    return Node.find(function(nodes , index)
    {
        return nodes.title.toLowerCase() === NodeTitle.toLowerCase()
    })
    
}

/*

const findNote = function(Node,NodeTitle)
{
    const index = Node.findIndex(function(nodes , index)
    {
        return nodes.title.toLowerCase() === NodeTitle.toLowerCase()
    })
    return Node[index]
}
 */

const nodes= findNote(Node,'office modification')
console.log(nodes)

//filtering a single arguement which is a function

