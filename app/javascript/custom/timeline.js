// Get all elements

const allDates = document.querySelectorAll('.date')
const allCards = document.querySelectorAll('.card')
const controller = new ScrollMagic.Controller()

console.log('Test for timeline')

allCards.forEach(card => {
    for ( let i = 0; i < allDates.length; i++){
        if (allDates[i].getAttribute('data-anime') === card.getAttribute('data-anime')) {
            let tween = gsap.from(card, { y: -50, opacity: 0, duration: 0.5 })
            let scene = new ScrollMagic.Scene(
                {
                    triggerElement: allDates[i],
                    reverse: false
                }
            )
                .setTween(tween)
                // .addIndicators()
                .addTo(controller)
        }

    }
    
})