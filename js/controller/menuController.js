var controller = {
  mainMenu: function() {
    var clickSound = document.getElementById("soundClick"),
      menu = document.getElementById("mainMenu"),
      getMenuButton = menu.getSVGDocument(),
      backgroundColor = getMenuButton.querySelectorAll(".shadowButtonMenu"),
      buttonsMenu = getMenuButton.querySelectorAll(".buttonMenu");
    for (let i = 0; i < backgroundColor.length; i++) {
      var buttonMenu = buttonsMenu[i];
      (function (i) {
      buttonMenu.addEventListener("mouseover", function() {
        var clickBgColor = backgroundColor[i];
        view.buttonMenuHover(clickBgColor);
        view.soundClick(clickSound);
      }, false);})(i);
      (function (i) {
      buttonMenu.addEventListener("mouseout", function() {
        var clickBgColor = backgroundColor[i];
        view.buttonMenuHoverOff(clickBgColor);
      }, false);})(i);
    }

    // getSoundButton.addEventListener("click", function() {
    //   var backgroundMusic = document.getElementById("backgroundSound");
    //   if (document.cookie === "sound=off") {
    //      document.cookie = "sound=on";
    //      view.buttonSoundOn(backgroundMusic, crossedSound);
    //    }else{
    //       document.cookie = "sound=off";
    //       view.buttonSoundOff(backgroundMusic, crossedSound);
    //     }
    // },false);
  }
}

window.addEventListener("load", function(event) {
  controller.mainMenu();
}, false);
