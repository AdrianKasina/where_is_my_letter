window.onload
var view = {
        introductionCreature: function(numbPic) {
            var imgs = document.querySelectorAll('.character');
            for (var i = 0; i < numbPic.length; i++) {
                var num = numbPic[i];
                imgs[i].src = 'img/postac' + num + '.jpg';
            }
        },
        myLetters: function(showLetter) {
            var pairLetters = document.querySelectorAll('.letter');
            var j = 0;
            for (var i = 0; i < pairLetters.length; i++) {
                if (i % 2 == 0) {
                    pairLetters[i].innerHTML = showLetter[j];
                } else {
                    pairLetters[i].innerHTML = showLetter[j];
                    j++;
                }
            }
        },

        runHidding: function(coordinates) {
            var characters = document.querySelectorAll('.picture');
            for (i = 0; i < characters.length; i++) {
              var heightCharacters = characters[i].clientHeight,
                  widthCharacter = characters[i].clientWidth;
            TweenMax.to(characters[i], 2, {left:(coordinates[i][0]-(widthCharacter/2)), top:(coordinates[i][1])-heightCharacters, scale:0.9, opacity:0.9, ease: Back.easeOut.config(1)});
            }

    },
    showUp: function() {},
    miss: function() {},
    hit: function() {},
    congratulations: function() {}
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
            if (arrLetters.indexOf(randomLetter) > -1) continue;
            var letter = this.alphabet[randomLetter];
            arrLetters[arrLetters.length] = letter;
        }
        view.myLetters(arrLetters);
    },


    coordinatePlacesHidden: function () {
      var getCoordinate = document.querySelectorAll(".places"),
          getCoordinateBody = document.body.getBoundingClientRect(),
          arrCoordinates = [];
      for (var i=0; i<getCoordinate.length; i++) {
        var coordinates = getCoordinate[i].getBoundingClientRect(),
            heightPlaces = getCoordinate[i].clientHeight;
        arrCoordinates[arrCoordinates.length] = [coordinates.left, coordinates.top+heightPlaces];
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
    },


    checkPair: function() {}
}

var contnroller = {
    numClick: 0,
    displayStartButton: function() {
      var button = document.getElementById("start");
        button.addEventListener("click", function() {
            button.style.display = "none";
            model.coordinatePlacesHidden();
            contnroller.parseClick();
        })
    },
    parseClick: function() {
      var characters = document.querySelectorAll('.picture');
      for (var i=0; i<characters.lenght; i++)  {
        characters[i].addEventListener("click", function() {
        TweenMax.to(characters[i], 1, {left:-5+"px", ease: Back.easeOut.config(1)});
        console.log("kliknales");
        })
      }
    }
}

window.addEventListener("load", function(event) {
  model.chooseCreatures();
  model.chooseLetters();
  contnroller.displayStartButton();
});
