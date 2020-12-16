'use strict'

document.getElementById('mybtn').addEventListener('click', Seeifyourright)

function Seeifyourright() {
  let password= parseInt (Math.random() *10)
  let input = document.getElementById('input').value
  if (password == input) {
    alert ("correct");
  }
  else {
    alert ("Incorrect"+password);
  }
}
