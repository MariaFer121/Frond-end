let pacientes = []
let guardar = () => {
    let name = document.getElementById("name1")
    let last_name = document.getElementById("last_name1")
    let last_mother_name = document.getElementById("last_mother_name1")
    let age = document.getElementById("age1")
    let genero = document.getElementById("inputGroupSelect01")
    let doctor = document.getElementById("inputGroupSelect02")

    let error_name = document.getElementById("error_name")
    let error_last_name = document.getElementById("error_last_name")
    let error_last_mother_name = document.getElementById("error_last_mother_name")
    let error_age = document.getElementById("error_age")
    let error_genero = document.getElementById("error_genero")
    let error_doctor = document.getElementById("error_doctor")
    let error_pacientes = document.getElementById("error_pacientes")

}
function Validacion(name, last_name, last_mother_name, age, genero, doctor, error_name, error_last_name, error_last_mother_name, error_age, error_genero, error_doctor) {
    let errors = []

    if (name.value == "") {
        errors.push("Debe ingresar el nombre")
        error_name.classList.remove("error")
    } else {
        error_name.classList.add("error")
    }

    if (last_name.value == "") {
        errors.push("Debe ingresar el apellido")
        error_last_name.classList.remove("error")
    } else {
        error_last_name.classList.add("error")
    }

    if (last_mother_name.value == "") {
        errors.push("Debe ingresar el segundo apellido")
        error_last_mother_name.classList.remove("error")
    } else {
        error_last_mother_name.classList.add("error")
    }

    if (age.value == "") {
        errors.push("Debe ingresar la edad")
        error_age.classList.remove("error")
    } else {
        error_age.classList.add("error")
    }

    if (genero.value == "0") {
        errors.push("Debe seleccionar el genero")
        error_genero.classList.remove("error")
    } else {
        error_genero.classList.add("error")
    }

    if (doctor.value == "0") {
        errors.push("Debe seleccionar el doctor")
        error_doctor.classList.remove("error")
    } else {
        error_doctor.classList.add("error")
    }

    if (errors.length > 0) {
        return true
    } else {
        return false
    }
}