document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos dos botões e do menu
    var btnMenu = document.querySelector('.btn-menu');
    var btnClose = document.querySelector('.btn-close');
    var menu = document.querySelector('.menu');
    
    // Adiciona o evento de clique ao botão de menu
    btnMenu.addEventListener('click', function () {
        menu.style.display = 'block';
    });
    
    // Adiciona o evento de clique ao botão de fechar
    btnClose.addEventListener('click', function () {
        menu.style.display = 'none';
    });
});