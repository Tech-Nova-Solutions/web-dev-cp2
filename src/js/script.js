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