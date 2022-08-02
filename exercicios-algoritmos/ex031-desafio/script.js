function verificar() {
    var txtUser = document.querySelector('input#txtUser');
    var res = document.querySelector('div#res');
    var retorno = '';
    if (txtUser == 'Pedra') {
        window.alert('Papel');
    } else if (txtUser == 'Papel') {
        window.alert('Tesoura');
    } else {
        window.alert('Pedra');
    }
}