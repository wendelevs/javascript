function calcular() {
    var n1 = document.querySelector('input#n1').value;
    var n2 = document.querySelector('input#n2').value;
    var res = document.querySelector('div#res');
    var soma = Number(n1) + Number(n2);
    var media = Number(soma) / 2;
    res.innerHTML = `A média entre <strong>${n1}</strong> e <strong>${n2}</strong> é igual a <strong>${media}</strong>`;
}