const buttonLeft = document.querySelector('.team-button-left');
const buttonRight = document.querySelector('.team-button-right');

let arr = document.querySelectorAll('.team-list-item');
let i = 1;

buttonRight.addEventListener("click", () => {
    i += 1;
    if (i > 2) {
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
    if (i < 0) {
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


let arr2 = document.querySelectorAll('.reviews-list-item');
let a = 1;
buttonLeftRe.addEventListener("click", () => {
    a -= 1;
    if (a < 0) {
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
    if (a > 2) {
        a = 0;
        arr2[a].classList.add('reviews-active');
        arr2[2].classList.remove('reviews-active');
    } else {
        arr2[a].classList.add('reviews-active');
        arr2[a - 1].classList.remove('reviews-active');
    }
});

const sectFirst = document.querySelector(".hero");
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
    if (window.scrollY >= sectFirst.offsetHeight) {
        header.classList.add("stick");
    } else {
        header.classList.remove("stick");
    }
});

const boxItems = document.querySelectorAll('.about-list-item');

boxItems.forEach(item => {
    item.addEventListener('click', function () {
        const isActive = item.classList.contains('active');
        if (!isActive) {
            boxItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    const otherImg = otherItem.querySelector('img');
                    const otherText = otherItem.querySelector('text');
                    otherImg.classList.remove('about-img');
                    otherItem.classList.remove('about-list-orange');
                    otherItem.classList.remove('active');
                }
            });
        }
        const img = item.querySelector('img');
        img.classList.toggle('about-img');
        item.classList.toggle('about-list-orange');
        item.classList.toggle('active');
    });
})
console.log(1);