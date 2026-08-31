var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const carregarCabecalhoHome = () => __awaiter(void 0, void 0, void 0, function* () {
    const cabecalhoHome = document.getElementById("cabecalhoHome");
    //Carregar o arquivo cabecalho.html.
    const conteudo = yield fetch("cabecalhoHome.html");
    //converter o conteudo do arquivo para texto.
    const html = yield conteudo.text();
    //inserir o html no rodapé.
    cabecalhoHome.innerHTML = html;
});
carregarCabecalhoHome();
//# sourceMappingURL=cabecalhoHome.js.map