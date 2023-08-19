form =  document.getElementById("Form deposito");

function validanome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener("submit", function(e) {
    e.preventDefaut();
})

console,log(form);