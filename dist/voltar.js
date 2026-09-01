var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
// script.ts
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    const btnVoltarTopo = document.getElementById("btnVoltarTopo");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        btnVoltarTopo.style.display = "block";
    }
    else {
        btnVoltarTopo.style.display = "none";
    }
}
(_a = document.getElementById("btnVoltarTopo")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    window.scrollTo(0, 0);
});
/*RODAPÉ*/
export const carregarRodape = () => __awaiter(void 0, void 0, void 0, function* () {
    const rodape = document.getElementById("rodape");
    //Carregar o arquivo rodape.html.
    const conteudo = yield fetch("rodape.html");
    //converter o conteudo do arquivo para texto.
    const html = yield conteudo.text();
    //inserir o html no rodapé.
    rodape.innerHTML = html;
});
carregarRodape();
//# sourceMappingURL=voltar.js.map