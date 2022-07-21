// funcion formato flecha
let mensajes = []

let guardar  = () => {

    let message = document.getElementById("message")
    let last_name = document.getElementById("last_name")
    let name = document.getElementById("name")

    let error_name = document.getElementById("error_name")
    let error_last_name = document.getElementById("error_last_name")
    let error_message = document.getElementById("error_message")

    if(existsErrors(
            message, last_name, name, 
            error_name, error_last_name, 
            error_message
        )
    ){
        // Logica en caso de que existan errores
    }else{
        // Forma alternativa de declarar objetos
        // let objeto = new Object()
        // objeto.nombre = name.value
        // objeto.apellido =  last_name.value
        // objeto.message = message.value

        let objeto = {
            nombre: name.value,
            apellido: last_name.value,
            message: message.value
        }
        mensajes.push(objeto)
        console.log(mensajes)

        let elemento_response = document.getElementById("response")
        let cadena = objeto.nombre + " " + objeto.apellido
        cadena = cadena + "" +objeto.message

        elemento_response.innerHTML = cadena

    }

    

}


function existsErrors(message, last_name, name, error_name, error_last_name, error_message){
    let errors = []
    // Valido que el nombre fue ingresado
    if( name.value == ""){
        errors.push("Debe ingresar el nombre")
        error_name.innerHTML = "Debe ingresar su nombre."
        error_name.classList.remove("escondido")
        // Cambiar placeholder de input referenciando el atributo
        name.setAttribute("placeholder", "debe ingresar su nombre")
    }else{
        error_name.classList.add("escondido")
    }

    // Valido que el apellido fue ingresado
    if( last_name.value == ""){
        errors.push("Debe ingresar el apellido")
        error_last_name.innerHTML = "Debe ingresar el apellido"
        error_last_name.classList.remove("escondido")
    }else{
        error_last_name.classList.add("escondido")
    }
    // Valido que el mesaje fue ingresado
    if(message.value == ""){
        errors.push("Debe ingresar el mensaje")
        error_message.innerHTML = "Debe ingresar un mensaje"
        error_message.classList.remove("escondido")
    }else{
        error_message.classList.add("escondido")
    }

    errors.forEach(error => {
        console.log(error)
    });

    if( errors.length > 0){
        return true
    }else{
        return false
    }
}