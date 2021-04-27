var arrTeam = [];

getPlayer(5);
console.log(arrTeam)

function getPlayer(limit){
  for(var i = 0; i < limit; i++){
    var player = {
      id: idGenerator(),
      points: getRandomNumber(50),
      threePoints: getRandomNumber(100) + "%",
    }
    arrTeam.push(player);
  }
}



//Funzione per generare numeri random fino al max che imposterò in seguito
function getRandomNumber(max){
  return Math.floor(Math.random() * max)
};

// Funzione per generare un ID costituito da 3 lettere Uppercase e 3 numeri casuali
function idGenerator(){
  var id = [];
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
  
  for(var i = 0; i < 3; i++){
    id.push(letters.charAt(Math.floor(Math.random() * letters.length)));
    id.push(Math.floor(Math.random() * 3));
  }
  return id.join("");
}




  

