let pontosContagem = 0;
let pontosUsuario = document.querySelector('#pontosUsuario');

let resposta1 = document.querySelector('#resposta1');
let btnResposta1 = document.querySelector('#btnResposta1');
let resposta2 = document.querySelector('#resposta2');
let btnResposta2 = document.querySelector('#btnResposta2');
let resposta3 = document.querySelector('#resposta3');
let btnResposta3 = document.querySelector('#btnResposta3');
let resposta4 = document.querySelector('#resposta4');
let btnResposta4 = document.querySelector('#btnResposta4');
let resposta5 = document.querySelector('#resposta5');
let btnResposta5 = document.querySelector('#btnResposta5');

btnResposta1.addEventListener('click', () => {
    if (resposta1.value == 'c') {
        pontosContagem++;
        pontosUsuario.textContent = `${pontosContagem}`;
        btnResposta1.style.display = 'none';
        resposta1.style.display = 'none';
    }
} )

btnResposta2.addEventListener('click', () => {
    if (resposta2.value == 'b') {
        pontosContagem++;
        pontosUsuario.textContent = `${pontosContagem}`;
        btnResposta2.style.display = 'none';
        resposta2.style.display = 'none';
    }
} )

btnResposta3.addEventListener('click', () => {
    if (resposta3.value == 'c') {
        pontosContagem++;
        pontosUsuario.textContent = `${pontosContagem}`;
        btnResposta3.style.display = 'none';
        resposta3.style.display = 'none';
    }
} )

btnResposta4.addEventListener('click', () => {
    if (resposta4.value == 'a') {
        pontosContagem++;
        pontosUsuario.textContent = `${pontosContagem}`;
        btnResposta4.style.display = 'none';
        resposta4.style.display = 'none';
    }
} )

btnResposta5.addEventListener('click', () => {
    if (resposta5.value == 'a') {
        pontosContagem++;
        pontosUsuario.textContent = `${pontosContagem}`;
        btnResposta5.style.display = 'none';
        resposta5.style.display = 'none';
    }
} )