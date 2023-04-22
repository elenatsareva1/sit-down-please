const inputMask = document.querySelector("input[type='tel']")

const mask = new Inputmask("+7 (999) 999-99-99");
mask.mask(inputMask);

const validationAfter = () => {
    const nameInput = document.querySelector('.happy__name')
    const telInput = document.querySelector('.happy__tel')
    const mailInput = document.querySelector('.happy__mail')
    const checkboxInput = document.querySelector('.happy__check-input')
    const nameInputModal = document.querySelector('.modal__input-name')
    const telInputModal = document.querySelector('.modal__input-tel')
    const nameError = document.querySelector('.happy__message-name')
    const telError = document.querySelector('.happy__message-tel')
    const mailError = document.querySelector('.happy__message-mail')
    const checkboxError = document.querySelector('.happy__message-checkbox')
    const nameErrorModal = document.querySelector('.modal__error-name')
    const telErrorModal = document.querySelector('.modal__error-tel')
    const rejexpName = /[^а-яА-ЯёЁ]/
    const rejexpMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    const validateName = (input, error) => {
        if (!input.value) {
            input.style.outline = '2px solid red'
            error.innerHTML = 'Это поле не может быть пустым'
            return false
        }
        else if (input.value.length <= 3 && !rejexpName.test(input.value)) {
            input.style.outline = '2px solid red'
            error.innerHTML = 'Подозрительно короткое имя'
            return false
        }
        else if (rejexpName.test(input.value)) {
            input.style.outline = '2px solid red'
            error.innerHTML = 'Допустимы только символы кириллицы'
            return false
        }
        else {
            input.style.outline = '2px solid #B8EC64'
            error.innerHTML = ''
        }

        return true
    }

    const validateTel = (input, error) => {
        if (!input.value) {
            input.style.outline = '2px solid red'
            error.innerHTML = 'Это поле не может быть пустым'
            return false
        }

        const phone = inputMask.inputmask.unmaskedvalue()

        if (phone.length !== 10) {
            return false
        }

        return true
    }

    const validateMail = (input, error) => {
        if (!input.value) {
            input.style.outline = '2px solid red'
            error.innerHTML = 'Это поле не может быть пустым'
            return false
        }
        else if (input.value.length <= 7 && !rejexpMail.test(input.value)) {
            input.style.outline = '2px solid red'
            error.innerHTML = 'Подозрительно короткая почта'
            return false
        }
        else if (!rejexpMail.test(input.value)) {
            input.style.outline = '2px solid red'
            error.innerHTML = 'Допустимы только символы латиницы'
            return false
        }

        return true
    }

    const validateCheckbox = (input, error) => {
      if (!input.value) {
          input.style.outline = '2px solid red'
          error.innerHTML = 'Поставьте флажок о прочтении пользовательского соглашения'
          return false
      }

      return true
    }

    if (!window.location.href.includes("catalog.html") &&
        !window.location.href.includes("product.html") && !window.location.href.includes("work.html")) {

        if (!validateName(nameInput, nameError)) { return false }

        if (!validateTel(telInput, telError)) { return false }

        if (!validateMail(mailInput, mailError)) { return false }

        if (!validateCheckbox(checkboxInput, checkboxError)) { return false }
    }

    else if (window.location.href.includes("product.html")) {

        if (!validateName(nameInputModal, nameErrorModal)) { return false }

        if (!validateTel(telInputModal, telErrorModal)) { return false }
    }

    return true
}

