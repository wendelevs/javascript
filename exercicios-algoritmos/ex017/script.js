function verificar() {
    var veloUser = document.querySelector('input#veloUser').value;
    var veloMax = 80;
    var valorMulta = 5;
    var res = document.querySelector('div#res');
    if (veloUser > veloMax) {
        var veloUltrapassado = Number(veloUser) - Number(veloMax);
        var valorMultaUser = Number(veloUltrapassado) * Number(valorMulta);
        res.innerHTML = `A velocidade permitida era de até <strong>80Km/h</strong> e você passou a <strong>${veloUser}Km/h</strong>, o valor da multa é de <strong>${valorMultaUser.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</strong>.`;   
    } else {
        res.innerHTML = `Você não foi multado.`;
    }
}