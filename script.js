function mudarAcessorio(tipo, caminho) {
    var elemento;
    if (tipo === 'avatar') {
        elemento = document.getElementById('boneco');
        elemento.src = caminho;
        localStorage.setItem('avatar', caminho); // Salva o caminho do avatar

    } else if (tipo === 'cabeca') {
        elemento = document.getElementById('acessorio-cabeca');
        elemento.style.display = 'block'; // Mostra a imagem do acessório da cabeça
        elemento.src = caminho;
        localStorage.setItem('cabeca', caminho); // Salva o caminho do cabelo
    } else if (tipo === 'corpo') {
        elemento = document.getElementById('acessorio-corpo');
        elemento.style.display = 'block'; // Mostra a imagem do acessório do corpo
        elemento.src = caminho;
        localStorage.setItem('corpo', caminho); // Salva o caminho do casaco
        
    }
}

function restaurarPadrao() {
    document.getElementById('boneco').src = 'img/avatar1.png';
    document.getElementById('acessorio-cabeca').src = '';
    document.getElementById('acessorio-corpo').src = '';
    document.getElementById('acessorio-cabeca').style.display = 'none'; // Esconde a imagem do acessório da cabeça
    document.getElementById('acessorio-corpo').style.display = 'none'; // Esconde a imagem do acessório do corpo

    // Limpa as informações salvas no localStorage
    localStorage.removeItem('avatar');
    localStorage.removeItem('cabeca');
    localStorage.removeItem('corpo');
}

window.onload = function() {
    // Recupera os dados do localStorage e aplica ao avatar e acessórios
    const avatar = localStorage.getItem('avatar');
    const cabeca = localStorage.getItem('cabeca');
    const corpo = localStorage.getItem('corpo');

    if (avatar) {
        document.getElementById('boneco').src = avatar;
    }
    if (cabeca) {
        const elementoCabeca = document.getElementById('acessorio-cabeca');
        elementoCabeca.src = cabeca;
        elementoCabeca.style.display = 'block';
    }
    if (corpo) {
        const elementoCorpo = document.getElementById('acessorio-corpo');
        elementoCorpo.src = corpo;
        elementoCorpo.style.display = 'block';
    }
};