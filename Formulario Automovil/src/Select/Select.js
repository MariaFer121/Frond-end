import React from "react";
import '../Select/Select.css'

class Select extends React.Component {

    render() {
        return (
            <div className="ctn-select">

                <label>{this.props.name}</label>

                {this.props.items === undefined && (console.log('Seleccione Elemento.'))}

                {this.props.items !== undefined && (
                    <select onChange={(e) => { this.props.change(e) }}>
                        <option hidden>Seleccione un Item</option>
                        {this.props.items.map(item => {
                            return (<option key={item.key}>{item.nombre}</option>)
                        })};
                    </select>
                )}
            </div>
        )
    }
};

export default Select;