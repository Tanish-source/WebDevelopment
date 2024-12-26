const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
var timeout;

function circleSkew() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);
    timeout = setTimeout(function () {
      document.querySelector("#cursor").style.transform = `translate(${
        dets.clientX
      }px,${dets.clientY}px) scale(${1},${1})`;
    }, 100);
  });
}
circleSkew();

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#cursor"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    document.querySelector("#cursor").style.opacity = `1`;
  });
  window.addEventListener("mouseleave", function (dets) {
    document.querySelector(
      "#cursor"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}

function AnimationPage1() {
  var t1 = gsap.timeline();
  t1.from("#nav", {
    y: -60,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
  t1.to(".boundingelem", {
    y: 0,
    delay: -1,
    duration: 2,
    ease: Expo.easeInOut,
    stagger: 0.2,
  });
  t1.from("#homefooter", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    delay: -1.2,
  });
}
AnimationPage1();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var Rdiff = 0;
  i =
    50 %
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      Rdiff = dets.clientX - rotate;
      rotate = dets.clientX;

      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff - i,
        left: dets.clientX - diff,
        rotate: gsap.utils.clamp(-20, 20, Rdiff),
      });
    });
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
    });
  });
});
