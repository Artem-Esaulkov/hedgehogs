// slider

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const leftInfo = document.querySelector('#info_1');
const rightInfo = document.querySelector('#info_2');
const leftCardInfo = document.querySelector('.slider__info-card_1');
const rightCardInfo = document.querySelector('.slider__info-card_2');
const like = document.querySelectorAll('.slider__info-likes');

function toggleInfo(card) {
    card.classList.toggle('slider__info-card_active');
}

leftInfo.addEventListener('click', () => {
    console.log('AAA');
    toggleInfo(leftCardInfo);
});

rightInfo.addEventListener('click', () => {
    toggleInfo(rightCardInfo);
});

like.forEach((item) => {
    item.addEventListener('click', (evt) => {
        evt.target.parentElement.classList.toggle('slider__info-likes_active');
        if (evt.target.parentElement.classList.contains('slider__info-likes_active')) {
            evt.target.textContent = (evt.target.textContent / "1") + 1;
        } else {
            evt.target.textContent -= 1;
        }
    })
});

// form-select

const selectItems = document.querySelectorAll('.form__for-item');
selectItems.forEach((item) => {
    item.addEventListener('click', () => {
        selectItems.forEach((elem) => {
            elem.classList.remove('form__for-item_active');
        });
        item.classList.add('form__for-item_active');
    });
});