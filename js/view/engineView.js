var view = {
    introductionCreature: function(numbPic) {
        var imgs = document.querySelectorAll(".character"),
            arrNumbPickLength = numbPic.length;
        for (let i = 0; i < arrNumbPickLength; i++) {
            var num = numbPic[i];
            imgs[i].data = "img/character" + num + ".svg";
        }
    },
    myLetters: function(showLetter) {
        var pairLetters = document.querySelectorAll('.letter'),
            arrPairLetters = pairLetters.length,
            arrSoundLetter= document.querySelectorAll(".soundLetter"),
            j = 0;
        var addLetter = function (i,j) {
          pairLetters[i].innerHTML = showLetter[j];
          arrSoundLetter[i].src = "sound/alphabet/"+showLetter[j]+".mp3";
        }
        for (let i = 0; i < arrPairLetters; i++) {
            if (i % 2 === 0) {
              addLetter(i,j);
            } else {
              addLetter(i,j);
              j++
            }
        }
    },

    showMyLetter: function() {
      var arrPlayLetter = document.querySelectorAll(".soundLetter"),
          arrSpeakBubbels = document.querySelectorAll(".speakBubbels"),
          arrSpeakBubbelsLength = arrSpeakBubbels.length,
          tl = new TimelineMax({onComplete:view.showButtonStart});
          for (let i=0; i < arrSpeakBubbelsLength; i++) {
            tl.to(arrSpeakBubbels[i], .8, {opacity:1, delay:1, scale:1, ease:Elastic.easeOut.config(1, 0.3), function() {arrPlayLetter[i].play()}});
            }
        },

    runHidding: function(coordinates) {
        var characters = document.querySelectorAll('.picture'),
            arrCharacterLenght = characters.length;
        for (let i = 0; i < arrCharacterLenght; i++) {
            var heightCharacters = characters[i].clientHeight,
                widthCharacter = characters[i].clientWidth,
                randomMiddlePosition = getRandomInt(48, 52);
            var tl = new TimelineMax({
                    ease: Back.easeOut.config(1)
                });
                tl.to(characters[i], 1, {
                    left: randomMiddlePosition+"vw",
                    top: (coordinates[i][1]) - heightCharacters-10,
                    scale: 0.8,
                    delay: 0.5 });
                tl.to(characters[i], 1.2, {
                    left: (coordinates[i][0] - (widthCharacter / 4))
            });
        }

    },

    showUp: function(character) {
        TweenMax.to(character, 1, {
            x: -155 + "px",
            ease: Back.easeOut.config(1)
        })
    },

    soundClick: function (clickSound) {
      clickSound.play();
    },

    buttonHover: function(shadowButton) {
      shadowButton.setAttribute("style", "stroke: none; fill: #1c674b;");
    },

    buttonHoverOff: function(shadowButton) {
      shadowButton.setAttribute("style", "fill:#008a56;fill-rule:evenodd;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41420996;stroke:url(#linearGradient25083)");
    },

    showButtonStart: function() {
      start.style.visibility = "visible";
    },

    buttonStartClick: function(goSound) {      
      start.style.display = "none";
      goSound.play();
    },

    buttonSoundHover: function(backgroundColor) {
      backgroundColor.setAttribute("style", "fill: #1c674b;");
    },

    buttonSoundHoverOff: function(backgroundColor) {
      backgroundColor.setAttribute("style", "fill=#fff; fill-opacity=.4;");
    },

    buttonSoundClick: function(crossedSound) {
      var backgroundMusic = document.getElementById("backgroundSound");
        if (backgroundMusic.paused) {
          backgroundMusic.play();
          crossedSound.setAttribute("style", "opacity:0");
        } else {
          backgroundMusic.pause();
          crossedSound.setAttribute("style", "opacity:1;fill:none;stroke:#761111;stroke-width:2;stroke-linejoin:round;stroke-opacity:.7");
        }
    },


    backHide: function(arrcharacter) {
      for (let i=0; i<arrcharacter.length; i++) {
      TweenMax.to(arrcharacter[i], 1, {
          x: 0 + "px",
          ease: Back.easeOut.config(1), delay:1
      })
    }
    },
    miss: function() {
        var missText = document.getElementById("miss"),
            missSound = document.getElementById("soundMiss");
        missText.style.display = "block";
        setTimeout(function () { missText.style.display = "none";}, 2000);
        missSound.play();
    },
    hit: function() {
      var successText = document.getElementById("success"),
          successSound = document.getElementById("soundSuccess");
      successText.style.display = "block";
      setTimeout(function () { successText.style.display = "none";}, 2000);
      successSound.play();
    },

    congratulations: function() {
        var winText = document.getElementById("win"),
            winSound = document.getElementById("soundWin");
        winText.style.display = "block";
        setTimeout(function () { winText.style.display = "none";}, 4000);
        setTimeout(window.location.reload.bind(window.location), 5000);
        winSound.play();
    }
}
