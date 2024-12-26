console.log('tests');


const countdownNode = document.getElementById("countdown");
const dayNode = document.getElementById("days");
const hourNode = document.getElementById("hours");
const minuteNode = document.getElementById("minutes");
const secondNode = document.getElementById("seconds");
// console.log('countdownNode - ', countdownNode);

interval = null;
const fromNow = Math.floor((new Date().getTime() / (1000)));
updateTime();
function updateTime() {
    interval = setInterval(() => {
        
        
        /* FINAL_LOGIC */
        // const countdown = (20083 + 2) - Math.floor((new Date().getTime() / (1000 * 60 * 60 * 24)));
        let countdown = (((20083 * 24 * 60 * 60) + (2 * 24 * 60 * 60)) - Math.floor((new Date().getTime() / (1000))));
        let seconds = (((20083 * 24 * 60 * 60) + (2 * 24 * 60 * 60)) - Math.floor(((new Date().getTime() + (330 * 60 * 1000)) / (1000))));
        // let countdown = (fromNow + 10) - Math.floor((new Date().getTime() / (1000)));
        
        let days = Math.floor(seconds / (60 * 60 * 24));
        seconds = Math.floor(seconds % (60 * 60 * 24));
        
        let hours = Math.floor((seconds / (60 * 60)));
        seconds = Math.floor(seconds % (60 * 60));
        
        let minutes = Math.floor(seconds / (60));
        seconds = Math.floor(seconds % (60));
        
        let numberOnly = false;
        // let numberOnly = true;
        if (days == 0) {
            dayNode.style.display = 'none';
            if (hours == 0) {
                hourNode.style.display = 'none';
                if(minutes == 0) {
                    minuteNode.style.display = 'none';
                    numberOnly = true;
                }
            }
        }
        
        // if(seconds < 30) {

            // }

        if (countdown <= 0) {
        // if (seconds <= 0) {
            clearInterval(interval);

            const message = "holaa amigo aaa";
            countdownNode.innerHTML = message;

            createBalloons(30);
            setTimeout(() => { removeBalloons(); }, 15000);
        }
        dayNode.innerHTML = days + (days > 1 ? ' Days' : ' Day');
        hourNode.innerHTML = hours + (hours > 1 ? ' Hours' : ' Hour');
        minuteNode.innerHTML = minutes + (minutes > 1 ? ' Minutes' : ' Minute');
        if(numberOnly) {
            secondNode.innerHTML = seconds;
        } else {
            secondNode.innerHTML = seconds + (seconds > 1 ? ' Seconds' : ' Second');
        }
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

function removeBalloons(timeout) {
    balloonContainer.style.opacity = 0;
    setTimeout(() => {
        balloonContainer.remove()
    }, 500);

    clearTimeout(timeout);
}

// window.addEventListener("load", () => {
//     createBalloons(30)
// });

// window.addEventListener("click", () => {
//     removeBalloons();
// });
