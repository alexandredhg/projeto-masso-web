const btnModoEscuro = document.createElement('button');
btnModoEscuro.classList.add("switch");
btnModoEscuro.innerHTML = "Modo Escuro";
//btnTop.textContent = "Modo Escuro";

document.querySelector('header')?.prepend(btnModoEscuro);


//Comando o Botão Aparece no Final da Tela
//document.body.appendChild(btnModoEscuro);

btnModoEscuro.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

