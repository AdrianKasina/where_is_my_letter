var view = {
introductionCreature: function(numbPic){
  console.log(numbPic);
    var imgs = document.querySelectorAll('.character');
    for (let i=0; i<numbPic.length; i++){
    var num=numbPic[i];
   imgs[i].src='img/postac' + num + '.jpg';
    console.log(num);
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
  numLetters: 2,
  alphabet: ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"],
  coordinatePlacesHidden: [{locations: [30,5]}, {locations: [60,5]}, {locations: [25,20]}, {locations: [75,20]}, {locations: [20,25]}, {locations: [80,25]}],

  chooseCreatures: function(){
      var arrNumb = []
      while(arrNumb.length < this.numCreatures){
      var randomnumber = Math.ceil(Math.random()*this.numPictures)
      if(arrNumb.indexOf(randomnumber) > -1) continue;
      arrNumb[arrNumb.length] = randomnumber;
      }
      console.log(typeof arrNumb);
      view.introductionCreature(arrNumb);
  },
  chooseLetters: function(){
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
