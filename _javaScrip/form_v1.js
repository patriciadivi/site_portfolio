@charset "UTF-8";

function validar() {
    var nome = formuser.nome.value;
    var email = formuser.email.value;
    var senha = formuser.senha.value;

    if (nome == "") {
        alert ('Preencha o campo nome.');
        formuser.nome.focus();
        return false;
    }

    if (email == "" || email.indexOf('@') == -1 ) {
        alert('Preencha o campo E-mail.');
        return false;
    }

    if (senha == "" || senha.length <= 5) {
        alert('Preencha o campo senha com minimo 6 caracteres');
        formuser.senha.focus();
        return false;
    }
}