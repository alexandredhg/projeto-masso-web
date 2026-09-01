var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const carregarvoltarTopo = () => __awaiter(void 0, void 0, void 0, function* () {
    const voltarTopo = document.getElementById("voltarTopo");
    if (!voltarTopo) {
        console.warn("Elemento container #VoltarTopo não encontrado na página.");
        return;
    }
    try {
        // Carrega o arquivo HTML com a estrutura do botão
        const conteudo = yield fetch("voltarTopo.html");
        if (!conteudo.ok)
            throw new Error("Erro ao carregar o arquivo HTML");
        const html = yield conteudo.text();
        voltarTopo.innerHTML = html;
        // Configura o evento e estado inicial
        configurarBotaoTopo();
        scrollFunction();
    }
    catch (erro) {
        console.error("Falha ao carregar o botão voltar ao topo:", erro);
    }
});
function configurarBotaoTopo() {
    const btnVoltarTopo = document.getElementById("btnVoltarTopo");
    btnVoltarTopo === null || btnVoltarTopo === void 0 ? void 0 : btnVoltarTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
// Controle de exibição durante o scroll
window.addEventListener("scroll", () => {
    scrollFunction();
});
function scrollFunction() {
    const btnVoltarTopo = document.getElementById("btnVoltarTopo");
    if (!btnVoltarTopo)
        return;
    // Exibe o botão apenas se o usuário rolar mais de 200px
    const posicaoScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    if (posicaoScroll > 200) {
        btnVoltarTopo.style.display = "block";
    }
    else {
        btnVoltarTopo.style.display = "none";
    }
}
// Inicializa a função
carregarvoltarTopo();
//# sourceMappingURL=voltarTopo.js.map