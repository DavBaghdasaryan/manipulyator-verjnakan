let body = document.querySelector('.body')

/////////// pages

let intro = document.querySelector('.intro')
let booking_section = document.querySelector('.booking_section')
let footer = document.querySelector('.footer')
//////// scroll buttons

let logo = document.querySelectorAll('.header_logo')
let booking = document.querySelectorAll('.booking')
let up_scroll = document.querySelector('.up_scroll')
let contact = document.querySelectorAll('.contact')


//////header
let header = document.querySelector('.header')

// burger menu
let burger = document.querySelector('.burger')
let close_btn = document.querySelector('.close_btn')
let burger_nav = document.querySelector('.burger_nav')


// calculate
let calc_btn = document.querySelector('.calc_btn')
let calculator = document.querySelector('.calculator')
let cancel_btn = document.querySelector('.cancel_btn')

let bort = document.querySelector('#bort')
let strela = document.querySelector('#strela')

let strela1 = document.querySelector('.strela1')
let strela2 = document.querySelector('.strela2')
let strela3 = document.querySelector('.strela3')


let slider1 = document.getElementById('range1')
let slider2 = document.getElementById('range2')

let output1 = document.getElementById('value1')
let output2 = document.getElementById('value2')

let obshi = document.getElementById('obshi')

let yndhanur = parseInt(obshi.innerHTML)





bort.addEventListener('change', () => {
    let selectedValueBort = bort.options[bort.selectedIndex].value;

    if (selectedValueBort == 5) {
        strela.addEventListener('change', () => {
            let selectedValueStrela = strela.options[strela.selectedIndex].value;

            if (selectedValueStrela == 3) {
                obshi.innerHTML = '9000руб'
                yndhanur = parseInt(obshi.innerHTML)


                output1.innerHTML = slider1.value

                slider1.addEventListener('input', () => {
                    output1.innerHTML = slider1.value
                    let value = parseInt(slider1.value) + parseInt(slider2.value)
                    obshi.innerHTML = parseInt(value * 35 + yndhanur) + "руб"

                })

                output2.innerHTML = slider2.value

                slider2.addEventListener('input', () => {
                    output2.innerHTML = slider2.value
                    let value = parseInt(slider1.value) + parseInt(slider2.value)

                    obshi.innerHTML = parseInt(value * 35 + yndhanur) + "руб"

                })


            }
            if (selectedValueStrela == 5) {
                obshi.innerHTML = '10000руб'
                yndhanur = parseInt(obshi.innerHTML)

                output1.innerHTML = slider1.value

                slider1.addEventListener('input', () => {
                    output1.innerHTML = slider1.value
                    let value = parseInt(slider1.value) + parseInt(slider2.value)
                    obshi.innerHTML = parseInt(value * 40 + yndhanur) + "руб"

                })

                output2.innerHTML = slider2.value

                slider2.addEventListener('input', () => {
                    output2.innerHTML = slider2.value
                    let value = parseInt(slider1.value) + parseInt(slider2.value)

                    obshi.innerHTML = parseInt(value * 40 + yndhanur) + "руб"

                })
            }

            if (selectedValueStrela == 10) {
                obshi.innerHTML = '11000руб'
                yndhanur = parseInt(obshi.innerHTML)

                output1.innerHTML = slider1.value

                slider1.addEventListener('input', () => {
                    output1.innerHTML = slider1.value
                    let value = parseInt(slider1.value) + parseInt(slider2.value)
                    obshi.innerHTML = parseInt(value * 45 + yndhanur) + "руб"

                })

                output2.innerHTML = slider2.value

                slider2.addEventListener('input', () => {
                    output2.innerHTML = slider2.value
                    let value = parseInt(slider1.value) + parseInt(slider2.value)

                    obshi.innerHTML = parseInt(value * 45 + yndhanur) + "руб"

                })
            }
        })

        strela.appendChild(strela1)
        strela.appendChild(strela2)
        strela.appendChild(strela3)


    }







    if (selectedValueBort == 7) {
        strela.addEventListener('change', () => {
            let selectedValueStrela = strela.options[strela.selectedIndex].value;

            if (selectedValueStrela == 10) {
                obshi.innerHTML = '12000руб'
                yndhanur = parseInt(obshi.innerHTML)

                output1.innerHTML = slider1.value

                slider1.addEventListener('input', () => {
                    output1.innerHTML = slider1.value
                    let value = parseInt(slider1.value) + parseInt(slider2.value)
                    obshi.innerHTML = parseInt(value * 50 + yndhanur) + "руб"

                })

                output2.innerHTML = slider2.value

                slider2.addEventListener('input', () => {
                    output2.innerHTML = slider2.value
                    let value = parseInt(slider1.value) + parseInt(slider2.value)

                    obshi.innerHTML = parseInt(value * 50 + yndhanur) + "руб"

                })

            }


        })


        strela.removeChild(strela1)
        strela.removeChild(strela2)

    }

    if (selectedValueBort == 10) {
        strela.addEventListener('change', () => {
            let selectedValueStrela = strela.options[strela.selectedIndex].value;

            if (selectedValueStrela == 10) {
                obshi.innerHTML = '14000руб'
                yndhanur = parseInt(obshi.innerHTML)

                output1.innerHTML = slider1.value

                slider1.addEventListener('input', () => {
                    output1.innerHTML = slider1.value
                    let value = parseInt(slider1.value) + parseInt(slider2.value)
                    obshi.innerHTML = parseInt(value * 60 + yndhanur) + "руб"

                })

                output2.innerHTML = slider2.value

                slider2.addEventListener('input', () => {
                    output2.innerHTML = slider2.value
                    let value = parseInt(slider1.value) + parseInt(slider2.value)

                    obshi.innerHTML = parseInt(value * 60 + yndhanur) + "руб"

                })

            }


        })


        strela.removeChild(strela1)
        strela.removeChild(strela2)
    }


})
// 10/10 14000 60rub










