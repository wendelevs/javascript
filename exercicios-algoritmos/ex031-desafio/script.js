function verificar() {
    var txtUser = document.querySelector('input#txtUser');
    var res = document.querySelector('div#res');
    if (txtUser = 'pedra') {
        res.innerHTML = '<strong>Papel</strong>';
    } else if (txtUser == 'papel') {
        res.innerHTML = '<strong>Tesoura</strong>';
    } else if(txtUser == 'tesoura') {
        res.innerHTML = '<strong>Pedra</strong>';
    }
}