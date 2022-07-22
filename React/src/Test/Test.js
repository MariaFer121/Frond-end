import React from "react";

class Test extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            contador: 0,
            saludo: "Hola mundo"
        }
    }

    render(){
        return (
            <>
                <p>{this.state.contador}</p>
                <button onClick={() => {this.setState({contador: this.state.contador +1})}}>Click ME !</button>
            </>
        )
    }
}

export default Test