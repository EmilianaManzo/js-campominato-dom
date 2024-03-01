const emContainer = document.querySelector('.em-container');
const btn = document.getElementById('bottoncino');
const difficulty = document.querySelector('.difficolta');

const totBombe = 16;
// const bombone = [];
// const numBombe = [];

let contatore;


reset();

btn.addEventListener('click', start);









// FUNZIONI

// funzione per resettare e pulire 
function reset(){
  emContainer.innerHTML= '';
}

// funzione per creare i quadrati e aggiungere la classe 
function creation (numeroi){
  const squareC = document.createElement('div');
  squareC.className = 'square';

  squareC.sqId = numeroi;

  squareC.addEventListener('click', function(){
  

    // mi serviva per inserire il numero nelle celle (entrambi i modi)
    // metodo classico 
    // if(this.innerHTML === ''){
    //   this.innerHTML = this.sqId;
    // }else if (this.innerHTML = this.sqId){
    //   this.innerHTML = ''
    // }
    
    
    // // metodo ternario parlante 
    // this.innerHTML === '' ? this.innerHTML = this.sqId :  this.innerHTML = ''; 

    this.classList.add('lightblue');  

    
  })


  return squareC;

  
}

// funzione per il click del bottone per far partire tutto 
function start (){
  reset();
  const chooseDif = difficulty.value;
  let numeriContati = 100;
  
  if (chooseDif == 'medium') {
    numeriContati = 81;
  }else if (chooseDif == 'hard'){
    numeriContati = 49;
  }

  numRandom(numeriContati);
  console.log(numRandom(numeriContati));
  // console.log(bombone);
  
  
  for (let i = 1; i <= numeriContati; i++){
    const square = creation(i) ;

    if(chooseDif == 'medium'){
      square.classList.add('sd_medium');
    }else if (chooseDif == 'hard'){
      square.classList.add('sd_hard');
    }


    emContainer.append(square);
  }

}

// funzione estrazione numeri random per array 

function numRandom(parametro){
  const numBombe = [];
  let numeroBomba;

  for (let i = 1; i <= totBombe; i++){
    numeroBomba = Math.floor(Math.random() * parametro ) + 1; 
    
    if (!numBombe.includes(numeroBomba)){
      numBombe.push(numeroBomba);
      // bombone.push(numeroBomba);
    }
    
    
  }
  
  return numBombe;
}

// funzione estrazione numeri random per array 

// function numRandom(parametro){

//   let numeroBomba;

//   for (let i = 1; i <= totBombe; i++){
//     numeroBomba = Math.floor(Math.random() * parametro ) + 1; 
    
//     if (!numBombe.includes(numeroBomba)){
//       numBombe.push(numeroBomba);
//     }

    
//   }
  
//   return numBombe;
// }

