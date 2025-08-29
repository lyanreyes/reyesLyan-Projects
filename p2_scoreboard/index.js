
let homes = document.getElementById("home-el")
let away = document.getElementById("away")

let home = 0
let guest = 0

// home
function home1() {
    home += 1
    homes.textContent = home
}
function home2() {
    home += 2
    homes.textContent = home
}
function home3() {
    home += 3
    homes.textContent = home
}

// guest
function guest1() {
    guest += 1
    away.textContent = guest
}
function guest2() {
    guest += 2
    away.textContent = guest
}
function guest3() {
    guest += 3
    away.textContent = guest
}

function reset() {
    home = 0
    guest = 0
    homes.textContent = home
    away.textContent = guest
}