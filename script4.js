function validarFormulario() {
    const cep = document.getElementById('cep').value;
    const endereco = document.getElementById('endereco').value;
    const parcelas = document.getElementById('parcelas').value;
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;

    const formularioCompleto = cep && endereco && parcelas && nome && sobrenome;

    const mensagem = document.getElementById('mensagem');

    if (formularioCompleto) {
        mensagem.style.color = '#4caf50';
        mensagem.textContent = `Formulário preenchido com sucesso! Venha buscar seu carro na loja mais próxima. Parcelas: ${parcelas}`;
    } else {
        mensagem.style.color = '#f44336';
        mensagem.textContent = 'Cadastro incompleto. Preencha todos os campos.';
    }
}
