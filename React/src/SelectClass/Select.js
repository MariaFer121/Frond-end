import React from "react";

class SelectClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            variable: "test",
            numerico: 0
        }
    }

    render(){
        return (
            <>
                <p>{this.state.variable}</p>
                <p>{this.state.numerico}</p>
                
                <select onChange={(e) => { this.props.change(e) }}>
                    <option>Seleccione un elemento</option>
                    {this.props.items.map(item => {
                        return (<option key={item.id}>{item.name}</option>)
                    })}
                </select>
            </>
        )
    }
}

export default SelectClass