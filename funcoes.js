function validar (login, senha) {
    if (login == "joel" && senha == "123")
        return true;
    return false
}

exports.validarUsuario = validar;