
function validateGameData(data) {

    const errors = {};

    if (!data.nombre.trim()) {
        errors.nombre = "Ingresá el nombre del juego.";
    } else if (data.nombre.trim().length < 2) {
        errors.nombre = "El nombre debe tener al menos 2 caracteres.";
    }

    if (!data.plataforma) {
        errors.plataforma = "Seleccioná una plataforma.";
    }

    if (!data.genero) {
        errors.genero = "Seleccioná un género.";
    }

    if (!data.estado) {
        errors.estado = "Seleccioná un estado.";
    }

    const hours = Number(data.horasJugadas);

    if (
        data.horasJugadas !== "" &&
        (hours < 0 || hours > 99999)
    ) {
        errors.horasJugadas =
            "Las horas deben estar entre 0 y 99999.";
    }

    if (!data.fechaAgregado) {
        errors.fechaAgregado = "Seleccioná una fecha.";
    }

    return errors;
}


// Permite utilizar la función desde los tests de Node.js.
if (typeof module !== "undefined") {
    module.exports = { validateGameData };
}
