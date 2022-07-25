let toggle_btn
let big_wrapper
let hamburger_menu
const main = document.querySelector('main');

let dark = false

function declare() {
    big_wrapper = document.querySelector('.big-wrapper');
    toggle_btn = document.querySelector('.toggle-btn');
    hamburger_menu = document.querySelector('.hamburger-menu')
}

declare()

function toggleAnimation(){
    // Clonar la landing
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);

    if(dark){
        clone.classList.remove('light')
        clone.classList.add('dark')
    }
    else {
        clone.classList.remove('dark')
        clone.classList.add('light')
    }
    clone.classList.add('copy')
    main.appendChild(clone)

    document.body.classList.add('stop-scrolling')

    clone.addEventListener('animationend', () => {
        document.body.classList.remove('stop-scrolling')

        big_wrapper.remove()
        clone.classList.remove('copy')

        //resetear variables
        declare()
        events()
    })
}

function events(){
    toggle_btn.addEventListener('click', toggleAnimation);
    hamburger_menu.addEventListener('click', () => {
        big_wrapper.classList.toggle('active')
    })
}

events()



