/* Burger Menu */

const burgerToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const burgerItem = document.querySelectorAll('#burger__item');

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('active');
    nav.classList.toggle('show');
    burgerItem.forEach((e) => {
        e.classList.toggle('white');
    })
});


// Testimonials Slider 

let offset = 0;
const sliderLine = document.getElementById('testimonials__line');
const testimonialsSliderPrev = document.getElementById('testimonials__slider-prev');
const testimonialsSliderNext = document.getElementById('testimonials__slider-next');
const testimonialsCards = document.querySelectorAll('.testimonials__card');

testimonialsSliderNext.addEventListener('click', (e) => {
    e.preventDefault();
    offset += 547;
    if (offset > 1641) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    clearInterval(startSlide);
    setTimeout(continueSLide, 45000);
});

testimonialsSliderPrev.addEventListener('click', (e) => {
    e.preventDefault();
    offset -= 547;
    if (offset < 0) {
        offset = 1094;
    }
    sliderLine.style.left = -offset + 'px';
    clearInterval(startSlide);
    setTimeout(continueSLide, 45000);
});

function testmimonialsSlide() {
    offset += 547;
    if (offset > 1641) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
};

function continueSLide() {
    setInterval(testmimonialsSlide, 15000);
};

const startSlide = setInterval(testmimonialsSlide, 15000);

testimonialsCards.forEach((e) => {
    e.addEventListener('click', () => {
        clearInterval(startSlide);
        setTimeout(continueSLide, 45000);
    });
});


// Pets Slider 

let offsetPets = 0;
const sliderLinePets = document.getElementById('pets__line');
const petsSliderPrev = document.getElementById('petsSliderPrev');
const petsSliderNext = document.getElementById('petsSliderNext');

petsSliderPrev.addEventListener('click', (e) => {
    e.preventDefault();
    offsetPets += 700;
    if (offsetPets > 2800) {
        offsetPets = 0;
    }
    sliderLinePets.style.left = -offsetPets + 'px';
});

petsSliderNext.addEventListener('click', (e) => {
    e.preventDefault();
    offsetPets -= 700;
    if (offsetPets < 0) {
        offsetPets = 2800;
    }
    sliderLinePets.style.left = -offsetPets + 'px';
});


// Animlas Dots Slider

const animalsDotsSlider = document.querySelectorAll('#animals__dots-slider--item')

animalsDotsSlider.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('active');
    })
})

// animalsDotsSlider.addEventListener('click', (e) => {
//     console.log('2');
// })


// Pop Up 

const popUp = document.getElementById('popup');
const closePopUpBtn = document.getElementById('popup-close');
const payBtn = document.getElementById('pay__btn');
const footerBtn = document.getElementById('donate-btn__footer');
const popUpBtns = document.querySelectorAll('.popup__donate-item');

function openPopUp() {
    popUp.classList.add('show');
    document.body.style.overflow = 'hidden';
};

popUp.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup__bg')) {
        closePopUp();
    }
})

function closePopUp() {
    popUp.classList.remove('show');
    document.body.style.overflow = '';
}

closePopUpBtn.addEventListener('click', () => {
    closePopUp();
});

payBtn.addEventListener('click', () => {
    openPopUp();
});

footerBtn.addEventListener('click', () => {
    openPopUp();
});

popUpBtns.forEach(e => {
    e.addEventListener('click', () => {
        closePopUp();
        donatePopUp.classList.add('show');
    });
})

// Pop Up Donate

const donateBtn = document.getElementById('donate-btn');
const donatePopUp = document.getElementById('popupSteps');

const stepOne = document.getElementById('step-one__popup');
const stepTwo = document.getElementById('step-two__popup');
const stepThree = document.getElementById('step-three__popup');

const stepOneBtn =  document.getElementById('step-one');
const stepTwoBtn = document.getElementById('step-two');
const stepThreeBtn = document.getElementById('step-three');

const backBtnTwo = document.getElementById('back__btn-two');
const backBtnThree = document.getElementById('back__btn-three');

donatePopUp.addEventListener('click', e => {
    if (e.target.classList.contains('popup__bg-stepone')) {
        donatePopUp.classList.remove('show');
        document.body.style.overflow = '';
    }
})

donateBtn.addEventListener('click', () => {
    donatePopUp.classList.add('show');
    document.body.style.overflow = 'hidden';
});

document.addEventListener('keydown', (e) => { // закрыть модальное окно при эскейпе
    if (e.code === 'Escape' && donatePopUp.classList.contains('show')) {
        donatePopUp.classList.remove('show');
        document.body.style.overflow = '';
    }
});

stepOneBtn.addEventListener('click', (e) => {
    e.preventDefault();
    stepOne.classList.add('hide');
    stepTwo.classList.add('show');
});

stepTwoBtn.addEventListener('click', () => {
    stepTwo.classList.remove('show');
    stepThree.classList.add('show');
});

backBtnTwo.addEventListener('click', () => {
    stepTwo.classList.remove('show');
    stepOne.classList.remove('hide');
});

backBtnThree.addEventListener('click', () => {
    stepThree.classList.remove('show');
    stepTwo.classList.add('show');
});

// Donate Input max value

const donateInput = document.getElementById('donate__input');

donateInput.addEventListener('keypress', (e) => {
    if (donateInput.value.length >= 4) {
        e.preventDefault();
    }
});

// Pop Ups Inputs 

