//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';
//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'escolha um número entre 1 e 10';
let listaNumeros =[];
let numeroMax = 10000;
let tentativas = 1;
function addTexto(tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;}
function textoInicial() {
    addTexto('h1','Jogo do Número Secreto');
    addTexto('p',`escolha um número entre 1 e ${numeroMax}`);}

textoInicial();

function gerarAleatorio(){
    let numeroSorteado = parseInt(Math.random()*numeroMax+1);
    let quantidadeElementosLista = listaNumeros.length;
    if (quantidadeElementosLista == numeroMax){
        listaNumeros = [];
    }
    if (listaNumeros.includes(numeroSorteado)){
        return gerarAleatorio();
    } else{
        listaNumeros.push(numeroSorteado);
        console.log(listaNumeros);
        return numeroSorteado;
    }
}
let numeroSecreto = gerarAleatorio();
console.log(numeroSecreto)

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    limparCampo();
    textoInicial();
    numeroSecreto = gerarAleatorio();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function verificarChute() {
    chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTent = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTent = `você descobriu o número secreto com ${tentativas} ${palavraTent}`;
        addTexto('h1','acertou!! :)');
        addTexto('p',mensagemTent);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > chute){
            addTexto('h1','errou :/');
            addTexto('p','o número secreto é maior');}
        else {
            addTexto ('h1','errou :/');
            addTexto ('p','o número secreto é menor'); }  }
    tentativas++;
    limparCampo();}

