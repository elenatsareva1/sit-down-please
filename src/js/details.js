const headerInput = document.querySelector('.header__search')
const placeholder = document.querySelector('.header__search-placeholder-text')
const placeholderContainer = document.querySelector('.header__search-placeholder')

headerInput.addEventListener('input', () => {
    placeholder.remove()
    if (!headerInput.value) placeholderContainer.append(placeholder)
})

headerInput.addEventListener('blur', () => {
    if (headerInput.value) return
    placeholderContainer.append(placeholder)
})


const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__nav-bottom')
const links = document.querySelectorAll('.header__link-bottom')
const header2 = document.querySelector('.header')

burger.addEventListener('click', () => {
    menu.classList.toggle('header__nav-bottom--active')
    burger.classList.toggle('header__burger--active')
    header2.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

window.addEventListener('click', e => {
    if (e.target === menu) {
        menu.classList.remove('header__nav-bottom--active')
        burger.classList.remove('header__burger--active')
    }
})

links.forEach(e => {
    e.addEventListener('click', () => {
        menu.classList.remove('header__nav-bottom--active')
        burger.classList.remove('header__burger--active')
    })
})

if (!window.location.href.includes("catalog.html") && !window.location.href.includes("product.html") && !window.location.href.includes("work.html")) {
    const more = document.querySelector('.high-rate__btn')
    const moreProducts = document.querySelector('.high-rate__list-hidden')
    moreProducts.style.opacity = '0'
    moreProducts.style.transform = 'scale(0.85)'

    tippy('.happy__descr svg', {
        content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
        theme: 'tomato'
      });

    more.addEventListener('click', () => {
        moreProducts.classList.remove('high-rate__list-hidden')
        setTimeout(() => {
            moreProducts.style.opacity = '1'
            moreProducts.style.transform = 'scale(1)'
            moreProducts.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
        }, 0)
        more.remove()
    })

    const swiperPagination = document.querySelectorAll('.swiper-pagination-bullet')
    const svg = `
    <svg class="swiper-svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
    <circle class="swiper-white" cx="12" cy="12" r="10" stroke="#fff" stroke-width="2"></circle>
    <circle class="swiper-orange" cx="12" cy="12" r="10" stroke="#FF862F" stroke-width="3" style="transform-origin: center center; transform: rotate(90deg) scaleX(-1);"></circle>
    </svg>`

    swiperPagination.forEach(item => {
        item.innerHTML = svg
    })

} else if (window.location.href.includes("catalog.html")) {
    const next = document.querySelector('.catalog__button-2')
    const prev = document.querySelector('.catalog__button-1')
    const pages = document.querySelectorAll('.high-rate__list')
    const catalog = document.querySelector('.catalog')

    pages[1].style.display = 'none'
    pages[1].style.opacity = '0'
    pages[1].style.transform = 'scale(0.85)'

    next.addEventListener('click', () => {
        pages[0].style.opacity = '0'
        pages[0].style.transform = 'scale(0.85)'
        setTimeout(() => pages[0].style.display = 'none', 300)
        pages[1].style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
        pages[0].style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
        setTimeout(() => pages[1].style.display = 'flex', 300)
        setTimeout(() => pages[1].style.opacity = '1', 400)
        setTimeout(() => pages[1].style.transform = 'scale(1)', 400)
        setTimeout(() => catalog.scrollIntoView({
            behavior: "smooth",
            block: "start"
        }), 500)
    })

    prev.addEventListener('click', () => {
        pages[1].style.transform = 'scale(0.85)'
        pages[1].style.opacity = '0'
        setTimeout(() => pages[1].style.display = 'none', 300)
        pages[0].style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
        pages[1].style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
        setTimeout(() => pages[0].style.display = 'flex', 300)
        setTimeout(() => pages[0].style.opacity = '1', 400)
        setTimeout(() => pages[0].style.transform = 'scale(1)', 400)
        setTimeout(() => catalog.scrollIntoView({
            behavior: "smooth",
            block: "start"
        }), 500)
    })

    if (window.innerWidth <= 992) {
        const next2 = document.querySelector('.catalog__button-3')
        pages[2].style.display = 'none'
        pages[2].style.opacity = '0'
        pages[2].style.transform = 'scale(0.85)'

        next2.addEventListener('click', () => {
            pages[1].style.transform = 'scale(0.85)'
            pages[1].style.opacity = '0'
            pages[0].style.transform = 'scale(0.85)'
            pages[0].style.opacity = '0'
            setTimeout(() => pages[1].style.display = 'none', 300)
            setTimeout(() => pages[0].style.display = 'none', 300)
            pages[0].style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
            pages[1].style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
            setTimeout(() => pages[2].style.display = 'flex', 300)
            setTimeout(() => pages[2].style.opacity = '1', 400)
            setTimeout(() => pages[2].style.transform = 'scale(1)', 400)
            setTimeout(() => catalog.scrollIntoView({
                behavior: "smooth",
                block: "start"
            }), 500)
        })

        next.addEventListener('click', () => {
            pages[0].style.opacity = '0'
            pages[0].style.transform = 'scale(0.85)'
            pages[2].style.opacity = '0'
            pages[2].style.transform = 'scale(0.85)'
            setTimeout(() => pages[0].style.display = 'none', 300)
            setTimeout(() => pages[2].style.display = 'none', 300)
            pages[1].style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
            pages[0].style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
            pages[2].style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
            setTimeout(() => pages[1].style.display = 'flex', 300)
            setTimeout(() => pages[1].style.opacity = '1', 400)
            setTimeout(() => pages[1].style.transform = 'scale(1)', 400)
            setTimeout(() => catalog.scrollIntoView({
                behavior: "smooth",
                block: "start"
            }), 500)
        })
    
        prev.addEventListener('click', () => {
            pages[1].style.transform = 'scale(0.85)'
            pages[1].style.opacity = '0'
            pages[2].style.transform = 'scale(0.85)'
            pages[2].style.opacity = '0'
            setTimeout(() => pages[1].style.display = 'none', 300)
            setTimeout(() => pages[2].style.display = 'none', 300)
            pages[0].style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
            pages[1].style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
            pages[2].style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
            setTimeout(() => pages[0].style.display = 'flex', 300)
            setTimeout(() => pages[0].style.opacity = '1', 400)
            setTimeout(() => pages[0].style.transform = 'scale(1)', 400)
            setTimeout(() => catalog.scrollIntoView({
                behavior: "smooth",
                block: "start"
            }), 500)
        })
    }

    const range = document.querySelectorAll('.catalog__range input')
    const price = document.querySelectorAll('.catalog__price input')
    const progress = document.querySelector('.catalog__progress')

    price.forEach(input => {
        input.addEventListener('input', e => {
            let min = parseInt(price[0].value)
            let max = parseInt(price[1].value)
            const priceGap = 25000

            if ((max - min >= priceGap) && max <= 200000) {

                if (e.target.className === 'catalog__field-min') {
                    range[0].value = min
                    progress.style.left = (min / range[0].max) * 100 - 1 + "%"
                }

                else {
                    range[1].value = max
                    progress.style.right = 100 - (max / range[1].max) * 100 - 1 + "%"
                }
            }
            if (max - min <= priceGap) {
                if (e.target.className === 'catalog__field-min') {
                    range[0].value = max - priceGap
                    progress.style.left = (min / range[0].max) * 100 - 1 + "%"
                }
            }
        })
    })

    range.forEach(input => {
        input.addEventListener('input', e => {
            let min = parseInt(range[0].value)
            let max = parseInt(range[1].value)
            const priceGap = 25000

            if (max - min < priceGap) {

                if (e.target.className === 'catalog__range-min') {
                    range[0].value = max - priceGap
                }

                else {
                    range[1].value = min + priceGap
                }

            } else {
                price[0].value = min
                price[1].value = max
                progress.style.left = (min / range[0].max) * 100 - 1 + "%"
                progress.style.right = 100 - (max / range[1].max) * 100 - 1 + "%"
            }
        })
    })
} else if (window.location.href.includes("product.html")) {

    const modal = document.querySelector('.modal')
    const buy = document.querySelector('.product__btn')
    const ok = document.querySelector('.ok')
    const closeModal = document.querySelector('.modal svg')
    const modalbtn = document.querySelector('.modal__btn')
    const modalClose = document.querySelector('.ok svg')

    ok.remove()

    modalbtn.addEventListener('click', e => {
        e.preventDefault()
        if (!validationAfter()) {
            return
        } else {
        document.body.append(ok)
        setTimeout(() => ok.classList.add('ok--active'), 300)
        modal.classList.remove('modal--active')
        setTimeout(() => modal.remove(), 300)
        }
    })

    modalClose.addEventListener('click', () => {
        ok.classList.remove('ok--active')
        setTimeout(() => ok.remove(), 300)
        document.body.style.overflow = 'visible'
    })

    window.addEventListener('click', e => {
        if (e.target === ok) {
            ok.classList.remove('ok--active')
            setTimeout(() => ok.remove(), 300)
            document.body.style.overflow = 'visible'
        }
    })

    buy.addEventListener('click', e => {
        e.preventDefault()
        modal.style.display = 'flex'
        document.body.append(modal)
        setTimeout(() => modal.classList.add('modal--active'), 0)
        document.body.style.overflow = 'hidden'
    })

    closeModal.addEventListener('click', e => {
        e.preventDefault()
        modal.classList.remove('modal--active')
        setTimeout(() => modal.remove(), 300)
        document.body.style.overflow = 'visible'
    })

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.classList.remove('modal--active')
            document.body.style.overflow = 'visible'
        }
    })

    const swiper = document.querySelector('.product__swiper')
    const modalSwiper = document.querySelector('.modal__swiper')
    const modalSwiperClose = document.querySelector('.modal__swiper svg')
    modalSwiper.remove()

    swiper.addEventListener('click', () => {
        document.body.append(modalSwiper)
        setTimeout(() => modalSwiper.classList.add('modal__swiper--active'), 0)
        document.body.style.overflow = 'hidden'
    })

    modalSwiperClose.addEventListener('click', () => {
        modalSwiper.classList.remove('modal__swiper--active')
        setTimeout(() => modalSwiper.remove(), 300)
        document.body.style.overflow = 'visible'
    })

    window.addEventListener('click', e => {
        if (e.target === modalSwiper) {
            modalSwiper.classList.remove('modal__swiper--active')
            setTimeout(() => modalSwiper.remove(), 300)
            document.body.style.overflow = 'visible'
        }
    })
}
