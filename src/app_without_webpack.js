class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options') //returns null if no item with name 'options' exists
            const options = JSON.parse(json) //JSON.parse(null) = null
    
            if (options) { //to avoid nulls
                this.setState(() => ({ options }))
            }
        } catch (e) {
            
            //Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json) //localStorage persists even on page refresh
            //localStorage ONLY deals with string data. So to store objects, arrays etc., convert them to JSON strings and store (YAY!!)
        }
    }
    componentWillUnmount() {
        console.log('componentDidUnmount')
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] })) //refer notes
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option) //returns new array except the one to be removed
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length) 
        const option = this.state.options[randomNum]
        alert(option)
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid option'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    render() {
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

//stateless function component
//DO NOT use 'this' inside here
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    )
}

// class Action extends React.Component {
//     // handlePick() {
//     //     alert('handlePick')
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please enter few options</p>}
            {
                props.options.map((option) => (
                    <Option key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                    )
                )
            }
        </div>
    )
}

// class Options extends React.Component {
//     // constructor(props) { //already binds to the class (i.e., this component)
//     //     super(props)
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this) //to bind the event method to the class so that we can access 'this' inside the event method
//     //     //calling bind here once rather than inside onClick event so that we don't have to do it multiple times in case we need handleRemoveAll multiple times
//     // }
//     // handleRemoveAll() { //doesn't bind to the class by default since this is an event method. see playground this-binding.js
//     //     alert(this.props.options)
//     // }
//     render() { //already binds to the class
//         //rendering array in jsx always needs 'key'
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}/>)
//                 }
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
                }}>
            remove
            </button>
        </div>
    )
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>{this.props.optionText}</div>
//         )
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: ''
        }
    }
    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))

        if(!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// )

//ReactDOM.render(jsx, document.getElementById('myapp'))

ReactDOM.render(<IndecisionApp />, document.getElementById('myapp'))
//ReactDOM.render(<IndecisionApp options={['One', 'Two']} />, document.getElementById('myapp'))