function verificar() {
    var notaUm = document.querySelector('input#notaUm').value;
    var notaDois = document.querySelector('input#notaDois').value;
    var res = document.querySelector('div#res');
    var retorno = '';
    var soma = Number(notaUm) + Number(notaDois);
    var media = Number(soma) / 2;
    if (media < 5.0) {
        var retorno = 'REPROVADO';
    } else if (media > 5.0 && media < 7.0) {
        var retorno = 'RECUPERAÇÂO';
    } else {
        var retorno = 'APROVADO';
    }
    res.innerHTML = `A sua média é <strong>${media.toFixed(1)}</strong> e você está <strong>${retorno}</strong>`;
}