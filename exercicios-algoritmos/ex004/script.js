function verificar() {
    var n1 = document.getElementById('txtn1')
    var n2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var soma = n1 + n2
    res.innerHTML = `A soma entre <strong>${n1.value}</strong> e <strong>${n2.value}</strong> é igual a <strong>${soma.value}</strong>`
}