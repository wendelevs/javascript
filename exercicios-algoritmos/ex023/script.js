function verificar() {
    var fsex = document.getElementsByName('radsex');
    var nome = document.querySelector('input#txtnome').value;
    var valorCompras = document.querySelector('input#valorCompras').value;
    var genero = ''
    var res = document.querySelector('div#res');
    if (fsex[0].checked) {
        genero = 'Homem';
        var desconto = Number(valorCompras) * 0.05;
        var valorFinal = Number(valorCompras) - Number(desconto);
    } else {
        genero = 'Mulher';
        var desconto = Number(valorCompras) * 0.013;
        var valorFinal = Number(valorCompras) - Number(desconto);
    }
    res.innerHTML = `Olá, <strong>${nome}</strong>. Detectamos que você é um(a) <strong>${genero}</strong>, sendo assim, você recebeu um desconto e o valor final de sua compra é de <strong>${valorFinal}</strong>.`
}