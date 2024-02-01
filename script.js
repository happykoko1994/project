const button = document.querySelector('.play');
const roullete = document.querySelector('.roullete')
const finish = document.querySelector('.finish')
button.addEventListener('click',()=>{
    roullete.style.display = 'flex'
    setTimeout(() => {
        finish.style.display = 'flex'
    }, 2000);
})