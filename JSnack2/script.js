var minQuindici = [];
var maxQuindici = [];
var pesoLeggere = 0;
var pesoPesanti = 0;

var zucchine =  [
  {
    peso: 14,
  },
  {
    peso: 66,
  },
  {
    peso: 3,
  },
  {
    peso: 11,
  },
  {
    peso: 23,
  },
  {
    peso: 3,
  },
  {
    peso: 12,
  },
  {
    peso: 2,
  },
  {
    peso: 15,
  },
  {
    peso: 10,
  }
]

for(var zucchina of zucchine){
  
  if(zucchina.peso == 15 || zucchina.peso > 15){
    maxQuindici.push(zucchina.peso);
    pesoPesanti += zucchina.peso;
  }else{
    minQuindici.push(zucchina.peso);
    pesoLeggere += zucchina.peso;
  }
}



console.log(maxQuindici);
console.log(minQuindici);
console.log(pesoLeggere);
console.log(pesoPesanti)
