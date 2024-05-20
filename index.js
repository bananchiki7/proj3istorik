const buttonLeft = document.querySelector('.team-button-left');
const buttonRight = document.querySelector('.team-button-right');
const first = document.querySelector('.team-list-item:nth-child(1)');
const second = document.querySelector('.team-list-item:nth-child(2)');
const third = document.querySelector('.team-list-item:nth-child(3)');

let arr = [first, second, third];
let i = 1;

buttonRight.addEventListener("click", () => {
    i += 1;
    if(i > 2){
        i = 0;
        arr[i].classList.add('team-active');
        arr[2].classList.remove('team-active');
    } else {
        arr[i].classList.add('team-active');
        arr[i - 1].classList.remove('team-active');
    }
});

buttonLeft.addEventListener("click", () => {
    i -= 1;
    if(i < 0){
        i = 2;
        arr[i].classList.add('team-active');
        arr[0].classList.remove('team-active');
    } else {
        arr[i].classList.add('team-active');
        arr[i + 1].classList.remove('team-active');
    }
});

const buttonLeftRe = document.querySelector('.reviews-button-left');
const buttonRightRe = document.querySelector('.reviews-button-right');
const firstRe = document.querySelector('.reviews-list-item:nth-child(1)');
const secondRe = document.querySelector('.reviews-list-item:nth-child(2)');
const thirdRe = document.querySelector('.reviews-list-item:nth-child(3)');

let arr2 = [firstRe, secondRe, thirdRe];
let a = 0;
buttonLeftRe.addEventListener("click", () => {
    a -= 1;
    if(a < 0){
        a = 2;
        arr2[a].classList.add('reviews-active');
        arr2[0].classList.remove('reviews-active');
    } else {
        arr2[a].classList.add('reviews-active');
        arr2[a + 1].classList.remove('reviews-active');
    }
});

buttonRightRe.addEventListener("click", () => {
    a += 1;
    if(a > 2){
        a = 0;
        arr2[a].classList.add('reviews-active');
        arr2[2].classList.remove('reviews-active');
    } else {
        arr2[a].classList.add('reviews-active');
        arr2[a - 1].classList.remove('reviews-active');
    }
});