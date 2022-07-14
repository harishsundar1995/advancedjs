// Function expression

var india = () => {
    console.log('It is warm here')
}

// Function declaration

function canada() {
    console.log('It is cold here')
}

// function marry(person1, person2) {
//     console.log(arguments)
//     console.log(Array.from(arguments))
//     return `${person1} is now married to ${person2}`
// }


function marry1(...args) {
    console.log(args)
    console.log(Array.from(args))
    return `${args[0]} is now married to ${args[1]}`
}

console.log(marry1('Jane', 'Roger'))