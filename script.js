window.onload = () => {
    setInterval(() => el.setAttribute('style', 'background-position-y:' + window.pageYOffset / 2.5 + 'px'), 10)
    const
        el     = document.getElementById('bg')
        button = document.getElementById('hamb')
        menu   = document.getElementById('list')

    button.addEventListener('click', () => {
        if(menu.getAttribute('class') == 'hide'){
            menu.setAttribute('class', '')
        } else {
            menu.setAttribute('class', 'hide')
        }
    })
}