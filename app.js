const board = document.querySelector('#board');
const colors = ['#e47dc3',
                '#5cd1e6',
                '#f3f17b', 
                '#43f151', 
                '#d150f1',
                '#59ebc6',
                '#7e57d8',
                '#e7bd32'];

const SQUARES_NUMBER = 154;

for (let i = 0; i < SQUARES_NUMBER; i++) {

    const square = document.createElement('div');
    
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('click', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
        setTimeout(() => {
            clearBoard(square);
        }, 700);
      } 
    );

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = `radial-gradient(farthest-side ellipse at top left, white, ${color})`;
    element.style.boxShadow = '5px 10px 20px rgba(0,0,0,0.3), -5px -10px 20px rgba(255,255,255,0.5)';
}

function removeColor(element) {
    const color = getRandomColor();
    element.style.background = `radial-gradient(farthest-side ellipse at top left, white, ${color})`
    element.style.boxShadow = '5px 10px 20px rgba(0,0,0,0.3), -5px -10px 20px rgba(255,255,255,0.5)';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function clearBoard(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}



