
function changePosition(element) {
  let maxWidth = window.innerWidth * 0.55;
  let maxHeigth = window.innerHeight * 0.45;
  let min = 1;
  let widthRandom = Math.floor(Math.random() * (maxWidth - min + 1) + min);
  let HeigthRandom = Math.floor(Math.random() * (maxHeigth - min + 1) + min);
  element.setAttribute("style", `   position: absolute; top:${HeigthRandom}px; left:${widthRandom}px; `)
}

function correctAnswer(element) {
  let parent = element.parentElement.parentElement;
  parent.innerHTML = `<h1>Lo sabia, te amo</h1>`;


}