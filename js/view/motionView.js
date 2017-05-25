//background sun KUTE
document.getElementById("sun").addEventListener("load", function() {
  var sun = this.getSVGDocument();
  var sunRayStart = sun.getElementById("sunRay1");
  var sunRayEnd = sun.getElementById("sunRay2");
  var pulseSunRay = KUTE.to(sunRayStart, {
    attr: {
      'fill-opacity': "0.5"
    }
  }, {
    yoyo: true,
    repeat: Infinity,
    duration: 600
  }).start();
  var roundSun = KUTE.to(sunRayStart, {
    svgTransform: {
      rotate: 1360,
      scale: 1.5
    }
  }, {
    yoyo: true,
    repeat: Infinity,
    duration: 14600
  }).start();
  //    var tween = KUTE.fromTo(sunRayStart,  // target shape
  //   { path: sunRayStart}, // from shape
  //   { path: sunRayEnd }, // to shape
  //   { // options
  //  easing: 'easingCubicInOut',
  //  yoyo: true, repeat: Infinity, duration: 7000,
  //  morphPrecision: 5,
  //  reverseFirstPath: true,
  //  reverseSecondPath: true,
  //  morphIndex: 65
  //   }
  // ).start();
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//bacground cloud GSAP
document.getElementById("cloud1").addEventListener("load", function() {
  var cloud1 = document.getElementById("cloud1");
  TweenMax.to(cloud1, getRandomInt(18, 35), {
    left: '110vw',
    repeat: Infinity,
    ease: Quad.easeInOut
  });
});
document.getElementById("cloud2").addEventListener("load", function() {
  var cloud1 = document.getElementById("cloud2");
  var tl = new TimelineMax({
    repeat: Infinity,
    ease: Circ.easeInOut
  });
  tl.to(cloud1, getRandomInt(4, 10), {
    left: '70vw'
  });
  tl.to(cloud1, getRandomInt(4, 10), {
    left: '50vw'
  });
  tl.to(cloud1, getRandomInt(4, 10), {
    top: '5vh'
  });
  tl.to(cloud1, getRandomInt(4, 10), {
    top: '1vh'
  });
  tl.to(cloud1, getRandomInt(4, 10), {
    left: '110vw'
  });
});
document.getElementById("cloud3").addEventListener("load", function() {
  var cloud1 = document.getElementById("cloud3");
  var tl = new TimelineMax({
    repeat: Infinity,
    ease: Power2.easeInOut
  });
  tl.to(cloud1, getRandomInt(5, 15), {
    left: '40vw',
    top: '10vh'
  });
  tl.to(cloud1, getRandomInt(5, 15), {
    left: '110vw',
    top: '6vh'
  });
});

document.getElementById("mouse").addEventListener("load", function() {
  var mouse = document.getElementById("mouse"),
    doc = this.getSVGDocument(),
    tail = doc.getElementById("tail1"),
    start, x1, x2;

  function getRandomPositionX() {
    var maxX = 80;
    return Math.floor(Math.random() * (maxX));
  }

  function getRandomPositionY() {
    var maxY = 60;
    return Math.floor(Math.random() * (maxY));
  }

  function mouseReverse(x1, x2) {
    var y;
    if (x1 >= x2) {
      y = 180;
    } else {
      y = 0;
    }
    return y;
  }

  function zoom(h) {
    return (100 - h) / 100;
  }

  TweenMax.to(tail, 1, {
    rotation: -20,
    transformOrigin: "right center",
    repeat: Infinity,
    yoyo: true
  });

  function mouseMove() {
    var tl = new TimelineMax({
      ease: Power2.easeInOut,
      repeatDelay: getRandomInt(1, 10),
      onComplete: mouseMove
    });
    start = getRandomInt(15, 80);
    x1 = getRandomPositionX();
    x2 = getRandomPositionX();
    y = mouseReverse(start, x1);
    h = getRandomPositionY();
    tl.to(mouse, .1, {
      left: start + 'vw',
      bottom: '-5vh'
    });
    tl.to(mouse, .5, {
      rotationY: y
    });
    tl.to(mouse, 5, {
      left: x1 + 'vw',
      bottom: h + 'vh',
      scale: zoom(h)
    });
    y = mouseReverse(x1, x2);
    h = getRandomPositionY();
    tl.to(mouse, .5, {
      rotationY: y
    })
    tl.to(mouse, 5, {
      left: x2 + 'vw',
      bottom: h + 'vh',
      scale: zoom(h)
    });
    x1 = x2;
    x2 = getRandomPositionX();
    y = mouseReverse(x1, x2);
    h = getRandomPositionY();
    tl.to(mouse, .5, {
      rotationY: y
    });
    tl.to(mouse, 5, {
      left: x2 + 'vw',
      bottom: h + 'vh',
      scale: zoom(h)
    });
    x1 = x2;
    x2 = getRandomPositionX();
    y = mouseReverse(x1, x2);
    tl.to(mouse, .5, {
      rotationY: y
    });
    tl.to(mouse, 5, {
      left: x2 + 'vw',
      bottom: '-5vh',
      scale: 1
    });
  }
  mouseMove();
});

//characters GSAP
document.getElementById("character4").addEventListener("load", function() {
  var doc = this.getSVGDocument();
  var hand = doc.getElementById("rightArm");
  TweenMax.to(hand, 1, {
    rotation: -60,
    repeat: 3,
    yoyo: true
  });
});
