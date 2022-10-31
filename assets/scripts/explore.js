// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const face = document.querySelector('img');
  setInterval(function ()  {
    if(!synth.speaking){
    face.setAttribute('src',"assets/images/smiling.png");
  }
  },100)
  synth.addEventListener('voiceschanged',() => {  

    var allVoices = synth.getVoices();
    var sVoice = document.getElementById('voice-select');
    for(let i = 0; i < allVoices.length;  i++){
    const opVoice = document.createElement('option');
    opVoice.textContent = allVoices[i].name
    opVoice.setAttribute('name', sVoice[i].name)
    sVoice.appendChild(opVoice);  
    }
    const pressButton = document.querySelector('button');
    const selectOption = document.getElementById('voice-select');
    const getText = document.getElementById('text-to-speak');
    
    var selectedVoice = '';
    var textUtter = '';
    selectOption.addEventListener('change', (e) => {selectedVoice = e.target.value});
    getText.addEventListener('change', (e) => {textUtter = e.target.value});
    pressButton.addEventListener('click', () => {
      const utterThis = new SpeechSynthesisUtterance(textUtter);
      for (let i = 0; i < allVoices.length; i++){
       if (allVoices[i].name === selectedVoice){
        utterThis.voice = allVoices[i];   
       }
      }

      synth.speak(utterThis);
      face.setAttribute('src',"assets/images/smiling-open.png");
      });
  });


}