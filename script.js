const hamburger = document.querySelector('.hamburger-icon')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close-icon')
const body = document.querySelector('body')
console.log(hamburger);

hamburger.addEventListener('click',()=>{
    menu.style.visibility='visible';
    hamburger.style.visibility='hidden';
    close.style.visibility='visible'
})

close.addEventListener('click',()=>{
    menu.style.visibility='hidden'
    hamburger.style.visibility='visible';
    close.style.visibility='hidden'
})