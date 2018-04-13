let btn = document.getElementById('btn')

let navBar = document.getElementById('nav')

let tracker = 0

btn.addEventListener('click', () => {

    tracker++
    if (tracker % 2 != 0) {
        navBar.className = 'nav-bar nav-expand'
    } else {
        navBar.className = 'nav-bar nav-collapse'
    }
})