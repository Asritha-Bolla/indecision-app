import React from 'react'
import AddOption from './AddOption'
import { Options } from './Options'
import { Action } from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    //using class properties
    state = {
        options: [],
        selectedOption: undefined
    }
    // constructor(props) {
    //     super(props)
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     this.handlePick = this.handlePick.bind(this)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this)
    //     this.state = {
    //         options: []
    //     }
    // }
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
    //handleDeleteOptions() {
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] })) //refer notes
    }
    //handleDeleteOption(optionToRemove) {
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option) //returns new array except the one to be removed
        }))
    }
    //handlePick() {
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length) 
        const option = this.state.options[randomNum]
        
        this.setState(() => ({ selectedOption: option }))
    }
    //handleAddOption(option) {
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid option'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    render() {
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}