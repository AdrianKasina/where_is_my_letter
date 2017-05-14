var view = {
    introductionCreature: function(numbPic) {
        var imgs = document.querySelectorAll('.character');
        for (let i = 0; i < numbPic.length; i++) {
            var num = numbPic[i];
            imgs[i].data = 'img/character' + num + '.svg';
        }
    },
    myLetters: function(showLetter) {
        var pairLetters = document.querySelectorAll('.letter');
        var j = 0;
        for (let i = 0; i < pairLetters.length; i++) {
            i % 2 === 0 ? (pairLetters[i].innerHTML = showLetter[j]) : (pairLetters[i].innerHTML = showLetter[j], j++)
        }
    },

    runHidding: function(coordinates) {
        var characters = document.querySelectorAll('.picture');
        for (let i = 0; i < characters.length; i++) {
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
    buttonHover: function(shadowButton) {
      shadowButton.setAttribute("style", "stroke: none; fill: #1c674b;");
    },

    buttonHoverOff: function(shadowButton) {
      shadowButton.setAttribute("style", "fill:#008a56;fill-rule:evenodd;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41420996;stroke:url(#linearGradient25083)");
    },

    buttonClick: function() {
      start.style.display = 'none';
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
        var missText = document.getElementById('miss');
        missText.style.display = 'block';
        setTimeout(function () { missText.style.display = 'none';}, 2000);
    },
    hit: function() {
      var successText = document.getElementById('success');
      successText.style.display = 'block';
      setTimeout(function () { successText.style.display = 'none';}, 2000);
    },

    congratulations: function() {
        var winText = document.getElementById('win');
        winText.style.display = 'block';
        setTimeout(function () { winText.style.display = 'none';}, 4000);
        setTimeout(window.location.reload.bind(window.location), 5000);
    }
}
