alert (`
    ----------------ATENÇÃO---------------
    O site ainda está em desenvolvimento;`);

const btnMobile = document.getElementById('btn-mobile');

function menuMobile (){
    const nav = document.getElementById('nav');
    nav.classList.toggle("active");
}
btnMobile.addEventListener('click', menuMobile);



