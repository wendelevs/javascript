function verificar() {
    var qntdDia = document.querySelector('input#qntdDia').value;
    var qntdAnos = document.querySelector('input#qntdAnos').value;
    var res = document.querySelector('div#res');
    var minPerdidos = (Number(qntdDia) * 10) * Number(qntdAnos);
    var diasPerdidos = Number(minPerdidos) / 1440;
    res.innerHTML = `Você já perdeu <strong>${diasPerdidos.toFixed(2)} dias</strong> de vida.`
}