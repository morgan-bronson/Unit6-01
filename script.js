'use strict'

document.getElementById('mybtn').addEventListener('click', Seeifyourright)

function  Seeifyourright() {
  const password = parseInt(Math.random()* 10)
  const input = document.getElementById('input').value
  if (password == input) {
    alert('correct')
  }
  else {
    alert('Incorrect'+ password)
  }
}
