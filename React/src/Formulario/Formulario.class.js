import React from "react";
import Input from '../Input/Input'
import Select from "../Select/Select";
import Button from '../Button/Button'

class Formulario extends React.Component{
    constructor(props){
        // Permite obtener los props
        super(props)
        // Creamos el objeto estado
        this.state = {
            marca: '',
            modelo: ''
        }
        // Enlazamos las funciones a this
        // this.handleChangeMarca = this.handleChangeMarca.bind(this)
        // this.handleChangeModelo = this.handleChangeModelo.bind(this)
    }

    // Marcas y modelos para selects
    marcas = [{name: 'Hiundai', id: 1}, {name: 'Toyota', id: 2}]
    modelos = [{name: 'Cube', id: 1}, {name: 'Elantra', id: 2}]

    // Manejador change Marca
    handleChangeMarca = (event) => {
        console.log(event.target.value)
        this.setState({
            marca: event.target.value
        })
    }

    // Manejador change Modelo
    handleChangeModelo = (event) => {
        console.log(event.target.value)
        this.setState({
            modelo: event.target.value
        })
    }

    render(){
        return (
            <>
                {/* Referenciamos marca y modelo desde el estado */}
                <p>{this.state.marca} --- {this.state.modelo}</p>
                <Input title="Ingrese patente" type="text" />
                <Input title="Ingrese año" type="number" />
                <Select
                    change={this.handleChangeMarca}
                    name="marca"
                    items={this.marcas}
                    />
                <Select
                    change={this.handleChangeModelo}
                    name="modelo"
                    items={this.modelos}
                    />
                <Button />
            </>
        )
    }
}

export default Formulario