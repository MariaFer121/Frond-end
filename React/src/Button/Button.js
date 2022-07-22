import React from 'react'
import './Button.css'

class Button extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        console.log("Click ! ")
    }

    render(){
        return (
            <>
                <button onClick={this.handleClick}>Enviar</button>
            </>
        )
    }
}

export default Button