const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, I still think about you sometimes.\n\nI catch myself missing the sound of your name, the comfort of your messages, and how just talking to you made everything feel light.I didn’t bother you anymore because I know you’re busy, especially with your Prof. Just take it easy.\n\nAnyway, I hope you’re doing okay. Don’t let yourself get too stressed always pray to God and do your best! always lang ko nandito if you need me.\n -Rubynna...`;

console.log(message);

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";
  
  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;
    
    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }
    
    typeWriter();
  }, 600);
}
