//dom
let inputChar = document.getElementById("input-El")
let charImg = document.getElementById("charImg-El")
let buttonclick = document.getElementById("start-El")
let total = document.getElementById("points-El")

//file location names
const imgUrl = [
  "goku.jpg","kagami.jpg","rukawa.jpg","sakuragi.jpg","mikasa.jpg",
  "eren.jpg","kirito.jpg","yato.jpg","hinata.jpg","nanami.jpg",
  "gon.jpg","shinobu.jpg","touka.jpg","megumi.jpg","meruem.jpg",
  "sanji.jpg","kaido.jpg","toji.jpg","itachi.jpg","kurama.jpg",
  "giyu.jpg","l.jpg","akaza.jpg","nobara.jpg","vegeta.jpg",
  "kaneki.jpg","tanjiro.jpg","luffy.jpg","kuroko.jpg","minato.jpg",
  "oikawa.jpg","sukuna.jpg","ryuk.jpg","esdeath.jpg","kageyama.jpg",
  "gaara.jpg","yamato.jpg","boruto.jpg","sarada.jpg","hisoka.jpg",
  "light.jpg","asta.jpg","rengoku.jpg","levi.jpg","frieza.jpg",
  "shanks.jpg","gojo.jpg","zoro.jpg","killua.jpg","naruto.jpg"
];

//get random num
let points = 0
let randomNum = 0
let guessCount = 0
let placeholder = []

function generateImg(){
    let charHolder

    do {
        randomNum = Math.floor(Math.random() * imgUrl.length)
        charHolder = imgUrl[randomNum]
    } while(placeholder.includes(charHolder))

    charImg.src = `Characters/${imgUrl[randomNum]}`
    charImg.style.filter = "blur(10px)"

    placeholder.push(charHolder)

    if (placeholder.length == imgUrl.length){
        charImg.src = `congrats.jpg`
        charImg.style.filter = "none"
        placeholder = []
    }
}

function correctAnswer(){
    charImg.style.filter ="none"
}


inputChar.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        let guess = inputChar.value.toLowerCase().trim();

        let currentImg = imgUrl[randomNum]; // e.g. "asta.jpg"
        let urlName = currentImg.split(".")[0].toLowerCase(); // "asta"

        if (guess === urlName) {
            correctAnswer();
            points += 1;
            total.innerHTML = `TOTAL: ${points}`

            guessCount = 0

            if (points >= 50) {
                charImg.src = `congrats.jpg`
                charImg.style.filter = "none"
                placeholder = []
                return
            }

            setTimeout(function(){
                generateImg()
            }, 1000)

        } else {
            guessCount += 1
        }

        if (guessCount > 2) {
            points = 0
            charImg.style.filter = "none"
            total.innerHTML = `TOTAL: ${points}`;
            setTimeout(function(){
                generateImg()
            }, 1000)
            guessCount = 0
        } 
        console.log(guessCount)

        inputChar.value = "";
    }
});

// store the jpg file, and it should not match the existing, else, generate another number
