import Input from '../Input/Input'
import Select from '../Select/Select'
import Button from '../Button/Button'
import {useState} from 'react'
import SelectClass from '../SelectClass/Select'

function Formulario(props){

    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')

    let marcas = [{name: 'Hiundai', id: 1}, {name: 'Toyota', id: 2}]
    let modelos = [{name: 'Cube', id: 1}, {name: 'Elantra', id: 2}]

    let handleChangeMarca = (event) => {
        setMarca(event.target.value)
        console.log(marca)
    }

    let handleChangeModelo = (event) => {
        setModelo(event.target.value)
    }

    return (
        <>
            <Input title="Ingrese patente" type="text" />
            <Input title="Ingrese año" type="number" />
            <Select
                change={handleChangeMarca}
                name="marca"
                items={marcas}
                />
            <Select
                change={handleChangeModelo}
                name="modelo"
                items={modelos}
                />
            <Button />
        </>
    )
}

export default Formulario