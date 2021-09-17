//var name = "Andrew"; var name= "Mike" -> redefining valid with var (OH NO!!). Redefining invalid with let and const (YAY!)
//reassigning valid with var and let, not with const
//always try to declare your variables as const first and then go back and change to let if they need to be reassigned
// var, let and const are function scoped (not accessible outside of function), but let and const are also block scoped (not accessible outside of {})
//AVOID VAR to avoid variable redefining (so that we don't lose first value unknowingly) and to avoid value leaking out of block

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}


const onFormSubmit = (e) => {
    e.preventDefault()

    let option = e.target.elements.option.value

    if(option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        render()
    }
}

const removeAll = () => {
    app.options = []
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length) //Math.random generates random nuo b/w 0 and 1, multiply with 
    //required multiplier to get desired range. Here we use array length to get random no in array's index scope.So if 
    //app.options.length = 3, we get random values between 0 and 3 (0.somth to 2.99somth). Math.floor rounds decimal number to integers.
    //so we get 0, 1, 2 randomly here
    
    const option = app.options[randomNum]
    alert(option)
}

//conditional rendering: ternary operator, logical AND, if-else

const appRoot = document.getElementById('myapp')
//const numbers = [12, 13, 15]
const render = () => {
    const template = (
        //always make sure your elements are wrapped in a single root element or else JSX fails
        <div>
            <h1 id="someid">{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{ (app.options.length > 0) ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            {
                //[98, 99, 100]
                //[<p key="a">a</p>, <p key="b">b</p>, <p key="c">c</p>] //refer diary
                //numbers.map((number) => {
                    //return <p key={number}>Number: {number}</p>
                //}) //creates array with JSX elements
            }
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="input" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    ); 
    ReactDOM.render(template, appRoot)
}

render()