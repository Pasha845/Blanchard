var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts__list', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLenght: 30,
      errorMessage: 'Passwords should be the same'
    },
    errorMessage: 'Passwords should be the same',
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    }
  },
  messages: {
    name: {
      required: 'Недопустимый формат'
    },
    tel: {
      required: 'Недопустимый формат'
    }
  }
})

tippy('.js-tultipe', {
  theme: 'white-violet'
})