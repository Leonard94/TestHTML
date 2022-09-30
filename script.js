const burger = document.getElementById('burger')

const clickHandle = () => {
    const menu = document.getElementById('menu')
    const body = document.querySelector('body')
    
    body.classList.toggle('body--lock')
    burger.classList.toggle('burger--active')
    menu.classList.toggle('menu--active')
}

burger.addEventListener('click', clickHandle)
