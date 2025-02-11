"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const botaoTrocarImagem = document.getElementById('trocar-imagem');
    const imagens = [
        './1.jpg',
        './2.webp',
        './3.jpg',
        './4.jpg',
        './5.jpg'
    ];

    let indiceAtual = 0;

    function trocaImagem() {
        indiceAtual = (indiceAtual + 1) % imagens.length; // Avança para a próxima imagem

        // Opção 1: Modificando diretamente o background do body
        document.body.style.backgroundImage = `url(${imagens[indiceAtual]})`;

        // Opção 2: Modificando a variável CSS global (descomente se preferir)
        // document.documentElement.style.setProperty('--imagem-fundo', `url(${imagens[indiceAtual]})`);
    }

    if (botaoTrocarImagem) {
        botaoTrocarImagem.addEventListener('click', trocaImagem);
    } else {
        console.error("Botão não encontrado!");
    }
});

                        