const validationBefore = () => {
    const nameInput = document.querySelector('.happy__name')
    const telInput = document.querySelector('.happy__tel')
    const mailInput = document.querySelector('.happy__mail')
    const checkboxInput = document.querySelector('.happy__check-input')
    const nameInputModal = document.querySelector('.modal__input-name')
    const telInputModal = document.querySelector('.modal__input-tel')
    const nameError = document.querySelector('.happy__message-name')
    const telError = document.querySelector('.happy__message-tel')
    const mailError = document.querySelector('.happy__message-mail')
    const checkboxError = document.querySelector('happy__message-checkbox')
    const nameErrorModal = document.querySelector('.modal__error-name')
    const telErrorModal = document.querySelector('.modal__error-tel')
    const keyArray = []
    const keyCodeArray = []
    const rejexpName = /[^а-яА-ЯёЁ]/
    const rejexpTel = /[^1-9|0]/
    const rejexpMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    const validateName = (input, error) => {
        input.addEventListener('input', () => {
            if (!input.value) {
                input.style.outline = '2px solid red'
                error.innerHTML = 'Это поле не может быть пустым'
            }
            else if (input.value.length <= 3 && !rejexpName.test(input.value)) {
                input.style.outline = '2px solid red'
                error.innerHTML = 'Подозрительно короткое имя'
            }
            else if (rejexpName.test(input.value)) {
                input.style.outline = '2px solid red'
                error.innerHTML = 'Допустимы только символы кириллицы'
            }
            else {
                input.style.outline = '2px solid #B8EC64'
                error.innerHTML = ''
            }
        })
    }

    const validateTel = (input, error) => {
        input.addEventListener('input', () => {
            if (!input.value) {
                input.style.outline = '2px solid red'
                error.innerHTML = 'Это поле не может быть пустым'
            }

            else {
                input.style.outline = '2px solid #B8EC64'
                error.innerHTML = ''
            }
        })

        input.addEventListener('keydown', e => {
            if (e.keyCode === 8) {
                if (keyArray.length !== 0) {
                keyCodeArray.push('1')
                keyArray.length -= 1
                input.style.outline = '2px solid red'
                error.innerHTML = 'Номер должен состоять из 11 цифр'
                if (keyCodeArray.length === 1 && keyArray.length === 8) {
                    keyArray.length = 9
                }
            }
            }
            else if (keyArray.length !== 9 && !rejexpTel.test(e.key)) {
                keyArray.push(e.key)
                input.style.outline = '2px solid red'
                error.innerHTML = 'Номер должен состоять из 11 цифр'
            }
            else if (rejexpTel.test(e.key)) {
                input.style.outline = '2px solid red'
                error.innerHTML = 'Допустимы только цифры'
            }
            else {
                input.style.outline = '2px solid #B8EC64'
                error.innerHTML = ''
                keyCodeArray.length = 0
            }
        })
    }

    const validateMail = (input, error) => {
        input.addEventListener('input', () => {
            if (!input.value) {
                input.style.outline = '2px solid red'
                error.innerHTML = 'Это поле не может быть пустым'
                return false
            }
            else if (input.value.length <= 7 && !rejexpMail.test(input.value)) {
                input.style.outline = '2px solid red'
                error.innerHTML = 'Подозрительно короткая почта'
                return false
            }
            else if (!rejexpMail.test(input.value)) {
                input.style.outline = '2px solid red'
                error.innerHTML = 'Допустимы только символы латиницы'
                return false
            }

            else {
                input.style.outline = '2px solid #B8EC64'
                error.innerHTML = ''
            }
        })
    }

    const validateCheckbox = (input, error) => {
      if (!input.value) {
          input.style.outline = '2px solid red'
          error.innerHTML = 'Поставьте флажок о прочтении пользовательского соглашения'
          return false
      }

      return true
    }

    if (!window.location.href.includes("catalog.html") &&
        !window.location.href.includes("product.html") && !window.location.href.includes("work.html")) {

        validateName(nameInput, nameError)

        validateTel(telInput, telError)

        validateMail(mailInput, mailError)

        validateCheckbox(checkboxInput, checkboxError)
    }

    else if (window.location.href.includes("product.html")) {

        validateName(nameInputModal, nameErrorModal)

        validateTel(telInputModal, telErrorModal)
    }

}

const nameInput = document.querySelector('.happy__name')
const telInput = document.querySelector('.happy__tel')
const mailInput = document.querySelector('.happy__mail')
const checkboxInput = document.querySelector('.happy__checkbox')
const nameInputModal = document.querySelector('.modal__input-name')
const telInputModal = document.querySelector('.modal__input-tel')
const btn = document.querySelector('.happy__btn')
const btnModal = document.querySelector('.modal__btn')

const startValidate = input => {
    input.addEventListener('click', () => {
        validationBefore()
    })
}

if (!window.location.href.includes("catalog.html") &&
    !window.location.href.includes("product.html") && !window.location.href.includes("work.html")) {
    btn.addEventListener('click', e => {
        if (!validationAfter()) { e.preventDefault() }
    })

    startValidate(nameInput)
    startValidate(telInput)
    startValidate(mailInput)
    startValidate(checkboxInput)
}
else if (window.location.href.includes("product.html")) {
    btnModal.addEventListener('click', e => {
        if (!validationAfter()) { e.preventDefault() }
    })

    startValidate(nameInputModal)
    startValidate(telInputModal)
}
