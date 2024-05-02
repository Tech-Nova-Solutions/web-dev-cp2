let imagens= ['src/assets/bike1.webp', 'src/assets/bike2.jpg', 'src/assets/bike3.jpg','src/assets/bike4.png','src/assets/bike5.webp'];
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
    var mainContent = document.querySelector("main"); // Seleciona a tag main
    var cards = document.querySelectorAll(".card"); // Usa querySelectorAll para selecionar todos os elementos com a classe .card
    var slogan = document.getElementById("texto");
    var slide = document.getElementById("slideshow"); // Seleciona o elemento com o id slideshow

    // Define a cor de fundo da tag main
    mainContent.style.backgroundColor = cores_fundo[indexCor];
    
    // Define a cor do texto para todos os elementos com a classe .card
    cards.forEach(function(card) {
        card.style.color = cores_texto[indexCor];
        card.style.backgroundImage = cores_cards[indexCor];
    });

    // Define a cor do texto para o elemento com o id slideshow
    slide.style.color = cores_texto[indexCor];
    slide.style.backgroundImage = cores_cards[indexCor];
    slogan.style.color = cores_texto[indexCor];
    
    indexCor = (indexCor + 1) % cores_fundo.length;
}

