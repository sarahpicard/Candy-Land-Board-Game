// DEFINE VARIABLES
let winner, turn, purpleSquares, greenSquares, blueSquares, orangeSquares, redSquares, yellowSquares

let deck1 = []
let deck2 = []

let cardToRemove, cardPicked

//--------------------------------------------------------------------

const message = document.querySelector('#message')
const gameBoard = document.querySelector('#board')
const resetBtn = document.querySelector('.reset-btn')


let boardSquares = document.querySelectorAll('.box')

let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')


//------------------------------------------------------------------------

resetBtn.addEventListener('click', init)


document.getElementById('card-button').addEventListener('click', handleClick)


//------------------------------------------------------//
let green = '#6fcb6c'
let yellow = '#ebe6a7'
let blue = '#6f79b6'
let purple = '#de82f1'
let red = '#d86d6d'
let orange = '#ef9f6d'

init()

function init() {
  turn = 1
  winner = null
  playerLocation = boardSquares[0]
  message.innerText = `It's time for player ${turn === 1 ? 'One' : 'Two'} to choose a card!`
  boardColors = [green, purple, red, yellow, orange, blue, green, purple, yellow, red, blue, purple, yellow, green, orange, red, blue, purple, yellow, green, orange, red, blue, purple, green, yellow, red, orange, green, yellow, purple, blue]
  deck1 = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7']
  render()

}

// STRETCH GOAL - modal at init for game directions 

//----------------- CARD DECK FUNCTIONALITY ------------------------//
function handleClick() {
  if (deck1.length > 0) {
    let randIdx = Math.floor(Math.random() * deck1.length)
    cardPicked = deck1.splice(randIdx, 1)[0]
    deck2.push(cardPicked)
    renderCards(cardPicked)
  }
}

function renderCards() {
  deck2El.classList.remove('outline')
  if (deck2.length > 1) {
    deck2El.classList.remove(cardToRemove)
  }
  cardToRemove = cardPicked
  deck2El.classList.add(cardPicked)
  if (deck2.length === 26) {
    deck2El.classList.add('shadow')
    deck1El.classList.remove('shadow')
  }
  if (deck1.length === 0) {
    deck1El.classList.add('outline')
    deck1El.classList.remove('back')
  }
}
//----------------------------------------------------//

function render() {
  boardSquares.forEach((square, idx) => {
    square.style.background = boardColors[idx]
  })

  for (let i = 0; i < boardColors.length; i++) {
    if (boardColors[i] === green) {
      return playerSpot
    } else {
      if (boardColors[i] === red) {
        return playerSpot
      } else {
        if (boardColors[i] === yellow) {
          return playerSpot
        } else {
          if (boardColors[i] === orange) {
            return playerSpot
          } else {
            if (boardColors[i] === purple) {
              return playerSpot
            } else {
              if (boardColors[i] === blue) {
                return playerSpot
              }
            }
          }
        }
      }
    }
  }
  if (!winner) {
    message.innerText = `It's time for player ${turn === 1 ? 'One' : 'Two'} to choose a card!`
  } else {
    message.innerText = `Congratulations player ${winner === 1 ? 'One' : 'Two'}!`
  }
  cardToBoard()
}


function cardToBoard(card) {
  console.log(card)
  for (i = 0; i < deck1.length; i ++) {
    if (cardPicked === 'b1') {
      console.log('its blue')
    }
  }
}

function playerSpot() {

}



// use the index(s) of the iteration to access the corresponding color in the card deck



// ----------------------- IF USING HANDLECLICK ------//
// ------ user would need to click on the spot corresponding to the card color

// handleClick function to move game piece to the corresponding board spot

// obtain the index of the square that has been clicked 

// make sure that ONLY the next square of specified color CAN be clicked 

// update the board array (index should be changed to only allow the lowest possible to be clicked now)

// game piece is moved to corresponding game spot (in accordance with the index in board array)


// ----- player turn is changed ----//
// change turn of player (turn variable)


// --------- WINNER FUNCTION -----------//
// determine win conditions (player one clicks index X - last spot on board), etc. 


// there can be no tie, someone reaches the finish line first. 
// return null if winner function is not evaluated to true 
// render()

// ------------- RESTART GAME BUTTON ---------//
// run init function if restart button is pressed 


// ---------------------------------------------------------------------------------------------

// ------- Random Planning (conceptual) ----------// 

// color that pops up in card deck should correspond with the first of that same color in an array - making it only possible for the player to click on that specific square on the game board (first in array, second in array, etc. until player reaches the end of the game board and win condition is met)

// would be nicer if the player piece automatically moves to the first available color of card turned over (STRETCH GOAL) (would have to connect the card deck colors with game board color arrays and move the piece there automatically?)

// single player game (the player will play both #1 and #2 until someone reaches the finish castle - win condition)

// player 1 (holds 1)
//player 2 (holds -1)

// each square will map to a corresponding index in corresponding color array
// index 0 - X (dependent upon actual board length and number of colored spots present in length)

// allow for both players to be on the same square 

// use modal upon first entering the page for game directions (bootstrap)- STRETCH GOAL




