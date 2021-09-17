class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleDisplay = this.handleToggleDisplay.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleDisplay() {
        this.setState((prevState) => {
           return {
            visibility: !prevState.visibility
           } 
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleDisplay}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {
                    this.state.visibility && <p>Hey, Heres some details you can see</p>
                }
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('myapp'))

// let visibility = false

// const toggleDisplay = () => {
//     visibility = !visibility
//     render()
// }

// const appRoot = document.getElementById('myapp')
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleDisplay}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {
//                 visibility && <p>Hey, Heres some details you can see</p>
//             }
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// render()