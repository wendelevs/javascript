function verificar() {
    var numberUser = document.querySelector('input#numberUser').value;
    var resdobroNumber = document.querySelector('p#resdobroNumber');
    var restercaNumber = document.querySelector('p#restercaNumber');
    var dobroNumber = Number(numberUser) * 2;
    var tercaNumber = Number(numberUser) / 3;
    resdobroNumber.innerHTML = `O dobro de <strong>${numberUser}</strong> é <strong>${dobroNumber}</strong>`;
    restercaNumber.innerHTML = `A terça parte de <strong>${numberUser}</strong> é <strong>${tercaNumber.toFixed(4)}</strong>`;
}