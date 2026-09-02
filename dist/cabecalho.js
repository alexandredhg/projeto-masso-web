var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const carregarCabecalho = () => __awaiter(void 0, void 0, void 0, function* () {
    const cabecalho = document.getElementById("cabecalho");
    //Carregar o arquivo cabecalho.html.
    const conteudo = yield fetch("cabecalho.html");
    //converter o conteudo do arquivo para texto.
    const html = yield conteudo.text();
    //inserir o html no rodapé.
    cabecalho.innerHTML = html;
    //tratamento para focar o conteúdo do conteúdo principal
    if (window.location.hash === "#conteudo-principal") {
        const elemento = document.getElementById("conteudo-principal");
        elemento === null || elemento === void 0 ? void 0 : elemento.scrollIntoView({ block: "start" });
        elemento === null || elemento === void 0 ? void 0 : elemento.focus();
    }
});
carregarCabecalho();
//# sourceMappingURL=cabecalho.js.map