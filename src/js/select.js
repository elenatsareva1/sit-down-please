const selectt = document.querySelector('.header__top-select')
const selectbtnt = document.querySelector('.header__top-select-header')
const selectCurrentt = document.querySelector('.header__top-select-current')
const selectBodyt = document.querySelector('.header__top-select-body')
const selectItemst = document.querySelectorAll('.header__top-select-item')
const selectIcont = document.querySelector('.header__top-select-icon')
const selectBodytCopy = selectBodyt

selectbtnt.addEventListener('click', e => {
    selectBodyt.classList.toggle('header__top-select-body--active')
    selectIcont.classList.toggle('header__top-select-icon--active')
    if (selectBodyt.classList.contains('header__top-select-body--active')) {
        selectBodyt.style.outline = '2px solid #A65CF0'
        }
        else {
            selectBodyt.style.outline = 'none'      
        }
        e._isClicked = true

        window.addEventListener('click', el => {
            if (!el._isClicked) {
                selectBodyt.classList.remove('header__top-select-body--active')
                selectIcont.classList.remove('header__top-select-icon--active')
                selectBodyt.style.outline = 'none' 
            }
        })
})

selectItemst.forEach(e => {
    e.addEventListener('click', el => {
        selectCurrentt.innerHTML = el.target.innerHTML
        selectBodyt.classList.remove('header__top-select-body--active')
        selectIcont.classList.remove('header__top-select-icon--active')
        selectBodyt.style.outline = 'none' 
    })
})

const selectb = document.querySelector('.header__bottom-select')
const selectbtnb = document.querySelector('.header__bottom-select-header')
const selectCurrentb = document.querySelector('.header__bottom-select-current')
const selectBodyb = document.querySelector('.header__bottom-select-body')
const selectItemsb = document.querySelectorAll('.header__bottom-select-item')
const selectIconb = document.querySelector('.header__bottom-select-icon')

selectbtnb.addEventListener('click', e => {
    selectBodyb.classList.toggle('header__bottom-select-body--active')
    selectbtnb.classList.toggle('header__bottom-select-header--active')
    e._isClicked = true
    if (selectbtnb.classList.contains('header__bottom-select-header--active')) {
        selectbtnb.style.borderBottomRightRadius = '0px'
        selectbtnb.style.borderBottomLeftRadius = '0px'
    selectbtnb.style.outline = '2px solid #A65CF0'
    selectBodyb.style.outline = '2px solid #A65CF0'
    }
    else {
        selectbtnb.style.outline = 'none'
        selectBodyb.style.outline = 'none'
        selectbtnb.style.borderBottomRightRadius = '10px'
        selectbtnb.style.borderBottomLeftRadius = '10px'
    }
    selectIconb.classList.toggle('header__bottom-select-icon--active')

    window.addEventListener('click', el => {
        if (!el._isClicked) {
            selectBodyb.classList.remove('header__bottom-select-body--active')
            selectIconb.classList.remove('header__bottom-select-icon--active')
            selectbtnb.style.outline = '0px solid #A65CF0'
            selectBodyb.style.outline = 'none' 
        }
    })
})

selectItemsb.forEach(e => {
    e.addEventListener('click', el => {
        selectCurrentb.innerHTML = el.target.innerHTML
        selectBodyb.classList.remove('header__bottom-select-body--active')
        selectIconb.classList.remove('header__bottom-select-icon--active')
        selectbtnb.classList.remove('header__bottom-select-header--active')
        selectbtnb.style.outline = 'none'
        selectBodyb.style.outline = 'none'
    })
})

const catalogbtn = document.querySelectorAll('.catalog__select-header')

catalogbtn.forEach(e => {
    e.addEventListener('click', el => {
        const target = el.currentTarget
        const drop = target.nextElementSibling
        const items = drop.querySelectorAll('.catalog__select-item')
        drop.classList.toggle('catalog__select-body--active')

        items.forEach(e => {
            e.addEventListener('click', () => {
                const text = e.innerHTML
                target.querySelector('.catalog__select-current').innerHTML = text
                drop.classList.remove('catalog__select-body--active')
            })
        })

        window.addEventListener('click', e => {
            if (e.target !== target && e.target !== target.querySelector('.catalog__select-current') &&
            e.target !== target.querySelector('.catalog__select-icon') &&
            e.target !== target.querySelector('.catalog__select-icon svg')) {
                drop.classList.remove('catalog__select-body--active')
            }
        })
    })
})
