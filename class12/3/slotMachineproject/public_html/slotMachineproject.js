//* 1) Ask player for a bet.

let playerBet = Number(prompt("Enter Bet: "));

/* 2) Randomly select a word from the symbols list below and display it:
*  Cherris, Oranges, Plums, Bells, Melons, Bars
*  Store the symbols list in an array, and access them in the array. 
*  3) Repeat step 2 twice more, so that you select 3 symbols total.    
*/

let symbols = ["Cherries", "Oranges", "Plums", "Bells", "Melons"];

let symbolsRng1 = symbols[Math.floor(Math.random()*symbols.length)];
let symbolsRng2 = symbols[Math.floor(Math.random()*symbols.length)];
let symbolsRng3 = symbols[Math.floor(Math.random()*symbols.length)];

document.write(symbolsRng1 + " " + symbolsRng2 + " " + symbolsRng3);

/* 4) If words matched = 0, the player wins nothing. 
 *    If 2 words match, the player wins double their bet.
 *    If 3 words match, the player wins triple their bet. 
*/

let playerWon = 0;

if (symbolsRng1 === symbolsRng2 && symbolsRng2 === symbolsRng3) {
    playerWon = (playerBet * 3);
    document.write("<br> All Symbols matched, you won $" + playerWon);
    
}
else if (symbolsRng1 === symbolsRng2 || symbolsRng1 === symbolsRng3 || symbolsRng2 === symbolsRng3) {
        playerWon = (playerBet + playerBet);
        document.write("<br> Two Symbols matched, you won $" + playerWon);
    }
else document.write("<br> No Symbols matched, you lost $" + playerBet);