var view = {
buttonMenuHover: function(clickBgColor) {
  clickBgColor.setAttribute("style", "stroke: none; fill: none;");
},

buttonMenuHoverOff: function(clickBgColor) {
  clickBgColor.setAttribute("style", 'fill="#867452"; fill-opacity=".6"');
},
soundClick: function (clickSound) {
  clickSound.play();
}
}
