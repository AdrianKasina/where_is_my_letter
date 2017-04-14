var view = {
    introductionCreature: function(numbPic) {
        var imgs = document.querySelectorAll('.character');
        for (let i = 0; i < numbPic.length; i++) {
            var num = numbPic[i];
            imgs[i].src = 'img/postac' + num + '.jpg';
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
var model = {
    numCreatures: 4,
    numPictures: 8,
    locations: 6,
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    chooseCreatures: function() {
        var arrNumb = [];
        while (arrNumb.length < this.numCreatures) {
            var randomNumber = Math.ceil(Math.random() * this.numPictures)
            if (arrNumb.indexOf(randomNumber) > -1) continue;
            arrNumb[arrNumb.length] = randomNumber;
        }
        view.introductionCreature(arrNumb);
    },

    chooseLetters: function() {
        var arrLetters = [];
        while (arrLetters.length < this.numCreatures / 2) {
            var randomLetter = Math.floor(Math.random() * 26)
            var letter = this.alphabet[randomLetter];
            if (arrLetters.indexOf(letter) > -1) continue;
            arrLetters[arrLetters.length] = letter;
        }
        view.myLetters(arrLetters);
    },


    coordinatePlacesHidden: function() {
        var getCoordinate = document.querySelectorAll(".places"),
            getCoordinateBody = document.body.getBoundingClientRect(),
            arrCoordinates = [];
        for (let i = 0; i < getCoordinate.length; i++) {
            var coordinates = getCoordinate[i].getBoundingClientRect(),
                heightPlaces = getCoordinate[i].clientHeight;
            arrCoordinates[arrCoordinates.length] = [coordinates.left, coordinates.top + heightPlaces];
        }
        model.choosePlacesHidden(arrCoordinates);
    },

    choosePlacesHidden: function(arrCoordinates) {
        var arrPlaces = [];
        var mySet = new Set();
        var i = 0;
        while (arrPlaces.length < this.numCreatures) {
            var randomNumber = Math.floor(Math.random() * this.locations);
            var randomPlaces = arrCoordinates[randomNumber];
            mySet.add(randomPlaces);
            var arrPlaces = Array.from(mySet);
        }
        view.runHidding(arrPlaces);
      }
    }

var contnroller = {
    numClick: 0,
    displayStartButton: function() {
        var button = document.getElementById("start");
        button.addEventListener("click", function() {
            button.style.display = "none";
            model.coordinatePlacesHidden();
            contnroller.parseClick();
        }, false)
    },
    parseClick: function() {
        var characters = document.querySelectorAll('.no-clicked'),
            noRepeat = new Set(),
            arrPair = [],
            j = 0;
        if (characters.length === 0) {
            setTimeout(view.congratulations, 2100);
        };
        for (let i = 0; i < characters.length; i++) {
            characters[i].addEventListener("click", function() {
                var clickedCharacter = characters[i];
                clickedCharacter.classList.contains("clicked") ? true : (clickedCharacter.className += " clicked", j++);
                view.showUp(clickedCharacter);
                noRepeat.add(clickedCharacter);
                var arrPair = Array.from(noRepeat);
                if (j === 2) {
                    contnroller.guessPair(arrPair);
                    j = 0;
                    noRepeat.clear();
                };
            }, false)
        }
    },
    guessPair: function(pair) {
        var firstLetter = pair[0].getElementsByTagName("p")[0].innerHTML;
        var secondLetter = pair[1].getElementsByTagName("p")[0].innerHTML;
        if (firstLetter === secondLetter) {
            pair[0].classList.remove("no-clicked");
            pair[1].classList.remove("no-clicked");
            pair.length = 0;
            view.hit();
            contnroller.parseClick();
        } else {
            pair[0].classList.remove("clicked");
            pair[1].classList.remove("clicked");
            view.backHide(pair);
            view.miss();
            pair.length = 0;
        };
    },
}
window.addEventListener("load", function(event) {
    model.chooseCreatures();
    model.chooseLetters();
    contnroller.displayStartButton();
}, false);
