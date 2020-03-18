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
document.getElementById('section-slider__vertical-phone--housing').addEventListener('click', phoneSwitching);
//document.getElementById('section-slider__horizontal-phone').addEventListener('click', phoneSwitching2);
let phoneCondition = 1;
function phoneSwitching () {
  if (phoneCondition) {
    phoneCondition = 0;
    console.log(phoneCondition);
  } else {
    phoneCondition = 1;
    console.log(phoneCondition);
  }
}

//1. Make parts of the phone stand above each other
//2. Write classes for hiding screen
//3. MAke js for adding and removing classes
//4. Think if you could do it in one function


/*Get a quote*/
//1. Call function on cliking on the button
document.getElementById('section-contact__button').addEventListener('click', popupWithFormData);
function popupWithFormData () {
  //2. Get values of Subject and Description inputs
  let subjectValue = document.getElementById('section-contact__form--input-subject').value;
  let descriptionValue = document.getElementById('section-contact__form--input-description').value;
  let subjectValuePopup = 'No subject';
  let descriptionValuePopup = 'No description';
  //3. Check if they have been filled
  if (subjectValue !== '') {
    subjectValuePopup = `Subject: ${subjectValue}`;
  }
  if (descriptionValue !== '') {
    descriptionValuePopup = `Subject: ${descriptionValue}`;
  }
  console.log(subjectValuePopup, descriptionValuePopup);
  //4. Make popup
  //5. Make popup appear and hide
  //6. Show data in the popup
  //7. On clicling on button OK close the popup and reset inputs of form
}
