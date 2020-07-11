const hamburger = document.querySelector('.first-right');
const hamburgerInner = document.querySelector('.hamburger')
const secondLeft = document.querySelector('.second-left')
const secondRight = document.querySelector('.second-right')
const firstRight = document.querySelector('.first-right')
const firstPage = document.querySelector('.firstPage')
hamburger.addEventListener('click', () => {
    firstRight.classList.toggle('active')
    hamburgerInner.classList.toggle('active')
    secondLeft.classList.toggle('active')
    secondRight.classList.toggle('active')
})