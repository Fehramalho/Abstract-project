document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos dos botões e do menu
    var lupa = document.querySelector('.lupa');
    var close = document.querySelector('.close');
    var search = document.querySelector('.search');
    
    // Adiciona o evento de clique ao botão de menu
    lupa.addEventListener('click', function () {
        search.style.display = 'block';
    });
    
    // Adiciona o evento de clique ao botão de fechar
    close.addEventListener('click', function () {
        search.style.display = 'none';
    });
});