// Card game war for 2 players 
//1. deal 26 cards to each Player from a deck of 52 cards
//2. Iterate through the turns where each Player plays a card
//3. who played get higher card is awarded a point - ties result in zero points for both Players
//4. after all cards have been played, display the score and declare the winner

console.log ("Welcome to war game");

// Creates players class 
class Players{
    constructor(name, playerCards, playerPoints){
        this.name = name;
        this.playerCards = [];
        this.playerPoints = 0;
    }
}

//Declares players names
let player1 = new Players("player 1");
let player2 = new Players("player 2");


//Creates cards class and constructors 
class Cards{ 
    constructor (suite, value, rank){
        this.suite = suite;
        this.value = value;
        this.rank = rank;
    }
}


//Creates deck class and methods within decks
class Deck{ 
    constructor(cards){
        this.cards = []; 
    }

makeDeck(){
    let suits = ["Clubs", "Hearts", "Spades", "Diamonds"];
    let rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    let values = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13];
    for(let i=0; i<suits.length; i++){
    for (let a=0; a<rank.length; a++){
    this.cards.push(new Cards(suits[i], rank[a], values[a]));
        }
    }
 }

 //function shuffles within the card deck
shuffle(){
     for (let i = this.cards.length - 1; i > 0; i--){ 
        let b = Math.floor(Math.random() * i); 
        let hand = this.cards[i];
        this.cards[i] = this.cards[b];
        this.cards[b] = hand;
     }
 }

 // deal method for cards for each players 
deal(player1, player2){
     for (let i = 0; i < 52 ; i ++){ 
         let deal1 = this.cards.pop(); 
         player1.playerCards.push(deal1);
         let deal2 = this.cards.pop(); 
         player2.playerCards.push(deal2); 
        }
    }
}
// Creates class and declares 26 rounds with rank. Will declare winner with 
// else if loops depending on value for each player 
class Game{ 
    constructor(){
        this.gamePlayers = [];
    }

    gameRounds(){
        for (let round = 0; round <26; round++){
            let play1 = player1.playerCards[round].rank;
            let play2 = player2.playerCards[round].rank;
            console.log(`
                Round ${round + 1}:
                ${player1.name} played a ${player1.playerCards[round].rank} of ${player1.playerCards[round].suite}.
                ${player2.name} played a ${player2.playerCards[round].rank} of ${player2.playerCards[round].suite}.
            `);
        if (player1.playerCards[round].value > player2.playerCards[round].value){
            player1.playerPoints += 1;
            player2.playerPoints == 0;
            console.log(`
            ${player1.name} is the winner of round ${round +1}.
            `);
        } else if (player2.playerCards[round].value > player1.playerCards[round].value){
            player1.playerPoints == 0;
            player2.playerPoints += 1;
            console.log(`
            ${player2.name} is the winner of round ${round + 1}.
            `)
        }  else if (player1.playerCards[round].value == player2.playerCards[round].value){
            player1.playerPoints == 0;
            player2.playerPoints == 0;
            console.log(`
            No one won round ${round +1}. This round was a tie.
            `)
        }
        }
    }
    // creates method stating last scoring to declare winner 
    lastScoring(){
        let score1 = player1.playerPoints;
    let score2 = player2.playerPoints;
    console.log(`
        The end scores are: 
        ${player1.name}: ${score1}
        ${player2.name}: ${score2}
        `);
    if (player1.playerPoints > player2.playerPoints){
        console.log(`
        ${player1.name} won the game!
        `);
    } else if(player2.playerPoints > player1.playerPoints){
        console.log(`
        ${player2.name} won the game!
        `);
    } else {
        console.log(`Losers, it is a tie`);
    }
    }

    startGame(){ 
        this.gamePlayers.push(player1); 
        this.gamePlayers.push(player2); 
        let game = new Deck();
        game.makeDeck();
        game.shuffle();
        console.log(game.cards);
        game.deal(player1, player2);
        this.gameRounds();
        this.lastScoring();
    }
}

// initiating game start
let game = new Deck();
console.log(game.cards);

let newGame = new Game();
newGame.startGame();


console.log("Game Over");