/*
O que precisamos?
 - Quando passar o mouse em cima do personagem na lista, temos de adicionar a borda azul de seleção na imagem, o nome e o texto grande do personagem que esta selecionado. 

 OBJETIVO 1 - Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
    Passo 1 - Pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em sima de um deles.
    Passo 2 - Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse.    
    Passo 3 - Verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele.

OBJETIVO 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do perdonagem grande.
    Passo 1 - Pegar o elemento do personagem garnde para adicionar as informações nele
    Passo 2 - Alterar a imagem do personagem gramde
    Passo 3 - Alterar o nom e do personagem grande
    Passo 4 - Alterar a descrição do personagem grande
*/


//OBJETIVO 1 - Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//Passo 1 - Pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles.>

const personagens = document.querySelectorAll('.personagem');

//Passo 2 - Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse.    

personagens.forEach((personagem)=> {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
//Passo 3 - Verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele.

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove ('selecionado');

        personagem.classList.add ('selecionado');


//OBJETIVO 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do perdonagem grande.
//Passo 1 - Pegar o elemento do personagem garnde para adicionar as informações nele
        const imagemPersonagemGradnde = document.querySelector('.personagem-grande');

//Passo 2 - Alterar a imagem do personagem gramde

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGradnde.src = `./src/imagens/card-${idPersonagem}.png`; 
//Passo 3 - Alterar o nom e do personagem grande
  
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
//Passo 4 - Alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})