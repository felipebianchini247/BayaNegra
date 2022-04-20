const openModal = document.querySelector('.about');
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.closeModal')
const heroText = document.querySelector('.izquierda')
const opHeroText = document.querySelector('.izquierda')

const openModal2 = document.querySelector('.contact');
const modal2 = document.querySelector('.modal2')
const closeModal2 = document.querySelector('.closeModal2')

openModal.addEventListener('click', () =>{
    heroText.classList.remove('opOut');
    modal.classList.add('modal--show');
    heroText.classList.add('opac-out')
})

closeModal.addEventListener('click', () =>{
    heroText.classList.add('opOut');
    modal.classList.remove('modal--show');
    heroText.classList.remove('opac-out')
    
})


openModal2.addEventListener('click', () =>{
    heroText.classList.remove('opOut');
    modal2.classList.add('modal--show');
    heroText.classList.add('opac-out')
})

closeModal2.addEventListener('click', () =>{
    heroText.classList.add('opOut');
    modal2.classList.remove('modal--show');
    heroText.classList.remove('opac-out')
    
})


function sendContact(){
    const form = document.getElementById("form__contact");
    form.submit();
    
}