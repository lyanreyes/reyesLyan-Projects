// assign a value to each of the button ids

// add a place holder image until flipped, revealing itself
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btn10 = document.getElementById("btn10")
const btn11 = document.getElementById("btn11")
const btn12 = document.getElementById("btn12")
const btn13 = document.getElementById("btn13")
const btn14 = document.getElementById("btn14")
const btn15 = document.getElementById("btn15")
const btn16 = document.getElementById("btn16")

const buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8,
    btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16
]

// to duplicate 
const imgPath = [
    "akatsuki.jpg", "aot.jpg", "bbulls.jpg", "ben10.jpg",
    "bluelock.jpg", "demon.jpg", "fireforce.jpg", "goku.jpg",
    "gomu.jpg", "hinata.jpg", "hxh.jpg", "L.jpg", 
    "ms.jpg", "naruto.jpg", "onepiece.jpg", "pokemon.jpg", 
    "rinnegan.jpg", "uchiha.jpg", "uzumaki.jpg", "whitebeard.jpg"
]

let holder = []
let counter = 0

// function show(button){
//     if(counter < 2) {
//         button.style.backgroundImage = "url(images/akatsuki.jpg)"
//     } else {
//         button.removeAttribute("style")
//     }
//     counter += 1
// }

// function unshow(){
//     button.removeAttribute("style")
// }

// assign the random btns an image

function generateImg(){
    let randomNum
    let generatedImg
    for (let i = 0; i < buttons.length/2; i++){
        do {
            randomNum = Math.floor(Math.random() * imgPath.length)
            generatedImg = imgPath[randomNum]
        } while (holder.includes(generatedImg))

        holder.push(generatedImg)
        holder.push(generatedImg)
}
}

//fisher-yates algorithm
function shuffleIndex(array){
    for (let i = array.length - 1; i > 0; i--){
        const randoms = Math.floor(Math.random() * (i+1));

        [array[i], array[randoms]] = [array[randoms], array[i]]
    }
}


function assignImg(){
    shuffleIndex(holder)
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundImage = `url(images/${holder[i]})`
    }
}

generateImg()
assignImg()
console.log(holder)

//// game mechanic

function reset(){
    button.removeAttribute("style")
}