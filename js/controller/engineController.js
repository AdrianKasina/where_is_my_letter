var contnroller = {
    numClick: 0,
    displayStartButton: function() {
        var buttonGo = document.getElementById("start"),
            getButton = buttonGo.getSVGDocument(),
            shadowButton = getButton.getElementById("ellipseClick");

            getButton.addEventListener("mouseover", function() {
                view.buttonHover(shadowButton);
            }, false);

            getButton.addEventListener("mouseout", function() {
                view.buttonHoverOff(shadowButton);
            }, false);

            getButton.addEventListener("click", function() {
            view.buttonClick();
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
