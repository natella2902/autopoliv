const openBurger = document.querySelector('#menu__toggle');
const openMenu = document.querySelector('.nav-rt')

openBurger.addEventListener('click', (e) => {
    if (e.currentTarget.checked) {
       openMenu.style['display'] = 'flex'
    } else {
        openMenu.style['display'] = 'none'
    }
})
