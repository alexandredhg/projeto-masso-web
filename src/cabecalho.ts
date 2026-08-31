export const carregarCabecalho = async() => {
    const cabecalho = document.getElementById("cabecalho") as HTMLDivElement;

    //Carregar o arquivo cabecalho.html.
    const conteudo = await fetch("cabecalho.html");

    //converter o conteudo do arquivo para texto.
    const html = await conteudo.text();
    
    //inserir o html no rodapé.
    cabecalho.innerHTML = html; 
    
};
carregarCabecalho();
