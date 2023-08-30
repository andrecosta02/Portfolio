

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede que o formulário seja enviado

    // Obtém os valores dos campos
    var nome = document.getElementById('iname').value;
    var sobrenome = document.getElementById('isobrenome').value;
    const email = document.getElementById('iemail').value;


    // console.log(nome[0].toUpperCase() + nome.substring(1));

    nome = nome[0].toUpperCase() + nome.substring(1);
    sobrenome = sobrenome[0].toUpperCase() + sobrenome.substring(1);

    // Envia os valores para o console
    console.log(nome, sobrenome, ',',  email);
    // console.log('Sobrenome:', sobrenome);
});





function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
        
    } else {
        itens.style.display = 'block'

    }
    
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}