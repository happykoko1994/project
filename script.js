
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
            let cards_block = document.querySelector('.cards');
            let cards = document.querySelectorAll('.cards > .card'); 

            for (let index = 0; index < cards.length; index++) {
                let new_element = cards[index].cloneNode(true);
                cards_block.append(new_element); 
                
            }
            console.log(cards_block.children.length)

            let random = Math.floor(Math.random() * (cards_block.children.length - 11) + 11)
            
            console.log(cards_block.children[random],random)
            setTimeout(function() {
    
                cards_block.style.left =Math.floor(Math.random() * (350 - 250) + 250)-random * 158 + 'px';
                setTimeout(() => {
                    prize.append(cards_block.children[random])
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
            let cards_block = document.querySelector('.cards');
            let cards = document.querySelectorAll('.cards > .card'); 

            for (let index = 0; index < cards.length; index++) {
                let new_element = cards[index].cloneNode(true);
                cards_block.append(new_element); 
                
            }
            console.log(cards_block.children.length)

            let random = Math.floor(Math.random() * (cards_block.children.length - 11) + 11)
            
            console.log(cards_block.children[random],random)
            setTimeout(function() {
    
                cards_block.style.top =Math.floor(Math.random() * (290 - 190) + 190)-random * 192 + 'px';
                setTimeout(() => {
                    prize.append(cards_block.children[random])
                    roullete.style.display = 'none'
                    finish.style.display = 'flex'
                  }, 6000);
            
    
              }, 500)
    
              
        })
        
    }

})
