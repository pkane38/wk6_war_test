const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]



export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards
  }

  get numberOfCards() {
    return this.cards.length
  }

  pop() {
    return this.cards.shift()
  }

  push(card) {
    this.cards.push(card)
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }

  desc() {
      return Card.value[ this.value -1] + "of" + Card.suit[ this.suit];
  }

  get color() {
    return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
  }

  getHTML() {
    const cardDiv = document.createElement("div")
    cardDiv.innerText = this.suit
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.value = `${this.value} ${this.suit}`
    return cardDiv
  }
}

function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value)
    })
  })
}

   
        // discard(num) 
        // {
        //     this.deck = drop(num, this.deck);
        // }
//         deal()
//         {
//            let hand = [];
//            while(hand.length < 2){
//                hand.push(this.deck.pop());
//            }
//            return hand;
//         }
// }
    
//let player1Deck, player2Deck
// startGame()
// function startGame() {
    
//     
    // console.log(deck.cards);
    // deck.createDeck(values, suits);
    // console.log(deck.deal());

//     const deckMidpoint = Math.ceil(deck.numberOfCards / 2) //this could be by # of players// 
//     player1Deck = new Deck(deck.cards.slice(0, deckMidpoint))
//     player2Deck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

//     console.log(player1Deck)
//     console.log(player2Deck)
// }
