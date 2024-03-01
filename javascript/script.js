const emContainer = document.querySelector('.em-container');
const btn = document.getElementById('bottoncino');
const difficulty = document.querySelector('.difficolta');
let output = document.querySelector('.output');

const totBombe = 16;
const numBombe = [];
let contatore = 0;


reset();

btn.addEventListener('click', start);









// FUNZIONI

// funzione per resettare e pulire 
function reset(){
  emContainer.innerHTML= '';
  numBombe.length = 0;
}

// funzione per creare i quadrati e aggiungere la classe 
function creation (numeroi){
  const squareC = document.createElement('div');
  squareC.className = 'square';

  squareC.sqId = numeroi;

  squareC.addEventListener('click', function(){
    contatore++;
    // mi serviva per inserire il numero nelle celle (entrambi i modi)
    // metodo classico 
    // if(this.innerHTML === ''){
    //   this.innerHTML = this.sqId;
    // }else if (this.innerHTML = this.sqId){
    //   this.innerHTML = ''
    // }
    
    
    // // metodo ternario parlante 
    // this.innerHTML === '' ? this.innerHTML = this.sqId :  this.innerHTML = ''; 


    if (numBombe.includes(this.sqId)){
      squareC.classList.add('bombone');
      output.innerHTML = ` Hai trovato una bomba. Hai perso! <br> Il tuo punteggio è ${contatore}`;

      return;
    }
    

    this.classList.add('lightblue');  

    
  })

  
  return squareC;

  
}

// funzione per il click del bottone per far partire tutto 
function start (){
  reset();
  output.innerHTML = ''
  const chooseDif = difficulty.value;
  let numeriContati = 100;
  
  if (chooseDif == 'medium') {
    numeriContati = 81;
  }else if (chooseDif == 'hard'){
    numeriContati = 49;
  }

  numRandom(numeriContati);
  // console.log(numRandom(numeriContati));

  
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
  
  let numeroBomba;

  while(numBombe.length < totBombe){
    numeroBomba = Math.floor(Math.random() * parametro ) + 1; 
    
    if (!numBombe.includes(numeroBomba)){
      numBombe.push(numeroBomba);
      
    }
    
    
  }
  console.log(numBombe);
  
}


