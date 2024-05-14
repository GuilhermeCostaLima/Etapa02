let button = document.getElementById('button1');

function selecionar(click) {
    button.style.border = '2px solid transparent';

    click.style.border = '3px solid blue';

    button = click;
}

function abrelink(url) {
    //sobrepsoição
    document.getElementById('overlay').style.display = 'block';

    const modalContent = document.getElementById('page-content');
    modalContent.style.display = 'block';

    modalContent.innerHTML = `<iframe src="${url}" style="width: 100%; height: 100%; border: none;"></iframe>`;

}

function fechalink() {
    // tira a sobreposição
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('page-content').style.display = 'none';

    // tira o conteudo
    document.getElementById('page-content').innerHTML = '';
}

// realiza a troca da da imagem
function escolherCor(cor) {

    var imagepath;
    switch (cor) {
        case 'p1': imagepath = '/images/p1.png';
            break;
        case 'a1': imagepath = '/images/a1.png';
            break;
        case 'b1': imagepath = '/images/b1.png';
            break;
        default: imagepath = '/images/b1/png';

    }
    document.getElementById('imagemCor').src = imagepath;
}
