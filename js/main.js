
let startButton = document.querySelector('.drugi .tipka1');
function start() {
    location.href = 'indeks2.html';
}
startButton.addEventListener('click', start);
/*
let rightBtn = document.querySelector('#right');
let leftBtn = document.querySelector('#left');
let slike = document.querySelectorAll('.images img');

let imgNum = 0;


const moveRight = () => {
    displayNone()
    imgNum++;
    if(imgNum === slike.length){
        imgNum = 0;
    }
    slike[imgNum].style.display = 'block';
}

const moveLeft = () => {
    displayNone()
    imgNum--;
    if(imgNum === -1){
        imgNum = slike.length - 1;
    }
    slike[imgNum].style.display = 'block';
}


right.addEventListener('click', moveRight);
left.addEventListener('click', moveLeft);


const displayNone = () => {
    slike.forEach((img) => {
        img.style.display = 'none';
    });
}*/