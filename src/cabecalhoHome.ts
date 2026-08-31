export const carregarCabecalhoHome = async() => {
    const cabecalhoHome = document.getElementById("cabecalhoHome") as HTMLDivElement;

    //Carregar o arquivo cabecalho.html.
    const conteudo = await fetch("cabecalhoHome.html");

    //converter o conteudo do arquivo para texto.
    const html = await conteudo.text();
    
    //inserir o html no rodapé.
    cabecalhoHome.innerHTML = html; 
    
};
carregarCabecalhoHome();
