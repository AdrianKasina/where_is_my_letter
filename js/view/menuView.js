var view = {
buttonMenuHover: function(clickBgColor) {
  console.log(clickBgColor);
  clickBgColor.setAttribute("style", "stroke: none; fill: none;");
},

buttonMenuHoverOff: function(clickBgColor) {
  clickBgColor.setAttribute("style", 'fill="#867452"; fill-opacity=".6"');
}
}
