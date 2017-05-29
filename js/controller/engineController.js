var contnroller = {
    numClick: 0,
    displayStartButton: function() {
        var buttonGo = document.getElementById("start"),
            getButton = buttonGo.getSVGDocument(),
            shadowButton = getButton.getElementById("ellipseClick"),
            goSound = document.getElementById("soundGo");

            getButton.addEventListener("mouseover", function() {
                view.buttonHover(shadowButton);
            }, false);

            getButton.addEventListener("mouseout", function() {
                view.buttonHoverOff(shadowButton);
            }, false);

            getButton.addEventListener("click", function() {
            view.buttonStartClick(goSound);
            model.coordinatePlacesHidden();
            contnroller.parseClick();
        }, false);
    },
    exitButton: function() {
      var buttonExitBg =document.getElementById("exitButton"),
          getExitButton = buttonExitBg.getSVGDocument(),
          backgroundColor = getExitButton.getElementById("bg");
          getExitButton.addEventListener("mouseover", function() {
            view.buttonSoundHover(backgroundColor);
          },false);
          getExitButton.addEventListener("mouseout", function() {
            view.buttonSoundHoverOff(backgroundColor);
          },false);

    },
    backgroundMusic:function() {
      var buttonSoundBg = document.getElementById("soundButton"),
          getSoundButton = buttonSoundBg.getSVGDocument(),
          backgroundColor = getSoundButton.getElementById("rectButton"),
          crossedSound = getSoundButton.getElementById("soundOff");
           getSoundButton.addEventListener("mouseover", function() {
            view.buttonSoundHover(backgroundColor);
          },false);

          getSoundButton.addEventListener("mouseout", function() {
            view.buttonSoundHoverOff(backgroundColor);
          },false);

          getSoundButton.addEventListener("click", function() {
            var backgroundMusic = document.getElementById("backgroundSound");
            if (document.cookie === "sound=off") {
               document.cookie = "sound=on";
               view.buttonSoundOn(backgroundMusic, crossedSound);
             }else{
                document.cookie = "sound=off";
                view.buttonSoundOff(backgroundMusic, crossedSound);
              }
          },false);
    },
    parseClick: function() {
        var characters = document.getElementsByClassName("no-clicked"),
            arrPair = new Array(0),
            arrCharacterLenght = characters.length,
            clickSound = document.getElementById("soundClick"),
            j = 0;
        if (arrCharacterLenght === 0) {
            setTimeout(view.congratulations, 2100);
        } else {
        for (var i = 0; i < arrCharacterLenght; i++) {
          (function(i) {
            characters[i].addEventListener("click", function() {
                var clickedCharacter = characters[i];
                clickedCharacter.classList.add("clicked");
                j++;
                view.showUp(clickedCharacter);
                view.soundClick(clickSound);
                arrPair.push(clickedCharacter);
                if (j === 2) {
                    contnroller.guessPair(arrPair);
                    j = 0;
                    arrPair.length = 0;
                };
            }, false)
          })(i);
        }
        }
    },
    guessPair: function(pair) {
        var firstLetter = pair[0].getElementsByTagName("p")[0].innerHTML,
            secondLetter = pair[1].getElementsByTagName("p")[0].innerHTML;
        if (firstLetter === secondLetter) {
            pair[0].classList.remove("no-clicked");
            pair[1].classList.remove("no-clicked");
            view.hit();
            contnroller.parseClick();
        } else {
            pair[0].classList.remove("clicked");
            pair[1].classList.remove("clicked");
            view.backHide(pair);
            view.miss();
        };
    },
}
window.addEventListener("load", function(event) {
    model.chooseCreatures();
    model.chooseLetters();
    contnroller.exitButton();
    contnroller.backgroundMusic();
    view.showMyLetter();
    contnroller.displayStartButton();
}, false);