calc_btn.addEventListener('click', e => {
    e.preventDefault()
    intro.scrollIntoView({ behavior: "smooth" })

    calculator.style.display = 'block'
    body.classList.add('hidden')

})


cancel_btn.addEventListener('click', e => {
    e.preventDefault()
    calculator.style.display = 'none'
    body.classList.remove('hidden')
})



/////////////// burger menu
burger.addEventListener('click', e => {
    e.preventDefault()
    burger_nav.classList.add('block')
    burger.style.display = 'none'
})

close_btn.addEventListener('click', e => {
    e.preventDefault()
    burger_nav.classList.remove('block')
    burger.style.display = 'block'
})

/////////////// header_fixed position

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY
    if (scrollY > 90) {
        up_scroll.style.display = 'block'
        header.classList.add('black_header')
    } else if (scrollY < 30) {
        up_scroll.style.display = 'none'

        header.classList.remove('black_header')
    }
})

//////////// intro_scroll
up_scroll.addEventListener('click', e => {
    e.preventDefault()
    intro.scrollIntoView({ behavior: "smooth" })
})


logo.forEach(i => {
    i.addEventListener('click', e => {
        e.preventDefault()
        intro.scrollIntoView({ behavior: "smooth" })
    })
})


////////////// booking_scroll
booking.forEach(i => {
    i.addEventListener('click', e => {
        e.preventDefault()
        booking_section.scrollIntoView({ block: "center", behavior: "smooth" })
        burger_nav.classList.remove('block')
        burger.style.display = 'block'
    })
})







//////////////// footer_section_scroll


contact.forEach(i => {
    i.addEventListener('click', e => {
        e.preventDefault()
        footer.scrollIntoView({ behavior: "smooth" })
        burger_nav.classList.remove('block')
        burger.style.display = 'block'
    })
})
