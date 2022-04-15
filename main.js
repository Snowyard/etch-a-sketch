// function create and appends 16*16 divs to parent
const container = document.querySelector('.container');
function createBoard(parentElement, squaresPerSide) {
    for(let i=0; i < squaresPerSide*squaresPerSide; i++) {
        const div = document.createElement('div');
        div.className = 'square-div';
        parentElement.appendChild(div);
        container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1FR)`
        container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1FR)`
    }
}

function reset() {
   const reset = document.querySelector('.reset');
   reset.addEventListener('click', () => {
       while(container.firstChild) {
           container.removeChild(container.lastChild);
       }
    })
}

function paintBoard() {
    const divs = document.querySelectorAll('.square-div');
    divs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.classList.add('changeColor');
        })
    })
}

function reset() {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    } 
}

function playEtch() {
    createBoard(container, 16);
    paintBoard();
    const button = document.querySelector('.reset');
    button.addEventListener('click', () => {
        reset();

        let belowHundred = false;
        while(belowHundred==false) {
        squarePerSide = parseInt(prompt('Please enter a number below 100: '));
        if(squarePerSide < 100) {
            belowHundred = true;
        } else continue;
        }
        createBoard(container, squarePerSide);
        paintBoard();
    })
}

playEtch();







