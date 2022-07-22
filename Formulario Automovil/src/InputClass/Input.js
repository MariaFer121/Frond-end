import React from 'react'

class Input extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
    }

    render(){
        return (
            <>
                <p>{this.state.count}</p>
                <input type="text" />
                <button onClick={() => {this.setState({count: this.state.count+1})}}></button>
            </>
        )
    }
}

export default Input