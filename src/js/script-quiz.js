let pontosContagem = 0;
let pontosUsuario = document.querySelector('#pontosUsuario');
let gabaritoDiv = document.querySelector('#gabarito');

let resposta1 = prompt(`1 - Quantas rodas tem uma bicicleta convencional ?
a. 4
b. 3
c. 2
d. 1`);
let resposta2 = prompt(`2 - Qual é o componente responsável por mudar as marchas em uma bicicleta?
a. Pedivela
b. Cambio
c. Pedal
d. Guidão`);
let resposta3 = prompt(`3 - Qual é a parte da bicicleta onde você encontra os freios de mão?
a. Selim
b. Roda dianteira
c. Guidão
d. Quadro`);
let resposta4 = prompt(`4 - Qual é o tipo de pneu mais comum em bicicletas de estrada?
a. Pneu stick
b. Pneu de cravos
c. Pneu tubular
d. Pneu sem câmara de ar`);
let resposta5 = prompt(`5 - O que significa "MTB", um termo frequentemente usado no contexto de bicicletas?
a. Montanha bike
b. Multitool Bike
c. Motorized Bike
d. Mountain Terrain Bike`);
let resposta6 = prompt(`6 - Qual é o material mais comum usado para fazer o quadro de uma bicicleta? 
a) Alumínio 
b) Aço 
c) Fibra de carbono 
d) Titânio`);
let resposta7 = prompt(`7 - Qual é o nome da parte da bicicleta onde você encaixa o pé para pedalar?
a) Pedal
b) Pedivela
c) Pinhão
d) Roda dentada`);
let resposta8 = prompt(`8 - Em uma bicicleta, qual é o nome da parte que conecta o guidão ao tubo de direção?
a) Mesa
b) Garfo
c) Suporte
d) Braçadeira`);
let resposta9 = prompt(`9 - Qual é o nome dado ao conjunto de engrenagens na frente da bicicleta, ligadas aos pedais?
a) Pedal
b) Corrente
c) Pedivela
d) Catraca`);
let resposta10 = prompt(`10 - O que é necessário para aumentar a velocidade em uma bicicleta equipada com marchas?
a) Mudar para uma marcha mais alta
b) Mudar para uma marcha mais baixa
c) Frear
d) Pedalar mais devagar`);

if (resposta1 !== null && resposta1.toLowerCase() === 'c') {
    pontosContagem++;
};
if (resposta2 !== null && resposta2.toLowerCase() === 'b') {
    pontosContagem++;
};
if (resposta3 !== null && resposta3.toLowerCase() === 'c') {
    pontosContagem++;
};
if (resposta4 !== null && resposta4.toLowerCase() === 'a') {
    pontosContagem++;
};
if (resposta5 !== null && resposta5.toLowerCase() === 'a') {
    pontosContagem++;
};
if (resposta6 !== null && resposta6.toLowerCase() === 'a') {
    pontosContagem++;
};
if (resposta7 !== null && resposta7.toLowerCase() === 'a') {
    pontosContagem++;
};
if (resposta8 !== null && resposta8.toLowerCase() === 'a') {
    pontosContagem++;
};
if (resposta9 !== null && resposta9.toLowerCase() === 'c') {
    pontosContagem++;
};
if (resposta10 !== null && resposta10.toLowerCase() === 'a') {
    pontosContagem++;
};

pontosUsuario.textContent = `${pontosContagem}`;

// Exibindo o gabarito
gabaritoDiv.innerHTML = `
<h2>Gabarito:</h2>
<ol>
    <li>Quantas rodas tem uma bicicleta convencional? Resposta: c</li>
    <li>Qual é o componente responsável por mudar as marchas em uma bicicleta? Resposta: b</li>
    <li>Qual é a parte da bicicleta onde você encontra os freios de mão? Resposta: c</li>
    <li>Qual é o tipo de pneu mais comum em bicicletas de estrada? Resposta: a</li>
    <li>O que significa "MTB", um termo frequentemente usado no contexto de bicicletas? Resposta: a</li>
    <li>Qual é o material mais comum usado para fazer o quadro de uma bicicleta? Resposta: a</li>
    <li>Qual é o nome da parte da bicicleta onde você encaixa o pé para pedalar? Resposta: a</li>
    <li>Em uma bicicleta, qual é o nome da parte que conecta o guidão ao tubo de direção? Resposta: a</li>
    <li>Qual é o nome dado ao conjunto de engrenagens na frente da bicicleta, ligadas aos pedais? Resposta: c</li>
    <li>O que é necessário para aumentar a velocidade em uma bicicleta equipada com marchas? Resposta: a</li>
</ol>
`;