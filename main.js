var wrap = document.querySelector(".wrap");
var next = document.querySelector(".arrow_right");
var prev = document.querySelector(".arrow_left");
next.onclick = function () {
  next_pic();
};
prev.onclick = function () {
  prev_pic();
};
function next_pic() {
  index++;
  if (index > 3) {
    index = 0;
  }
  showCurrentDot();
  var newLeft;
  if (wrap.style.left === "-4000px") {
    newLeft = -1600;
  } else {
    newLeft = parseInt(wrap.style.left) - 800;
  }
  wrap.style.left = newLeft + "px";
}
function prev_pic() {
  index--;
  if (index < 0) {
    index = 3;
  }
  showCurrentDot();
  var newLeft;
  if (wrap.style.left === "0px") {
    newLeft = -2400;
  } else {
    newLeft = parseInt(wrap.style.left) + 800;
  }
  wrap.style.left = newLeft + "px";
}
var timer = null;
function autoPlay() {
  timer = setInterval(function () {
    next_pic();
  }, 1000);
}
autoPlay();

var container = document.querySelector(".container");
container.onmouseenter = function () {
  clearInterval(timer);
};
container.onmouseleave = function () {
  autoPlay();
};

var index = 0;
var dots = document.getElementsByTagName("span");
function showCurrentDot() {
  for (var i = 0, len = dots.length; i < len; i++) {
    dots[i].className = "";
  }
  dots[index].className = "on";
}

for (var i = 0, len = dots.length; i < len; i++) {
  (function (i) {
    dots[i].onclick = function () {
      var dis = index - i;
      if (index == 3 && parseInt(wrap.style.left) !== -4000) {
        dis = dis - 4;
      }

      if (index == 0 && parseInt(wrap.style.left) !== -800) {
        dis = 4 + dis;
      }
      wrap.style.left = parseInt(wrap.style.left) + dis * 800 + "px";
      index = i;
      showCurrentDot();
    };
  })(i);
}
function myFunction() {
  var x, text;
  x = document.getElementById("numb").value;
  if (x == 1111) {
    alert("你好，我是一个警告框！");
  }
}
