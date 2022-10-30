// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  const horn = document.getElementById('horn-select');
  let imgs = document.querySelectorAll("img");
  const aud = document.querySelector("audio");

  horn.addEventListener('change', (event) => {
    let hornImg = imgs[0];
    
    if (horn.value == "air-horn") {
      hornImg.src = "assets/images/air-horn.svg";
      aud.src = "assets/audio/air-horn.mp3";
    } else if (horn.value == "car-horn") {
      hornImg.src = "assets/images/car-horn.svg";
      aud.src = "assets/audio/car-horn.mp3";
    } else if (horn.value == "party-horn") {
      hornImg.src = "assets/images/party-horn.svg";
      aud.src = "assets/audio/party-horn.mp3";
    }
  })

  const vol = document.getElementById('volume');

  vol.addEventListener('input', (event) => {
    let volImg = imgs[1];
    
    if (vol.value == 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
    } else if (vol.value < 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
    } else if (vol.value < 67) {
      volImg.src = "assets/icons/volume-level-2.svg";
    } else {
      volImg.src = "assets/icons/volume-level-3.svg"
    }
    aud.volume = vol.value / 100;
  })

  const playSound = document.querySelector('button');
  const confetti = new JSConfetti();

  playSound.addEventListener('click', (event) => {
    aud.play();
    confetti.addConfetti();
  })
}

