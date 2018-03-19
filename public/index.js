function playSound(e){
        // attribute selector
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // selects data attribute with class of key

    // console.log(audio); // shows what key is being pressed in the console
    if(!audio) return; // stops function from running

    audio.currentTime = 0; // restarts the audio from the beginning once clicked

    audio.play(); // plays audio

    // console.log(key);

    key.classList.add('playing');
  }




  function removeTransition(e){
    // this functions removes all transitions from css
    if(e.propertyName !== 'transform')return; // skip the removal if the property is not transform
    // console.log(e.propertyName);
    // console.log(this);
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key'); // selects all elements with class key
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  // keys for each goes through each key and adds an event listener that removes the transition when the keys change color to yellow, back to original color

  // window event listener whenever a key is pressed a sound will be played
  window.addEventListener('keydown', playSound);