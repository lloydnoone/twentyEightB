window.addEventListener('DOMContentLoaded', (e) => {
  const num = document.querySelector('#number')
  window.addEventListener('click', (e) => num.innerHTML = Math.floor(Math.random() * 28))
})

//TODO
//figure out circle progress bar
//add bar random rezising functionality
// final touches on fonts and margins