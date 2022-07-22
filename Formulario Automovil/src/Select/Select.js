function Select(props){
    return(
        <div>
            <p>Seleccione {props.name}</p>
            <select onChange={ (e) => { props.change(e) } } >
                <option>Seleccione un item ...</option>
                {props.items.map(item => {
                    return (<option key={item.id} >{item.name}</option>)
                })}
            </select>
        </div>
    )
}

export default Select