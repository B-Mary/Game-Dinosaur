const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")
const gameOver = document.getElementById("over")
let score = 0;


window.addEventListener("load", function(){
    this.setInterval(function(){
        score += 1;
        let scoreLabel = document.getElementById("scoring")
        scoreLabel.innerHTML =  "Score:" + score
    })
})



document.addEventListener("keydown", function(event){
    jump();
})

function jump (){

    if( dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout(function(){
        dino.classList.remove("jump")
    }, 300)
    
}

let isAlive = setInterval (function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){

        gameOver.style.display = 'block'
        location.reload();
    }
}, 10)