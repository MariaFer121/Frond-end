let automovil = []

let guardar = () => {
    let patente = document.getElementById("patente")
    let año = document.getElementById("año")
    let modelo = document.getElementById("inputGroupSelect01")
    let marca = document.getElementById("inputGroupSelect02")

    let error_patente = document.getElementById("error_patente")
    let error_año = document.getElementById("error_año")
    let error_modelo = document.getElementById("error_modelo")
    let error_marca = document.getElementById("error_marca")



    if (validarFormulario(patente, año, modelo, marca, error_patente, error_año, error_modelo, error_marca)) {} else {
        var input = {
            patente: patente.value,
            año: año.value,
            modelo: modelo.value,
            marca: marca.value
        }
        let elementos = document.getElementsByClassName("form")
        let limpiar = () => {
            for (let i = 0; i < elementos.length; i++) {
                elementos[i].value = ""
                elementos[2].value = "0"
                elementos[3].value = "0"
            }
        }

        automovil.push(input)
        alert("AGREGADO CON EXITO")
        limpiar()
        console.log(automovil)

        let elemento_repuesta = document.getElementById("respuesta")
        let cadena = " " + objeto.patente + " " + objeto.año + " " + objeto.modelo + " " + objeto.marca + " "
        var addRow = document.createElement("TR")
        addRow.innerHTML = cadena
        elemento_repuesta.appendChild(addRow)
    }
}


function validarFormulario(patente, año, modelo, marca, error_patente, error_año, error_modelo, error_marca) {
    let errors = []

    if (patente.value == "") {
        errors.push("Debe ingresar la patente")
        error_patente.classList.remove("error")
    } else {
        error_patente.classList.add("error")
    }

    if (año.value == "") {
        errors.push("Debe ingresar el año")
        error_año.classList.remove("error")
    } else {
        error_año.classList.add("error")
    }

    if (modelo.value == "0") {
        errors.push("Debe seleccionar el modelo")
        error_modelo.classList.remove("error")
    } else {
        error_modelo.classList.add("error")
    }

    if (marca.value == "0") {
        errors.push("Debe seleccionar la marca")
        error_marca.classList.remove("error")
    } else {
        error_marca.classList.add("error")
    }

    if (errors.length > 0) {
        return true
    } else {
        return false
    }
}