/**
 * Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
 */

// Crea due array con numero di elementi diversi

var arrOne = [1,2,3,4,5,6,7,8,9,10];
var arrTwo = [11,12,13];

while(arrTwo.length < arrOne.length){
  arrTwo.push(getRandomNumber(14,25))
}

console.log(arrTwo)

// Crea un generatore casusale di numeri

function getRandomNumber(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}