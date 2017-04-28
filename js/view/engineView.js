var view = {
    introductionCreature: function(numbPic) {
        var imgs = document.querySelectorAll('.character');
        for (let i = 0; i < numbPic.length; i++) {
            var num = numbPic[i];
            imgs[i].src = 'img/postac' + num + '.svg';
        }
    },
    myLetters: function(showLetter) {
        var pairLetters = document.querySelectorAll('.letter');
        var j = 0;
        for (let i = 0; i < pairLetters.length; i++) {
            i % 2 == 0 ? (pairLetters[i].innerHTML = showLetter[j]) : (pairLetters[i].innerHTML = showLetter[j], j++)
        }
    },

    runHidding: function(coordinates) {
        var characters = document.querySelectorAll('.picture');
        for (let i = 0; i < characters.length; i++) {
            var heightCharacters = characters[i].clientHeight,
                widthCharacter = characters[i].clientWidth;
            TweenMax.to(characters[i], 2, {
                left: (coordinates[i][0] - (widthCharacter / 2)),
                top: (coordinates[i][1]) - heightCharacters,
                scale: 0.9,
                opacity: 0.9,
                ease: Back.easeOut.config(1)
            });
        }

    },
    showUp: function(character) {
        TweenMax.to(character, 1, {
            x: -155 + "px",
            ease: Back.easeOut.config(1)
        })
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
        var missText = document.createElement('div');
        missText.classList.add('miss');
        missText.setAttribute("id", "shortTimeText");
        missText.innerHTML = "Try again";
        document.body.appendChild(missText);
        setTimeout(view.shortTimeText, 2000);
    },
    hit: function() {
        var successText = document.createElement('div');
        successText.classList.add('success');
        successText.setAttribute("id", "shortTimeText");
        successText.innerHTML = "Brawo!";
        document.body.appendChild(successText);
        setTimeout(view.shortTimeText, 2000);
    },
    shortTimeText: function() {
        var communique = document.getElementById("shortTimeText");
        var removeMe = communique.parentNode.removeChild(communique);
    },
    congratulations: function() {
        var winText = document.createElement('div');
        winText.classList.add('win');
        winText.setAttribute("id", "shortTimeText");
        winText.innerHTML = "You are the best!";
        document.body.appendChild(winText);
        setTimeout(view.shortTimeText, 2000);
        setTimeout(window.location.reload.bind(window.location), 4000);
    }
}
