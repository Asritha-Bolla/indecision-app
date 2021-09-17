import React from 'react'
import Modal from 'react-modal'

//!!'valid string' = true, !!undefined = false
//since we are ONLY returning something here, use shorthand syntax and remove explicit 'return' key word (and {}) ex: const add = () => a + b
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
)

export default OptionModal