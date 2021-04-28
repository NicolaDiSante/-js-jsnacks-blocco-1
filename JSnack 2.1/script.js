$(document).ready(function(){

  // Dichiarare array e due variabili numero
  var arrayLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  var limiteMin = 2;
  var limiteMax = 7;

  console.log(getPieceOfArray(arrayLetter, limiteMin, limiteMax));

  // Dichiarare la funzione con parametri: array, n1, n2
  function getPieceOfArray(arr, min, max){
    // Dentro la funzione creare un array vuoto
    var newArr = [];
    // Facciamo un ciclo for per prelevare i valori di arrItems compresi tra minimo e massimo
    for(var i of arr){
        // Pusharli nell'array vuoto 
      if(i >= min && i<=max) newArr.push(arr[i])
    }
    // Restituire il risultato dell'array
    return newArr;
  }
    
  
    // Stamparlo
  
    
   
  })
  
   
  
  
  
  /* Scrivi una funzione che accetti tre argomenti:
  un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */