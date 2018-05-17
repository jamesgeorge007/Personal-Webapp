/* window.onload = () => {
    let audio = document.createElement('audio');
    audio.src = '../assets/music/song.mp3';
    audio.setAttribute('preload', 'auto');
    audio.setAttribute('controls', 'none');
    document.body.appendChild(audio);
    audio.style.display = 'none';
    audio.play();
} */

let btn = document.getElementById("btn")
let navBar = document.getElementById("nav")
let toggle_one = document.getElementById("sololearn-toggle")
let section_one = document.getElementById("sololearn")
let toggle_two = document.getElementById("lco-toggle");
let section_two = document.getElementById("lco")
let toggle_three = document.getElementById("udemy-toggle")
let section_three = document.getElementById("udemy")
let toggle_four = document.getElementById("datacamp-toggle")
let section_four = document.getElementById("datacamp")
let nav_tracker = 0
let tracker_one = 0
let tracker_two = 0
let tracker_three = 0
let tracker_four = 0

btn.addEventListener('click', () => {

    nav_tracker++
    if (nav_tracker % 2 != 0) {
        navBar.className = 'nav-bar nav-expand'
    } else {
        navBar.className = 'nav-bar nav-collapse'
    }
})

toggle_one.addEventListener('click', () => {
    tracker_one++
    if (tracker_one % 2 != 0) {
        section_one.className = 'sololearn-certificates section-expand'
        toggle_one.className = 'data-toggle rotateDown'
    } else {
        section_one.className = 'sololearn-certificates section-collapse'
        toggle_one.className = 'data-toggle rotateUp'
    }
})

toggle_two.addEventListener("click", () => {
    tracker_two++;
    if (tracker_two % 2 != 0) {
        section_two.className = 'lco-certificates section-expand'
        toggle_two.className = 'data-toggle rotateDown'
    } else {
        section_two.className = 'lco-certificates section-collapse'
        toggle_two.className = 'data-toggle rotateUp'
    }
})

toggle_three.addEventListener("click", () => {
    tracker_three++;
    if (tracker_three % 2 != 0) {
        section_three.className = 'udemy-certificates section-expand'
        toggle_three.className = 'data-toggle rotateDown'
    } else {
        section_three.className = 'udemy-certificates section-collapse'
        toggle_three.className = 'data-toggle rotateUp'
    }
})

toggle_four.addEventListener("click", () => {
    tracker_four++;
    if (tracker_four % 2 != 0) {
        section_four.className = 'datacamp-certificates section-expand'
        toggle_four.className = 'data-toggle rotateDown'
    } else {
        section_four.className = 'datacamp-certificates section-collapse'
        toggle_four.className = 'data-toggle rotateUp'
    }
})