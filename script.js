
document.addEventListener('DOMContentLoaded',()=>{
const rightText = document.querySelector('.right-text')
    const button = document.querySelector('.play');
    const roullete = document.querySelector('.roullete')
    const finish = document.querySelector('.finish')
    const bgmain = document.querySelector('.bgmain')
    const factBg = document.querySelector('.fact-bg')
    const play = document.querySelector('.play')
    const prize = document.querySelector('.prize')
    
    if(window.screen.availWidth>768){
        button.addEventListener('click',()=>{
            rightText.style.display = 'none'
            factBg.style.display = 'none'
            play.style.display = 'none'
            bgmain.style.display = 'none'
            roullete.style.display = 'flex'
    
            var cards_block = document.querySelector('.cards');
            var cards = document.querySelectorAll('.cards > .card');
    
            var random = Math.floor(Math.random() * (10 - 0) + 0)
            
            console.log(cards[random],random)
            setTimeout(function() {
    
                cards_block.style.left =Math.floor(Math.random() * (350 - 250) + 250)-random * 158 + 'px';
                setTimeout(() => {
                    prize.append(cards[random])
                    roullete.style.display = 'none'
                    finish.style.display = 'flex'
                  }, 6000);
            
    
              }, 500)
    
              
        })
    }else{
        console.log('mobile');
        button.addEventListener('click',()=>{
            rightText.style.display = 'none'
            factBg.style.display = 'none'
            play.style.display = 'none'
            bgmain.style.display = 'none'
            roullete.style.display = 'flex'
    
            var cards_block = document.querySelector('.cards');
            var cards = document.querySelectorAll('.cards > .card');
    
            var random = Math.floor(Math.random() * (10 - 0) + 0)
            
            console.log(cards[random],random)
            setTimeout(function() {
    
                cards_block.style.top =Math.floor(Math.random() * (290 - 190) + 190)-random * 192 + 'px';
                setTimeout(() => {
                    prize.append(cards[random])
                    roullete.style.display = 'none'
                    finish.style.display = 'flex'
                  }, 6000);
            
    
              }, 500)
    
              
        })
        
    }

})
