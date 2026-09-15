// Selecionando os elementos do DOM com tipagem correta
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const botaoFechar = document.getElementById('fechar');
const itensGaleria = document.querySelectorAll('.galeria-item');
// Adiciona o evento de clique em cada imagem da galeria
itensGaleria.forEach((img) => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex'; // Mostra o modal
        modalImg.src = img.src; // Passa o caminho da foto para o modal
    });
});
// Fecha o modal ao clicar no botão de fechar (X)
botaoFechar.addEventListener('click', () => {
    modal.style.display = 'none';
});
// Fecha o modal se o usuário clicar no fundo escuro (fora da imagem)
modal.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        modal.style.display = 'none';
    }
});
export {};
//# sourceMappingURL=ampliarFoto.js.map