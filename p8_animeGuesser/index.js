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

function generateImg(){
    randomNum = Math.floor(Math.random() * imgUrl.length)
    charImg.src = `Characters/${imgUrl[randomNum]}`
    charImg.style.filter = "blur(10px)"
}

function correctAnswer(){
    charImg.style.filter = "none"
}


inputChar.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let guess = inputChar.value.toLowerCase().trim();

        let currentImg = imgUrl[randomNum]; // e.g. "asta.jpg"
        let urlName = currentImg.split(".")[0].toLowerCase(); // "asta"

        if (guess === urlName) {
            correctAnswer();
            points += 1;
            total.innerHTML = `TOTAL: ${points}`;
        }

        inputChar.value = "";
    }
});
