var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*RODAPÉ*/
export const carregarRodapeVoltarTopo = () => __awaiter(void 0, void 0, void 0, function* () {
    const rodapeVoltarTopo = document.getElementById("rodape");
    //Carregar o arquivo rodape.html.
    const conteudo = yield fetch("rodapeVoltarTopo.html");
    //converter o conteudo do arquivo para texto.
    const html = yield conteudo.text();
    //inserir o html no rodapé.
    rodapeVoltarTopo.innerHTML = html;
});
carregarRodapeVoltarTopo();
function scrollFunction() {
    const btnVoltarTopo = document.getElementById("btnVoltarTopo");
    if (btnVoltarTopo) {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            btnVoltarTopo.style.display = "block";
        }
        else {
            btnVoltarTopo.style.display = "none";
        }
    }
}
//# sourceMappingURL=rodapeVoltarTopo.js.map