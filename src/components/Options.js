import React from 'react'
import { Option } from './Option'

export const Options = (props) => (
    <div>
    <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button 
            className="button--link"
            onClick={props.handleDeleteOptions}>
            Remove All
        </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please enter few options</p>}
        {
            props.options.map((option, index) => (
                <Option key={option} 
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />
                )
            )
        }
    </div>
)