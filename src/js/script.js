//alert("Seja Bem-Vindo(a)");



let imagens= ['src/assets/bike1.webp', 'src/assets/bike2.png', 'src/assets/bike3.webp','src/assets/bike4.png','src/assets/bike5.webp'];
let index=0;
let time = 3000;


function slideShow(){
    document.getElementById('bikes').src=imagens[index];
    index++;
    if(index == imagens.length){
        index = 0;
    }
    setTimeout('slideShow()', time);

}
slideShow();

var cores_fundo = ["#f8faff", "#373535"];
var cores_cards = ["linear-gradient(to right, #7b61ff, #f1aefe)", "linear-gradient(to right, #7b61ff, #24a9ec)"];
var cores_texto = ["#373535", "#f8faff"];
let indexCor = 0;



function mudarFundo() {
    var mainContent = document.querySelector("main"); 
    var cards = document.querySelectorAll(".card"); 
    var slogan = document.getElementById("texto");
    var slide = document.getElementById("slideshow"); 

    
    mainContent.style.backgroundColor = cores_fundo[indexCor];
    
    
    cards.forEach(function(card) {
        card.style.color = cores_texto[indexCor];
        card.style.backgroundImage = cores_cards[indexCor];
    });

    
    slide.style.color = cores_texto[indexCor];
    slide.style.backgroundImage = cores_cards[indexCor];
    slogan.style.color = cores_texto[indexCor];
    
    indexCor = (indexCor + 1) % cores_fundo.length;
}

function verificalogin(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('pwd').value;
    let credencialIncorreta = document.getElementById('credencialIncorreta');

    if(email === 'admin@gmail.com' && senha === '1234'){
        window.open('quiz.html');
    }
    else if(email === '' || senha === ''){
        credencialIncorreta.innerHTML = 'Preencha os campos vazios!'

    }
    else{
        credencialIncorreta.innerHTML = 'E-mail e/ou Senha inválidos';
    }
}

function verificaCampo(){

    let nome = document.getElementById('nome').value; 
    let tel = document.getElementById('tel').value;
    let email =document.getElementById('email').value;
    let aviso = document.getElementById('aviso');// PARA MOSTRAR NA TELA QUANDO ESTIVER VAZIO

    if(nome === '' || tel === '' || email ===''){
        aviso.innerHTML = 'Preencha os campos vazios !';
        aviso.style.color = 'red';
    }
    else{
        aviso.innerHTML = 'Formulário enviado com sucesso!';
        aviso.style.color = 'green';
    }

}
