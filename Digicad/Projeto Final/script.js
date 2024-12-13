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

// function eventos
// esse foi punk para centralizar demorei para encontrar um e entender
function eventos(){
    const popupCenter = ({
        url, title, w, h
      }) => {
        const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
        const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        const systemZoom = width / window.screen.availWidth;
        const left = (width - w) / 2 / systemZoom + dualScreenLeft
        const top = (height - h) / 2 / systemZoom + dualScreenTop
        const newWindow = window.open(url, title,
          `
            scrollbars=yes,
            width=${w / systemZoom}, 
            height=${h / systemZoom}, 
            top=${top}, 
            left=${left}
            `
        )
        if (window.focus) {
          newWindow.focus();
        }
      }
      popupCenter({
        url: 'https://th.bing.com/th/id/OIP.yYBFzWZ0R970KK2bJhwO9AHaEi?rs=1&pid=ImgDetMain',
        title: 'Evento',
        w: 500,
        h: 400
      });
    
}