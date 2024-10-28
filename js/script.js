function verificarTermos(event) {
    var termosCheckbox = document.getElementById('termos');
    var errorMessage = document.getElementById('termos-error');
    
    if (!termosCheckbox.checked) {
        errorMessage.style.display = 'block'; 
        event.preventDefault(); 
    } else {
        errorMessage.style.display = 'none';  
        window.location.href = 'https://bit.ly/4dXyV9x'; 
    }
}

function validarFormulario(event) {
    event.preventDefault(); 

    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var celular = document.getElementById('celular');
    var estado = document.getElementById('estado');
    var cidade = document.getElementById('cidade');
    var profissao = document.getElementById('profissao');
    var termos = document.getElementById('termos');
    var valid = true;

    
    document.querySelectorAll('.error-message').forEach(function(msg) {
        msg.style.display = 'none';
    });

    
    if (nome.value.trim() === "") {
        mostrarErro('nome', 'Por favor, insira seu nome.');
        valid = false;
    }

    
    if (email.value.trim() === "" || !/\S+@\S+\.\S+/.test(email.value)) {
        mostrarErro('email', 'Por favor, insira um e-mail válido.');
        valid = false;
    }

    
    if (!/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(celular.value)) {
        mostrarErro('celular', 'Por favor, insira um número de celular válido.');
        valid = false;
    }

    
    if (estado.value.trim() === "") {
        mostrarErro('estado', 'Por favor, insira o estado.');
        valid = false;
    }

    
    if (cidade.value.trim() === "") {
        mostrarErro('cidade', 'Por favor, insira a cidade.');
        valid = false;
    }

    
    if (profissao.value.trim() === "") {
        mostrarErro('profissao', 'Por favor, insira sua profissão.');
        valid = false;
    }

    
    if (!termos.checked) {
        mostrarErro('termos', 'Você precisa aceitar os termos antes de prosseguir.');
        valid = false;
    }


    if (valid) {
        event.target.submit();
    }
}

function mostrarErro(campoId, mensagem) {
    var campo = document.getElementById(campoId);
    var errorSpan = campo.parentElement.querySelector('.error-message');
    errorSpan.textContent = mensagem;
    errorSpan.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', validarFormulario);
});
