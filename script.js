console.log('tests');


const countdownNode = document.getElementById("countdown");
console.log('countdownNode - ', countdownNode);
updateTime();

const fromNow = Math.floor((new Date().getTime() / (1000)));
interval = null;
function updateTime() {
    interval = setInterval(() => {
        /* FINAL_LOGIC */// const countdown = (20057 + 28) - Math.floor((new Date().getTime() / (1000 * 60 * 60 * 24)));
        let countdown = (fromNow + 10) - Math.floor((new Date().getTime() / (1000)));

        if (countdown <= 0) {
            clearInterval(interval);
            countdown = "hola amigo";
            createBalloons(30);
        }
        countdownNode.innerHTML = countdown;
    }, 1000);
}


const balloonContainer = document.getElementById("balloon-container");

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5) + 5;
    return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
    for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        balloonContainer.append(balloon);
    }
}

function removeBalloons() {
    balloonContainer.style.opacity = 0;
    setTimeout(() => {
        balloonContainer.remove()
    }, 500)
}

// window.addEventListener("load", () => {
//     createBalloons(30)
// });

// window.addEventListener("click", () => {
//     removeBalloons();
// });
