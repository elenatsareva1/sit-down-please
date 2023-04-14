const headerselect = document.querySelector('.header__top-select')
const headerlocation = document.querySelector('.header__location')
const headerPhone = document.querySelector('.header__social')
const header = document.querySelector('.header')
const headerT = document.querySelector('.header__top')
const headerN = document.querySelector('.header__new')
const headerLogo = document.querySelector('.header__logo')
const headerList = document.querySelector('.header__nav-top')
const headerbtns = document.querySelector('.header__buttons')
const headerTop = document.querySelector('.header__top-content')
const smallText = document.querySelector('.high-rate__card-title-1024')
const headerBottom = document.querySelector('.header__bottom-content')
const headerBottomSelect = document.querySelector('.header__bottom-select')
const headerSearch = document.querySelector('.header__search-label')
const hero = document.querySelector('.hero')


if (window.innerWidth <= 1320) {
    headerPhone.remove()
    headerlocation.remove()
    headerselect.remove()
    headerbtns.remove()
    const newHeader = document.createElement('div')
    const container = document.createElement('div')
    const selectContainer = document.createElement('div')
    const headerContent = document.createElement('div')
    headerContent.classList.add('header__new-content')
    container.classList.add('container')
    newHeader.classList.add('header__new')
    headerTop.append(headerbtns)
    newHeader.append(container)
    container.append(headerContent)
    selectContainer.append(headerlocation, headerselect)
    headerContent.append(selectContainer, headerPhone)
    header.prepend(newHeader)
}

if (!window.location.href.includes('product.html') && !window.location.href.includes('work.html')) {

    if (window.innerWidth < 1024) {
        smallText.innerHTML = 'Диван апартек<br> “T-75”'
    }
}

if (window.innerWidth <= 992) {
    headerbtns.remove()
    headerBottom.append(headerbtns)
    if (!window.location.href.includes('product.html') && !window.location.href.includes('work.html')) {
        smallText.innerHTML = 'Диван апартековый<br> “T-75”'
    }
}

if (window.innerWidth <= 580) {
    const container = document.createElement('div')
    container.classList.add('container')
    headerList.remove()
    headerTop.append(headerLogo)
    headerT.innerHTML = ''
    headerT.append(headerTop)
    header.prepend(headerT)
    const headerBottomNew = document.createElement('div')
    headerBottomNew.classList.add('header__bottom-new')
    container.append(headerSearch, headerBottomSelect)
    headerBottomNew.append(container)
    header.append(headerBottomNew)
    if (!window.location.href.includes('catalog.html') && !window.location.href.includes('product.html') && !window.location.href.includes('work.html')) {
        const newBtn = document.createElement('button')
        newBtn.classList.add('hero__btn')
        newBtn.style.display = 'block'
        newBtn.style.width = '92%'
        newBtn.innerHTML = 'Получить!'
        hero.append(newBtn)
        const prev = document.querySelector('.special__swiper-button-prev')
        const next = document.querySelector('.special__swiper-button-next')
        const special = document.querySelector('.special__content')
        const specialbtns = document.createElement('div')
        specialbtns.classList.add('special__btns')
        specialbtns.append(prev, next)
        special.append(specialbtns)
        const collectionCont = document.createElement('div')
        const containerColl = document.createElement('div')
        containerColl.classList.add('container')
        collectionCont.classList.add('collection__container')
        const collection = document.querySelector('.collection')
        const cont = document.querySelector('.collection .container')
        const collBtn = document.querySelector('.collection__btn')
        containerColl.append(collBtn)
        collection.append(collectionCont, containerColl)
        collectionCont.append(cont)
        const hits = document.querySelectorAll('.hits__card-title')
        hits.forEach(e => {
            const svg = document.createElement('span')
            svg.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_677_3058)"> <g clip-path="url(#clip1_677_3058)"> <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="#A65CF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <circle cx="11" cy="11" r="10" stroke="#A65CF0" stroke-width="2"/> </g> </g> <defs> <clipPath id="clip0_677_3058"> <rect width="22" height="22" fill="white"/> </clipPath> <clipPath id="clip1_677_3058"> <rect width="22" height="22" fill="white"/> </clipPath> </defs> </svg> `
            e.append(svg)
        })
        const prev2 = document.querySelector('.useful__swiper-button-prev')
        const next2 = document.querySelector('.useful__swiper-button-next')
        const useful = document.querySelector('.useful .container')
        const specialbtnsUseful = document.createElement('div')
        specialbtnsUseful.classList.add('useful__btns')
        specialbtnsUseful.append(prev2, next2)
        useful.append(specialbtnsUseful)
    }
}

if (window.innerWidth >= 380 && window.innerWidth <= 580) {
    const items = document.querySelectorAll('.footer__right-item')
    items.forEach(e => {
        e.style.width = '43%'
    })
}

if (window.location.href.includes('catalog.html')) {
    if (window.innerWidth > 760 && window.innerWidth <= 767) {
        smallText.innerHTML = 'Диван апартек<br> “T-75”'
    }
}

if (window.location.href.includes('product.html')) {
    if (window.innerWidth <= 992) {
        const product = document.querySelector('.product__info')
        const left = document.querySelector('.product__left')
        left.append(product)
        const list = document.querySelectorAll('.product__list-visible .product__item-text')

        list.forEach(e => {
            const currentText = e.innerHTML
            e.innerHTML = currentText + '••••••••••••••••••••••••••••••••••••••••••'
        })
    }
    if (window.innerWidth <= 580) {
        const location = document.querySelector('.product__location')
        location.remove()
        const prev = document.querySelector('.same__swiper-button-prev')
        const next = document.querySelector('.same__swiper-button-next')
        const useful = document.querySelector('.same .container')
        const specialbtnsUseful = document.createElement('div')
        specialbtnsUseful.classList.add('same__btns')
        specialbtnsUseful.append(prev, next)
        useful.append(specialbtnsUseful)
    }
}