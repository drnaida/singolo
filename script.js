/*Header*/
document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const divs = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.header-navigation__list li a');
  divs.forEach(el => {
    if ((el.offsetTop - 400) <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
      links.forEach(a => {
        a.classList.remove('header-navigation__element--active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('header-navigation__element--active');
        }
      });
    }
  });
  /*Making header smaller on scroll*/
  let header = document.querySelector(".header");
  if (window.pageYOffset > 100 && window.innerWidth > 768) {
    header.style.height = '3.9rem';
  } else if (window.innerWidth > 768) {
    header.style.height = '8.9rem';
  } else {
    header.style.height = '7.1rem';
  }
}
/*Switching slides*/
//Put important information in variables
let items = document.querySelectorAll('.section-slider__slide');
let sliderCondition = 0;
let isTrue = true;
function changeCurrentItem(n) {
    sliderCondition = (n + items.length) % items.length;
}
//function to hide item
function hideItem(direction) {
    isTrue = false;
    items[sliderCondition].classList.add(direction);
    items[sliderCondition].addEventListener('animationend', function() {
        this.classList.remove('section-slider__slide--active', direction);
    })
}
//function to show item
function showItem(direction) {
    items[sliderCondition].classList.add('section-slider__slide--next', direction);
    items[sliderCondition].addEventListener('animationend', function() {
        this.classList.remove('section-slider__slide--next', direction);
        this.classList.add('section-slider__slide--active');
        isTrue = true;
    })
}
//function previous item
function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}
//function next item
function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}
//Call function when left button is clicked
document.getElementById('section-slider__arrow--left').addEventListener('click', function() { if (isTrue) previousItem(sliderCondition); });
//Call function when right button is clicked
document.getElementById('section-slider__arrow--right').addEventListener('click', function() { if (isTrue) nextItem(sliderCondition); });


/*Slider activation of phones*/
document.getElementById('section-slider__vertical-phone--housing').addEventListener('click', phoneSwitching1);
let phoneCondition1 = 1;
let verticalPhoneScreen = document.getElementById('section-slider__vertical-phone--screen');
function phoneSwitching1 () {
  if (phoneCondition1) {
    phoneCondition1 = 0;
    verticalPhoneScreen.classList.add('section-slider__phone--screen--hidden');
  } else {
    phoneCondition1 = 1;
    verticalPhoneScreen.classList.remove('section-slider__phone--screen--hidden');
  }
}
document.getElementById('section-slider__horizontal-phone--housing').addEventListener('click', phoneSwitching2);
let phoneCondition2 = 1;
let horizontalPhoneScreen = document.getElementById('section-slider__horizontal-phone--screen');
function phoneSwitching2 () {
  if (phoneCondition2) {
    phoneCondition2 = 0;
    horizontalPhoneScreen.classList.add('section-slider__phone--screen--hidden');
  } else {
    phoneCondition2 = 1;
    horizontalPhoneScreen.classList.remove('section-slider__phone--screen--hidden');
  }
}

//1. Make parts of the phone stand above each other
//2. Write classes for hiding screen
//3. MAke js for adding and removing classes
//4. Think if you could do it in one function


/*Portfolio: switching tabs*/
//1. Make activation of tabs tabs
//1.1 Call function on activation
let portfolioNavigation = document.querySelector('.section-portfolio__navigation');
portfolioNavigation.addEventListener('click', navigationActivation);
//1.2 Make function
function navigationActivation() {
  let targetElement = event.target;
  if (targetElement.tagName == 'SPAN') {
    portfolioNavigation.querySelectorAll('span').forEach(item => {
      item.classList.remove('section-portfolio__navigation--element-active');
    });

    targetElement.classList.add('section-portfolio__navigation--element-active');
  }
}
//2. Make image change position
//Save important things in variables
let portfolioNavigationButtons = portfolioNavigation.querySelectorAll('span');
let portfolioContent = document.querySelector('.section-portfolio__content');
//Call the function on click
portfolioNavigationButtons.forEach(item => item.addEventListener('click', shuffle));
//Shuffle function
function shuffle(event) {
  //Save other important information in variables
  let portfolioImages = portfolioContent.querySelectorAll('img');
  let targetElement = event.target;
  //Make sure that user can't click on the same button twice
  if (!targetElement.classList.contains('section-portfolio__navigation--element-active')) {
    //Place all of the src in array
    let srcArray = [];
    portfolioImages.forEach(item => {
      srcArray.push(item.src);
    });
    //Make the massive of random numbers without duplication
    function random(size) {
      //Array with length which is number of src
      let randomNumbersArray = new Array(size).fill(0).map((item, i) => i);
      for (let i = randomNumbersArray.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * i);
          //No duplication
          let tmp = randomNumbersArray[i];
          randomNumbersArray[i] = randomNumbersArray[j];
          randomNumbersArray[j] = tmp;
      }
      return randomNumbersArray;
    }
    //Make random array
    let randomArray = random(12);
    //Replace src by indexes in srcArray with random order
    portfolioImages.forEach((item, index) => {
        item.src = srcArray[randomArray[index]];
    });
  }
}

/*Portfolio: interaction with images*/
//1. Call function on clicking on the image
//Portfolio content was declared in "Make image change position"
portfolioContent.addEventListener('click', borderAppearing);
function borderAppearing () {
  let targetElement = event.target;
  //Make protection from not image elements
  if (targetElement.tagName == 'IMG') {
      //Delete all of the outlines
      portfolioContent.querySelectorAll('img').forEach(item => {
        item.style.outline = 'none';
      });
      //Add outline to target element
      targetElement.style.outline = '5px solid #F06C64';
  }
}



/*Get a quote*/
//1. Call function on cliking on the button
document.getElementById('section-contact__form').addEventListener('submit', popupWithFormData);
let popupCondition = 0;
function popupWithFormData () {
  //2. Get values of Subject and Description inputs
  let subjectValue = document.getElementById('section-contact__form--input-subject').value;
  let descriptionValue = document.getElementById('section-contact__form--input-description').value;
  let subjectValuePopup = 'No subject';
  let descriptionValuePopup = 'No description';
  let subjectSpan = document.getElementById('section-contact-popup__span--subject');
  let descriptionSpan = document.getElementById('section-contact-popup__span--description');
  let popup = document.getElementById('popup');
  let form = document.getElementById('section-contact__form');
  //3. Check if they have been filled
  if (subjectValue !== '') {
    subjectValuePopup = `Subject: ${subjectValue}`;
  }
  if (descriptionValue !== '') {
    descriptionValuePopup = `Description: ${descriptionValue}`;
  }
  //4. Make popup
  //Done
  //5. Make popup appear and hide
  if (popupCondition == 0) {
    popupCondition = 1;
    popup.classList.remove('section-contact-popup--hidden');
    //6. Show data in the popup
    subjectSpan.innerHTML = subjectValuePopup;
    descriptionSpan.innerHTML = descriptionValuePopup;
  }

  //7. On clicling on button OK close the popup and reset inputs of form
  document.getElementById('section-contact-popup__button').addEventListener('click', popupClose);
  function popupClose () {
    popupCondition = 0;
    popup.classList.add('section-contact-popup--hidden');
    form.reset();
  }
}
//Closing of mobile menu
let navigationList = document.querySelector('.navigation__list');
navigationList.addEventListener('click', mobileMenuClose);
function mobileMenuClose () {
  let targetElement = event.target;
  //Make protection from not image elements
  if (targetElement.tagName == 'A') {
    document.getElementById("navi-toggle").checked = false;
    console.log('False');
  }
}
