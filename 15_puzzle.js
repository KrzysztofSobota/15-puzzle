'use strict';

window.addEventListener('DOMContentLoaded', numbers);

function numbers() {
  let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ];
  
  let shake = (numberArray, renew) => {
    let tempArray = [];    
      for (let i = 1; i <= 16; i++) {      
        let indexNumber = Math.floor(Math.random() * numberArray.length);
        let squareNumber = numberArray[indexNumber];

        tempArray.push(squareNumber);
        
        if (typeof squareNumber === "number") {
          document.getElementById(`btn${i}`).value = squareNumber;
        } 
        else {         document.getElementById(`btn${i}`).style.color = "transparent";
        }
        
        numberArray.splice(indexNumber, 1, numberArray[numberArray.length-1]);
        numberArray.pop();
      }
    
    if (renew = true) {
      let resetArray = [];
      resetArray === tempArray;
      return resetArray;
    }
    
    return tempArray;    
  }
  
  let newGame = document.getElementById("newgame");
  let reset = document.getElementById("reset");
  
  let rewrite = shake(numberArray, true);
  
  newGame.addEventListener("click", function(numberArray, renew) {
    renew = false;
    shake(numberArray, renew);
  });
  
  reset.addEventListener("click", rewrite);  
} 

let swap = (btnNumber) => {
  if (id.value) {
    
  }
  
};

let clicked = document.getElementsByClassName("butt");

clicked.addEventListener("click", function(e) {
  let btnNumber = e.target.id;
  swap(btnNumber);
});

  /*function howManyPermutations(param) {
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