// Inizializzo la sommo uguale a 0
// Inizializzo l'array di zucchine
// facio un ciclo FOR OF per prendere ogni singolo elemento dell'array e prenderne il peso
// vado poi a sommare il peso di ogni zucchina

  var somma = 0;
  
  var zucchine = [
    {
      varietà: "Abruzzese",
      peso: 20,
      lunghezza: 25
    },
    {
      varietà: "Molisana",
      peso: 23,
      lunghezza: 24
    },
    {
      varietà: "Calabrese",
      peso: 320,
      lunghezza: 45
    },
    {
      varietà: "Messicana",
      peso: 50,
      lunghezza: 25
    },
    {
      varietà: "Patagonese",
      peso: 2332,
      lunghezza: 24
    },
    {
      varietà: "Cuccuredese",
      peso:45,
      lunghezza: 45
    },
    {
      varietà: "Parceloa",
      peso: 220,
      lunghezza: 25
    },
    {
      varietà: "Welcome",
      peso: 21,
      lunghezza: 24
    },
    {
      varietà: "Aitea",
      peso: 10,
      lunghezza: 45
    }
  ]

  for(var zucchina of zucchine){
    somma += zucchina.peso;
  }
  console.log("La somma del peso di tutte le zucchine è: " + somma + " grammi")
  

