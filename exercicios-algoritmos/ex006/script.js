function verificar() {
    var numberUser = document.querySelector('input#numberUser').value;
    var resAnt = document.querySelector('p#resAnt');
    var resSuc = document.querySelector('p#resSuc');
    var antNumber = Number(numberUser) - 1;
    var sucNumber = Number(numberUser) + 1;
    resAnt.innerHTML = `O antecessor de <strong>${numberUser}</strong> é <strong>${antNumber}</strong>`;
    resSuc.innerHTML = `O sucessor de <strong>${numberUser}</strong> é <strong>${sucNumber}</strong>`;
}