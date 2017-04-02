var view = {
introductionCreature: function(numbPic){
    var imgs = document.querySelectorAll('.character');
    for (var i=0; i<numbPic.length; i++){
    var num=numbPic[i];
    imgs[i].src='img/postac' + num + '.jpg';
    }
  },
  myLetters: function(showLetter) {
    var pairLetters =  document.querySelectorAll('.letter');
    var j =0;
      for (var i=0; i<pairLetters.length; i++){
        if (i%2 == 0) {
          pairLetters[i].innerHTML = showLetter[j];
        } else {
          pairLetters[i].innerHTML = showLetter[j];
          j++;
        }
      }
  },
  displayStartButton: function() {
  },
  runHidding: function(){
  },
  showUp: function() {
  },
  miss: function(){
  },
  hit: function(){
  },
  congratulations: function(){
  }
}
var model = {
  numCreatures: 4,
  numPictures: 8,

  alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  coordinatePlacesHidden: [{locations: [30,5]}, {locations: [60,5]}, {locations: [25,20]}, {locations: [75,20]}, {locations: [20,25]}, {locations: [80,25]}],

  chooseCreatures: function(){
      var arrNumb = []
      while(arrNumb.length < this.numCreatures){
      var randomNumber = Math.ceil(Math.random()*this.numPictures)
      if(arrNumb.indexOf(randomNumber) > -1) continue;
      arrNumb[arrNumb.length] = randomNumber;
      }
      view.introductionCreature(arrNumb);
  },
  chooseLetters: function(){
    var arrLetters =[]
    while(arrLetters.length < this.numCreatures/2) {
      var randomLetter = Math.floor(Math.random()*26)
      if(arrLetters.indexOf(randomLetter) > -1) continue;
      var letter = this.alphabet[randomLetter];
      arrLetters[arrLetters.length] = letter;
    }
    view.myLetters(arrLetters);
  },
  choosePlacesHidden: function(){
  },
  checkPair: function(){
  }
}
var contnroller ={
    numClick: 0,
    parseClick: function(){
    }
}
 model.chooseCreatures();
 model.chooseLetters();
