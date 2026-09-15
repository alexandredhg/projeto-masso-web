var _a;
const btnModoEscuro = document.createElement('button');
btnModoEscuro.classList.add("switch");
btnModoEscuro.innerHTML = "Modo Escuro";
//btnTop.textContent = "Modo Escuro";
(_a = document.querySelector('header')) === null || _a === void 0 ? void 0 : _a.prepend(btnModoEscuro);
//Comando o Botão Aparece no Final da Tela
//document.body.appendChild(btnModoEscuro);
btnModoEscuro.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
export {};
//# sourceMappingURL=modoEscuro.js.map