alert (`
    ----------------ATENÇÃO---------------
    O site ainda está em desenvolvimento;`);

const btnMobile = document.getElementById('btn-mobile');

function menuMobile (){
    const nav = document.getElementById('nav');
    nav.classList.toggle("active");
}
btnMobile.addEventListener('click', menuMobile);
//
const inicio = document.getElementById('init');

function inicioRemove(){
    const nav = document.getElementById('nav');
    nav.classList.toggle("active")
}
inicio.addEventListener('click', inicioRemove);
//
const sobre = document.getElementById('sobre');

function sobreRemove(){
    const nav = document.getElementById('nav');
    nav.classList.toggle("active")
}

sobre.addEventListener('click', sobreRemove)
//
const tec = document.getElementById('tecno');

function tecRemove(){
    const nav = document.getElementById('nav');
    nav.classList.toggle("active")
}
tec.addEventListener('click', tecRemove)
//
const projects = document.getElementById('projectsr');

function projectRemove(){
    const nav = document.getElementById('nav');
    nav.classList.toggle("active")
}
projects.addEventListener('click', projectRemove)