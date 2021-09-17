class Counter extends React.Component {
    constructor(props) {
        super(props) 
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count')
        const count = parseInt(stringCount, 10)

        if(!isNaN(count)) {
            this.setState(() => ({ count }))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count) //stores as string
        }
    }
    handleAddOne() {
        //refer notes to see pitfalls of setState object syntax and why setState function syntax is better
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 //doesn't override whole state object. It only updates value of 'count' property. other data (if exists) remain same
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1 
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('myapp'))
//ReactDOM.render(<Counter count={-10} />, document.getElementById('myapp'))

// // const user = {
// //     name: 'Ashu',
// //     age: 25,
// //     location: 'Hyderabad'
// // }

// // function getLocation(location) {
// //     if(location) return <p>Location: {location}</p>; //returns JSX expression if location exists, else returns undefined
// // }
// // {Javascript expression} - cant use anything other than expressions in this. Ternary operator and logical AND statements are valid expression 
// // {JSX expression} gives same result as normal JSX expression
// // {undefined}, {null}, {false}, {true} are ignored by JSX. Nothing prints
// // true && 'Something' -> 'Something'
// // false && 'Something' -> false ({false} is ignored by JSX)
// // Use ternary when you have to print either of two values
// // Use logical AND when you have to print value if condition passes and ignore if it doesn't pass

// // const templateTwo = (
// //     <div>
// //         <h1>{user.name ? user.name : 'Anonymous'}</h1>
// //         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
// //         {getLocation(user.location)}
// //     </div>
// // )
// let count = 0
// const addOne = () => {
//     count++ //doesn't affect JSX template since JSX doesnt have inbuilt data binding => not re-rendering when count changes. So move the rendering into a function (for now) and call it each time you want to re-render
//     //console.log('addOne', count)
//     renderJSXTemplate() //react uses Virtual DOM to estimate the minimum no. changes made to re-render i.e., react makes minimal changes to browser DOM while re-rendering (YAYY)
//     //Because making unnecessary changes to DOM is expensive (SLOWWWWWWW)
// }

// const minusOne = () => {
//     count--
//     //console.log('minusOne', count)
//     renderJSXTemplate()
// }

// const reset = () => {
//     count = 0
//     //console.log('reset', count)
//     renderJSXTemplate()
// }

// // const templateTwo = (
// //     <div>
// //         <h1>Count: {count}</h1>
// //         <button onClick={addOne}>+1</button>
// //         <button onClick={minusOne}>-1</button>
// //         <button onClick={reset}>reset</button>
// //     </div>
// // )

// const appRoot = document.getElementById('myapp')

// //ReactDOM.render(templateTwo, appRoot)

// const renderJSXTemplate = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderJSXTemplate()