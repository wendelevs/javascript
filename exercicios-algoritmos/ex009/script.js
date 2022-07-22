function verificar() {
    var dinheiroUser = document.querySelector('input#dinheiroUser').value;
    var res = document.querySelector('div#res');
    var qntdDolar = Number(dinheiroUser) / 5.50;
    res.innerHTML = `Você pode comprar <strong>$${qntdDolar.toFixed(2)}</strong>`;
}