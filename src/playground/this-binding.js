const obj = {
    name: 'Ashu',
    getName() {
        return this.name
    }
}

console.log(obj.getName()) //'this' binds to 'obj'

//const getNameFunc = obj.getName //'this' no longer binds to 'obj' for getNameFunc even though it is the exact same function as getName

//console.log(getNameFunc()) //error since 'this' = undefined i.e., acts as regular function (see below)

// const func = function() {
//     console.log(this) //'this' is undefined for regular function (i.e., not methods)
// }

// func()

//const getNameFunc = obj.getName.bind(obj) //'this' binds to obj for getNameFunc
const getNameFunc = obj.getName.bind({ name: 'Andrew' }) //'this' binds to the new object
console.log(getNameFunc())