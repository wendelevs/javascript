function verificar() {
    var n1 = document.getElementById('txtn1').value;
    var n2 = document.getElementById('txtn2').value;
    var res = document.getElementById('res');
    var soma = Number(n1) + Number(n2);
    res.innerHTML = `A soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é igual a <strong>${soma}</strong>`
}