const item = document.querySelectorAll('.Slider img');
const Document = document.documentElement;
const nbImg = item.length;
const suivant = document.querySelector('.btn_right');
const précédent = document.querySelector('.btn_left');
const btn_fullscreen = document.querySelector('.big_screen');
const btn_littlescreen = document.querySelector('.little_screen');
let num = document.getElementById('CT').innerHTML;
const select = document.querySelector('.home_select');
const home = document.querySelector('.home');
const home2 = document.querySelector('.home_2');
let count = 0;
let a = 0;

// loader

const loader = document.querySelector('.loader');
const Slider = document.querySelector('.Slider')

function loader_page(){
    Slider.classList.remove('fondu');
    loader.classList.add('fondu');
}

// ---------------------------------------------

// remonte vers le haut

suivant.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

précédent.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

// ---------------------------------------------

// Slider

function slider_suivante(){
    item[count].classList.remove('active');

    if(count < nbImg -1 ){
        count++;
        num++;
        document.getElementById("CT").innerHTML = num;
    
    }else {
        count = 0;
        num = 0;
        document.getElementById("CT").innerHTML = num;
    }

    item[count].classList.add('active');
}

function slider_précédente(){
    item[count].classList.remove('active');

    if(count > 0){
        count--;
        num--;
        document.getElementById("CT").innerHTML = num;

    }else {
        count = nbImg - 1;
        num = 0;
        document.getElementById("CT").innerHTML = num;
    }

    item[count].classList.add('active');

}

// fulscreen mode.

function fullscreen(){
   
    btn_fullscreen.classList.add('off');
    btn_littlescreen.classList.remove('off');
    Document.requestFullscreen();

}

function exitscreen(){
    btn_fullscreen.classList.remove('off');
    btn_littlescreen.classList.add('off');
    document.exitFullscreen();
}

// ---------------------------------------------

// selecteur manuelle 

function selecteur(){
    home.classList.add('off');
    home2.classList.remove('off');
    select.classList.remove('offset');
}

function selecteur_out(){
    home.classList.remove('off');
    home2.classList.add('off');
    select.classList.add('offset');
}

// ---------------------------------------------


// execution des fonctions

setTimeout(loader_page, 5000);

suivant.addEventListener('click', slider_suivante);
précédent.addEventListener('click', slider_précédente);
btn_fullscreen.addEventListener('click', fullscreen);
btn_littlescreen.addEventListener('click', exitscreen);
home.addEventListener('click', selecteur);
home2.addEventListener('click', selecteur_out);

// ---------------------------------------------



