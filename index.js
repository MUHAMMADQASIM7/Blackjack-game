
let chips = 0
let player = chips
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = "Per" + ": $" + player

function chips1() { 
playerEl.textContent = "Per" + ": $" + 10
}
function chips2() { 
    playerEl.textContent = "Per" + ": $" + 50
}
function chips3() { 
    playerEl.textContent = "Per" + ": $" + 100
}
function chips4() { 
        playerEl.textContent = "Per" + ": $" + 500
}
function chips5() { 
    playerEl.textContent = "Per" + ": $" + 1000
}
function chips6() { 
    playerEl.textContent = "Per" + ": $" + 1500
}
function chips7() { 
    playerEl.textContent = "Per" + ": $" + 2000
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
