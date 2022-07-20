function verificar() {
    var nome = document.getElementById('txtname')
    var sal = document.getElementById('txtsal')
    var n = Number(sal.value)
    var res = document.getElementById('res')
    res.innerHTML = `O funcionário <strong>${nome.value}</strong> tem um salário de <strong>${n.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</strong> em Junho.`
}