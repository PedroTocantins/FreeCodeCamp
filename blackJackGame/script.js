let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "Player",
  chips: 123
}
let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": " + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  }
  return randomCard;
}

function startGame() {
  isAlive = true;
  let randomCard1 = getRandomCard();
  let randomCard2 = getRandomCard();
  cards = [randomCard1, randomCard2];
  sum = cards[0] + cards[1];
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Cards: `;

  for (let i = 0; i < cards.length; i++) {
    if (i === cards.length - 1) {
      cardsEl.textContent += cards[i];
    } else {
      cardsEl.textContent += cards[i] + "-";
    }
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got a BlackJack!";
    hasBlackJack = true;
  } else {
    isAlive = false;
    message = "You're out of the game!";
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    console.log("you draw a new card");
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
