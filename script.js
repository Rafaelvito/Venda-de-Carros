function validarFormulario() {
    var dataDevolucao = document.getElementById('dataDevolucao').value;
    var regiao = document.getElementById('regiao').value;
    var mensagemErro = document.getElementById('mensagemErro');
    var mensagemSucesso = document.getElementById('mensagemSucesso');

    if (dataDevolucao === '' || regiao === '') {
        mensagemErro.innerText = 'Formulário incompleto.';
        mensagemSucesso.innerText = '';
        return false;
    }

    mensagemErro.innerText = '';
    mensagemSucesso.innerText = 'Formulário enviado com sucesso!';
    return true;
}
