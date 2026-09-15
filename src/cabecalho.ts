export const carregarCabecalho = async() => {
    const cabecalho = document.getElementById("cabecalho") as HTMLDivElement;

    //Carregar o arquivo cabecalho.html.
    const conteudo = await fetch("cabecalho.html");

    //converter o conteudo do arquivo para texto.
    const html = await conteudo.text();
    
    //inserir o html no rodapé.
    cabecalho.innerHTML = html;
    
    //tratamento para focar o conteúdo do conteúdo principal
    if (window.location.hash === "#conteudo-principal") {
        const elemento = document.getElementById("conteudo-principal");

        elemento?.scrollIntoView({ block: "start" });
        elemento?.focus();

    }    
    
};
carregarCabecalho();
