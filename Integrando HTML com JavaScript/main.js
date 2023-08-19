form =  document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefaut();

    const nomeBeneficiario = document.getElementById ('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById ('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = 'Montante de: $(ValorDeposito) depo para o cliente: $(nomeBeneficiario) - conta: $(numeroContaBeneficiario)';

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        alert(mensagemSucesso);

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        alert("O nome não está completo"); 
    }
})

console,log(form);