function verificar() {
    var distM = document.querySelector('input#distM').value;
    var resdistM = document.querySelector('p#resdistM');
    var resdistKm = document.querySelector('p#resdistKm');
    var resdistCm = document.querySelector('p#resdistCm');
    var resdistMm = document.querySelector('p#resdistMm');
    var distKm = Number(distM) / 1000;
    var distCm = Number(distM) * 100;
    var distMm = Number(distM) * 1000;
    resdistM.innerHTML = `A ditância de <strong>${distM}</strong><strong>m</strong> corresponde a:`;
    resdistKm.innerHTML = `<strong>${distKm}</strong><strong>Km</strong>`;
    resdistCm.innerHTML = `<strong>${distCm}</strong><strong>Cm</strong>`;
    resdistMm.innerHTML = `<strong>${distMm}</strong><strong>mm</strong>`;
}