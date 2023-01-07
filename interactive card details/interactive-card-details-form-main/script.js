const cardNumber = document.getElementById('number');
const numberInput = document.getElementById('card-number');

const cardName = document.getElementById('name');
const nameInput = document.getElementById('card-name');

const cardMonth = document.getElementById('month');
const monthInput = document.getElementById('card-month');

const cardYear = document.getElementById('year');
const yearInput = document.getElementById('card-year');

const cardCvc = document.getElementById('cvc');
const cvcInput = document.getElementById('card-cvc');

const submitBtn = document.getElementById('submit-btn');

const completed = document.querySelector('.thank');
const form = document.querySelector('form')

/* name input */
nameInput.addEventListener('input', () => {
  cardName.innerHTML = nameInput.value;
  if (nameInput.value) {
    nameInput.classList.remove('error');
    nameInput.parentElement.classList.remove('error_message');
  }
});

nameInput.addEventListener('click', () => {
  if (!nameInput.value) {
    nameInput.classList.add('error');
    nameInput.parentElement.classList.add('error_message');
  }
});
/* number input */
numberInput.addEventListener('input', () => {
  cardNumber.innerHTML = numberInput.value.replace(/\d{4}/g, (match) => match + ' ');
  if (numberInput.value.replace(/\d{4}/g, (match) => match + ' ')) {
    numberInput.classList.remove('error');
    numberInput.parentElement.classList.remove('error_message');
  }

  
})
numberInput.addEventListener('click', () => {
  if (!numberInput.value.replace(/\d{4}/g, (match) => match + ' ')) {
    numberInput.classList.add('error');
    numberInput.parentElement.classList.add('error_message');
  }
})

/* month input */
monthInput.addEventListener('input', () => {
  cardMonth.innerHTML = monthInput.value;
  if (monthInput.value) {
    monthInput.classList.remove('error');
    monthInput.parentElement.classList.remove('error_message');
  }
});

monthInput.addEventListener('click', () => {
  if (!monthInput.value) {
    monthInput.classList.add('error');
    monthInput.parentElement.classList.add('error_message');
  }
});

/* year input */
yearInput.addEventListener('input', () => {
  cardYear.innerHTML = yearInput.value;
  if (yearInput.value) {
    yearInput.classList.remove('error');
    yearInput.parentElement.classList.remove('error_message');
  }
});

yearInput.addEventListener('click', () => {
  if (!yearInput.value) {
    yearInput.classList.add('error');
    yearInput.parentElement.classList.add('error_message');
  }
});

/* cvc input */
cvcInput.addEventListener('input', () => {
  cardCvc.innerHTML = cvcInput.value;
  if (cvcInput.value) {
    cvcInput.classList.remove('error');
    cvcInput.parentElement.classList.remove('error_message');
  }
});

cvcInput.addEventListener('click', () => {
  if (!cvcInput.value) {
    cvcInput.classList.add('error');
    cvcInput.parentElement.classList.add('error_message');
  }
});



submitBtn.addEventListener('click', (event) => {
  event.preventDefault();  // prevent the form from being submitted

  // Check if all the input fields are filled out
  if (nameInput.value && numberInput.value && monthInput.value && yearInput.value && cvcInput.value) {
    completed.classList.remove('hidden');
    form.classList.add('hidden');
  } else {
    completed.classList.add('hidden');
    form.classList.remove('hidden');

    // Highlight the empty input fields
    if (!nameInput.value) {
      nameInput.classList.add('error');
      nameInput.parentElement.classList.add('error_message');
    }
    if (!numberInput.value) {
      numberInput.classList.add('error');
      numberInput.parentElement.classList.add('error_message');
    }
    if (!monthInput.value) {
      monthInput.classList.add('error');
      monthInput.parentElement.classList.add('error_message');
    }
    if (!yearInput.value) {
      yearInput.classList.add('error');
      yearInput.parentElement.classList.add('error_message');
    }
    if (!cvcInput.value) {
      cvcInput.classList.add('error');
      cvcInput.parentElement.classList.add('error_message');
    }
  }
});

