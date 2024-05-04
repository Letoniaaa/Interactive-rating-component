const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const sub = document.querySelector('.submit')
const span = document.querySelector('#sp')
const pricipal = document.querySelector('.principal')
const outra = document.querySelector('.outra')
let flag


btn1.addEventListener('click', () => {
    flag = ' 1 '
})
btn2.addEventListener('click', () => {
    flag = ' 2 '
})
btn3.addEventListener('click', () => {
    flag = ' 3 '
})
btn4.addEventListener('click', () => {
    flag = ' 4 '
})
btn5.addEventListener('click', () => {
    flag = ' 5 '
    
})




sub.addEventListener('click', () => {
    pricipal.style.display = 'none'
    outra.style.display = 'flex'
    span.innerText = flag
})

