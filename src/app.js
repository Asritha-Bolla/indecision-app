//import ./utils.js //doesn't give access to named exports
// import subtract, { square, add } from './utils.js' // {} -> named exports, other = default export (any name can be given to default export)

// console.log('app.js is running!')
// console.log(square(4), add(3, 4), subtract(120, 67))

import React from 'react'
import ReactDOM, { render } from 'react-dom'

// const template = <p>JSX YAY</p>;

// ReactDOM.render(template, document.getElementById('myapp'))

import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css' //normalize.css file in normalize.css module. This gives common style base across browsers/OS, so that styles built on top of that base looks same in all devices/browsers
import './styles/styles.scss' //webpack sees this and converts css to js using loaders we installed. Not good performance-wise

ReactDOM.render(<IndecisionApp />, document.getElementById('myapp'))

// //Passing children to component
// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     )
// }
// //use opening and closing tags rather than self-closing tag to define children
// ReactDOM.render(<Layout><p>Some Inline Text</p></Layout>, document.getElementById('myapp'))


//exploring class properties using babel plugin transform-class-properties (which converts ES6 class properties to older compatible methods/values)

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike' // property values need to be defined inside constructor
//         this.getGreeting = this.getGreeting.bind(this)
//     }

//     getGreeting() {
//         console.log(`Hi ${this.name}`)
//     }
// }

// const oldSyntax = new OldSyntax()
// const getGreeting = oldSyntax.getGreeting //breaks 'this' binding without bind()
// console.log(getGreeting())

// class NewSyntax {
//     //with transform class properties plugin provided by babel
//     name = 'Jen'; // Need not be defined inside constructor (YAY!) -> class property values
//     getNewGreeting = () => { // Need not be manually bound inside constructor (YAY!!) -> class property methods
//         console.log(`Hi ${this.name}`)
//     }
// }

// const newSyntax = new NewSyntax()
// const getNewGreeting = newSyntax.getNewGreeting //arrow function doesn't have it's own binding so it directly uses the parent scope i.e., class instance=> getNewGreeting is ALWAYS bound to the class instance even on re-assigning
// console.log(getNewGreeting())