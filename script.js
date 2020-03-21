/*Header*/
document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const divs = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.header-navigation__list > li > a');
  divs.forEach((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offSetHeight) > curPos) {
      links.forEach((a) => {
        a.classList.remove('header-navigation__element--active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('header-navigation__element--active');
        }
      });

    }
  });
}
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
//2. Make image to change position



/*Portfolio: interaction with images*/
//1. Call function on clicking on the image
let portfolioContent = document.querySelector('.section-portfolio__content');
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
document.getElementById('section-contact__button').addEventListener('click', popupWithFormData);
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
