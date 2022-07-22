function verificar() {
    var alturaParede = document.querySelector('input#alturaParede').value;
    var larguraParede = document.querySelector('input#larguraParede').value;
    var res = document.querySelector('div#res');
    var metrosQuadrados = Number(alturaParede) * Number(larguraParede);
    var quantidadeTinta = Number(metrosQuadrados) * 0.5;
    res.innerHTML = `A parede possui <strong>${metrosQuadrados}m²</strong> e precisará de <strong>${quantidadeTinta}L</strong> de tinta.`;
}