function formulario() {  
    // Redireciona para o formulario 
    window.location.href = "./form.html"; 
}

function voltar() {
    // volta para a pag inicial
    window.location.href = "./index.html"; 
}

function msg() {
    // declarando variveis
    const nome = document.getElementById('nome').value; 
    const email = document.getElementById('email').value; 
    const telefone = document.getElementById('telefone').value; 
    const curso = document.getElementById('curso').value; 
    // verifica se os campos foram preenchidos
    if (nome && email && telefone && curso) { 
        // msg de sucesso
        alert("Formulário enviado com sucesso")
    } else { 
        // msg de erro 
        alert("Não foi possivel enviar o Formulário")
    }
}