const stepOneInput = document.getElementById('stepone__input');
const otherBtn = document.getElementById('other__btn');
const tenBtn = document.getElementById('ten');
const twentyBtn = document.getElementById('twenty');
const thirtyBtn = document.getElementById('thirty');
const fiftyBtn = document.getElementById('fifty');
const eightyBtn = document.getElementById('eighty');
const hundredBtn = document.getElementById('hundred');
const stepOneBtns = document.querySelectorAll('popup-stepone__form-btn');
const petSelectBtn = document.getElementById('pet__select');

stepOneInput.addEventListener('keypress', (e) => {
    if (stepOneInput.value.length >= 4) {
        e.preventDefault();
    }
});

donateBtn.addEventListener('click', () => {
    let a = donateInput.value;
    stepOneInput.value = a;
    if (a > 0) {
        otherBtn.classList.add('active');
        stepOneInput.focus();
        tenBtn.classList.remove('active');
        twentyBtn.classList.remove('active');
        thirtyBtn.classList.remove('active');
        fiftyBtn.classList.remove('active');
        eightyBtn.classList.remove('active');
        hundredBtn.classList.remove('active');
    }
    if (a <= 0) {
        tenBtn.classList.add('active');
        twentyBtn.classList.remove('active');
        thirtyBtn.classList.remove('active');
        fiftyBtn.classList.remove('active');
        eightyBtn.classList.remove('active');
        hundredBtn.classList.remove('active');
        otherBtn.classList.remove('active');
    }
});

popUpBtns.forEach(e => {
    e.addEventListener('click', (i) => {
        if (i.target.classList.contains('popup__donate-item--other')) {
            otherBtn.classList.add('active');
            stepOneInput.focus();
        }
        if (i.target.classList.contains('popup__donate-item--20')) {
           twentyBtn.classList.add('active');
        }
        if (i.target.classList.contains('popup__donate-item--30')) {
            thirtyBtn.classList.add('active');
        }
        if (i.target.classList.contains('popup__donate-item--50')) {
            fiftyBtn.classList.add('active');
        }
        if (i.target.classList.contains('popup__donate-item--80')) {
            eightyBtn.classList.add('active');
        }
        if (i.target.classList.contains('popup__donate-item--100')) {
            hundredBtn.classList.add('active');
        }
    })
});

tenBtn.addEventListener('click', (e) => {
    e.preventDefault();
    tenBtn.classList.add('active');
    twentyBtn.classList.remove('active');
    thirtyBtn.classList.remove('active');
    fiftyBtn.classList.remove('active');
    eightyBtn.classList.remove('active');
    hundredBtn.classList.remove('active');
    otherBtn.classList.remove('active');
});

twentyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    tenBtn.classList.remove('active');
    twentyBtn.classList.add('active');
    thirtyBtn.classList.remove('active');
    fiftyBtn.classList.remove('active');
    eightyBtn.classList.remove('active');
    hundredBtn.classList.remove('active');
    otherBtn.classList.remove('active');
});

thirtyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    tenBtn.classList.remove('active');
    twentyBtn.classList.remove('active');
    thirtyBtn.classList.add('active');
    fiftyBtn.classList.remove('active');
    eightyBtn.classList.remove('active');
    hundredBtn.classList.remove('active');
    otherBtn.classList.remove('active');
});

fiftyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    tenBtn.classList.remove('active');
    twentyBtn.classList.remove('active');
    thirtyBtn.classList.remove('active');
    fiftyBtn.classList.add('active');
    eightyBtn.classList.remove('active');
    hundredBtn.classList.remove('active');
    otherBtn.classList.remove('active');
});

eightyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    tenBtn.classList.remove('active');
    twentyBtn.classList.remove('active');
    thirtyBtn.classList.remove('active');
    fiftyBtn.classList.remove('active');
    eightyBtn.classList.add('active');
    hundredBtn.classList.remove('active');
    otherBtn.classList.remove('active');
});

hundredBtn.addEventListener('click', (e) => {
    e.preventDefault();
    tenBtn.classList.remove('active');
    twentyBtn.classList.remove('active');
    thirtyBtn.classList.remove('active');
    fiftyBtn.classList.remove('active');
    eightyBtn.classList.remove('active');
    hundredBtn.classList.add('active');
    otherBtn.classList.remove('active');
});

otherBtn.addEventListener('click', (e) => {
    e.preventDefault();
    tenBtn.classList.remove('active');
    twentyBtn.classList.remove('active');
    thirtyBtn.classList.remove('active');
    fiftyBtn.classList.remove('active');
    eightyBtn.classList.remove('active');
    hundredBtn.classList.remove('active');
    otherBtn.classList.add('active');
    stepOneInput.focus();
});

petSelectBtn.addEventListener('click', e => {
    e.preventDefault();
});


// Pop Up Step 3

const cardNumber = document.getElementById('card__number');
const cardCvv = document.getElementById('card__cvv');
const nameInpt = document.getElementById('name');
const emailInpt = document.getElementById('email');

cardNumber.addEventListener('keypress', (e) => {
    if (cardNumber.value.length >= 16) {
        e.preventDefault();
    }
});

cardCvv.addEventListener('keypress', (e) => {
    if (cardCvv.value.length >= 3) {
        e.preventDefault();
    }
});

stepThreeBtn.addEventListener('click', (e) => {
    if (cardNumber.value.length != 16 || cardCvv.value.length != 3 ||
        nameInpt.value.length < 2 || emailInpt.value.length < 5) {
        e.preventDefault();
        alert('Please fill out the form');
    } else {
        donatePopUp.classList.remove('show');
        document.body.style.overflow = '';
        alert("Thank you for your donation");
    }
});