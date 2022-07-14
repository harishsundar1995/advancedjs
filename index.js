//  Inline caching

// function findUser(user){
//     return `found ${user.firstname} ${user.lastname}`
// }

// const userData =  {
//     firstName : 'Johnson',
//     lastname: 'Junior'
// }

// findUser(userData)


// hidden classes

// function Animal(x,y){
//     this.x = x;
//     this.y = y;
// }

// const obj1 = new Animal(1,2)
// const obj2 = new Animal(3,4)

// obj1.a = 30
// obj1.b = 100
// obj2.b = 30
// obj1.a = 100


// Call Stack + Memory Heap
const number = 610 ; //allocate memory for number
const string = 'some text'; //allocate memory for a string
const human = {  // Allocate memory for an object and its values
    first :'Harish',
    last : 'Sundar'
}

function subtractTwo(num){
    return num -2 
}

function calculate() {
    const sumTotal = 4+ 5
    return subtractTwo(sumTotal)
}

calculate()