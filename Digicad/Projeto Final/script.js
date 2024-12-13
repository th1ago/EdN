// function para acessar o form
function formulario() {  
    // Redireciona para o formulario 
    window.location.href = "./form.html"; 
}

// function para voltar a pagina inicial
function voltar() {
    // volta para a pag inicial
    window.location.href = "./index.html"; 
}

// funciotn de msg do form
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

// funciotn de saber mais
function saibaMais() {
    // Redireciona para o saiba mais 
    window.location.href = "./cursos.html"; 
}

// function para enviar email
function enviarEmail() {
    const email = 'destinatario@example.com';
    const subject = 'Assunto do Email';
    const body = 'Corpo do email aqui.';

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}