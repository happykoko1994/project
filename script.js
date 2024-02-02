
document.addEventListener('DOMContentLoaded',()=>{
const rightText = document.querySelector('.right-text')
    const button = document.querySelector('.play');
    const roullete = document.querySelector('.roullete')
    const finish = document.querySelector('.finish')
    const bgmain = document.querySelector('.bgmain')
    const factBg = document.querySelector('.fact-bg')
    const play = document.querySelector('.play')
    button.addEventListener('click',()=>{
        rightText.style.display = 'none'
        factBg.style.display = 'none'
        play.style.display = 'none'
        bgmain.style.display = 'none'
        roullete.style.display = 'flex'
        setTimeout(() => {
            finish.style.display = 'flex'
        }, 2000);
    })
})
