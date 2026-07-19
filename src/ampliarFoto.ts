// Selecionando os elementos do DOM com tipagem correta
const modal = document.getElementById('modal') as HTMLDivElement;
const modalImg = document.getElementById('modal-img') as HTMLImageElement;
const botaoFechar = document.getElementById('fechar') as HTMLSpanElement;
const itensGaleria = document.querySelectorAll('.galeria-item') as NodeListOf<HTMLImageElement>;

// Adiciona o evento de clique em cada imagem da galeria
itensGaleria.forEach((img) => {
    img.addEventListener('click', (): void => {
        modal.style.display = 'flex';     // Mostra o modal
        modalImg.src = img.src;           // Passa o caminho da foto para o modal
    });
});

// Fecha o modal ao clicar no botão de fechar (X)
botaoFechar.addEventListener('click', (): void => {
    modal.style.display = 'none';
});

// Fecha o modal se o usuário clicar no fundo escuro (fora da imagem)
modal.addEventListener('click', (evento: MouseEvent): void => {
    if (evento.target === modal) {
        modal.style.display = 'none';
    }
});