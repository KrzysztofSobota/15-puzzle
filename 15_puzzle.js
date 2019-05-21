'use strict'

function Puzzle() {
  let boardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let numbersArray = [1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4];
  
  let shake = (boardNumbers, renew) => {
    let tempArray = [];    
      for (let i = 1; i <= 15; i++) {
        
      // random index number from 'boardNumbers' array
        let indexNumber = Math.round(Math.random() * (boardNumbers.length - 1));
      
      // get digit from index position
        let squareNumber = boardNumbers[indexNumber]; 
        tempArray.push(squareNumber);
        boardNumbers.splice(indexNumber, 1);      
      
      // insert numbers into the board
       document.querySelector(`#num${i}`).textContent = squareNumber;
      }
    
    return tempArray;    
  }
  
  
  
  let reset = document.querySelector('#reset');
    
  let rewrite = shake(boardNumbers, true);
  reset.addEventListener("click", rewrite);
  
  return rewrite;
}

let newGame = document.querySelector('#play');  
  newGame.addEventListener("click", Puzzle);
  
/*let swap = (btnNumber) => {
  if (id.value) {
    
  }
  
};*/

let clicked = document.querySelector('#puzzle');

clicked.addEventListener("click", function(e) {
  let btnNumber = e.target.id;
  alert(btnNumber);
});

  /*function howManyPermutations(param, tempArray) {
    Puzzle();
    let purity = 0;
    for (let j = 0; j <= 13; j++) // you can't use j=14 index to make next pair - it's the last one!
    {
      for (let i = 1; i < 15; i++) {
        if (tempArray[0 + j] > tempArray[i + j]) {
          purity++;
        }
      }
    }
    return purity;
  }

  let purityTotalSum = howManyPermutations();

  function putEmptyCell(purityTotalSum) {
    let k = Math.floor(Math.random() * 4); // empty cell index position
    if (purityTotalSum % 2 === 0) {
      if (k % 2 === 0) {
        tempArray.splice(k + 4, 0, 0); // second row [4-7]
      } else {
        tempArray.splice(k + 12, 0, 0); // fourth row [12-15]
      }
    } else {
      if (k % 2 === 0) {
        tempArray.splice(k, 0, 0); // first row [0-3]
      } else {
        tempArray.splice(k + 8, 0, 0); // third row [8-11]
      }
    }
    return tempArray;
  }
  let finalArray = putEmptyCell();
  console.log(finalArray);

  let btn = document.getElementById(`btn${i+1}`);

  function klik() {
    this.id = finalArray[0];
  }

  btn.addEventListener('click', klik);*/


  /*  window.addEventListener('click', function(e) {
      const sqr = document.getElementsByClassName('square');
      sqr.classList.add('move');
    });
    
    let x =  ;  clicked number
    let y = 0;  empty cell index
    
      
    if (Math.abs(x-y) == 4 || Math.abs(x-y) == 1) {
      finalArray[x] = finalArray[y];
    } 
    */