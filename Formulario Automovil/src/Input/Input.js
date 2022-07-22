import React from "react";
import '../Input/Input.css'

class Input extends React.Component {

    render() {

        return (
            <div className="ctn-inputs">
                <label>{this.props.name}</label>

                <input onChange={(e) => { this.props.change(e) }} type={this.props.types === 'text' ? 'text' : 'number'}></input>
            </div>
        )
    }
};

export default Input;
