//exports ->  default or named
//any number of named exports can be defined
//ONLY one default export is allowed
export const add = (x, y) => x + y //named export

export const square = (x) => x*x  //named export

export default (a, b) => a-b

//export default const minus = (a, b) => a-b //WRONG SYNTAX - ERROR

//export default class... .//VALID SYNTAX

//const minus = (a, b) => a-b; export default minus; ->Valid syntax

//export { add, square, minus as default} -> Valid syntax. add and square are named exports, minus is default export

