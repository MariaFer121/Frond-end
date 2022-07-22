import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";
import './Formulario.css'

class Formulario extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            anio: 0,
            marca: '',
            modelo: ''
        }
        this.handleChangeNombre = this.handleChangeNombre.bind(this)
        this.handleChangeAnio = this.handleChangeAnio.bind(this)
        this.handleChangeMarca = this.handleChangeMarca.bind(this)
        this.handleChangeModelo = this.handleChangeModelo.bind(this)
        this.handleSendForm = this.handleSendForm.bind(this)
    }

    domMarcas = [
        { key: 1, nombre: 'Toyota Yaris' },
        { key: 2, nombre: 'Volkswagen Gol' },
        { key: 3, nombre: 'Kia Morning' },
        { key: 4, nombre: 'Ford Ranger' },
    ];

    domModelos = [
        { key: 1, nombre: 'Coupé' },
        { key: 2, nombre: 'Sedán' },
        { key: 3, nombre: 'Citycar' },
        { key: 4, nombre: 'Camioneta' },
    ];


    handleChangeNombre = (event) => {

        this.setState({
            nombre: event.target.value
        })
    }

    handleChangeAnio = (event) => {

        this.setState({
            anio: event.target.value
        })
    }

    handleChangeMarca = (event) => {

        this.setState({
            marca: event.target.value
        })
    }

    handleChangeModelo = (event) => {

        this.setState({
            modelo: event.target.value
        })
    }

    handleSendForm = () => {
        console.log(this.state)
    }


    render() {

        return (
            <div className="container">
                <Input
                    types='text'
                    name='Nombre:'
                    change={this.handleChangeNombre}
                />
                <Input
                    types='number'
                    name='Año:'
                    change={this.handleChangeAnio}
                />
                <Select
                    items={this.domMarcas}
                    name='Marca:'
                    change={this.handleChangeMarca}
                />
                <Select
                    items={this.domModelos}
                    name='Modelo:'
                    change={this.handleChangeModelo}
                />
                <Button enviar={this.handleSendForm} />
            </div>
        )
    }
};

export default Formulario;