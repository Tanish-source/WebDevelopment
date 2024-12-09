const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function navAnimation() {
  gsap.from(".nlink", {
    stagger: 0.2,
    y: 20,
    duration: 1,
    opacity: 0,
  });
}
navAnimation();

function heroAnimation() {
  Shery.textAnimate(".headings h1", {
    style: 2,
    y: 20,
    delay: 0.2,
    duration: 4,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.3,
  });
  Shery.imageEffect(".imgntext img", {
    style: 3,
    config: {
      uFrequencyX: { value: 11.45, range: [0, 100] },
      uFrequencyY: { value: 4.96, range: [0, 100] },
      uFrequencyZ: { value: 45.45, range: [0, 100] },
      geoVertex: { range: [1, 64], value: 14.95 },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.75 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: false },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.55, range: [1, 5] },
      scrollType: { value: 0 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0.002, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
  });
  Shery.imageEffect(".sustain_img img,.img1 img,.img2 img", {
    style: 5,
    config: {
      a: { value: 2.98, range: [0, 30] },
      b: { value: -0.59, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.6666666666666666 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: false },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.37, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0.002, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
  });
  gsap.from(".anim1", {
    y: 50,
    stagger: 0.3,
    opacity: 0,
    ease: Expo,
    duration: 1.5,
  });
  gsap.from(".imgntext img,.sustain_img img", {
    z: "10",
    opacity: 0,
    duration: 3,
    ease: Expo.easeInOut,
  });
}
heroAnimation();

function bannerAnimation() {
  Shery.imageEffect(".biodegradable1", {
    style: 5,
    config: {
      a: { value: 0.92, range: [0, 30] },
      b: { value: -0.95, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 2.027053777631145 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 2.74, range: [1, 15] },
      durationOut: { value: 0.55, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.06, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: false },
      onMouse: { value: 1 },
      noise_speed: { value: 0.74, range: [0, 10] },
      metaball: { value: 0.1, range: [0, 2], _gsap: { id: 32 } },
      discard_threshold: { value: 0.42, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.43, range: [0, 2] },
      noise_scale: { value: 10.74, range: [0, 100] },
    },
    gooey: true,
  });
}
bannerAnimation();

function footerAnimation() {
  document.querySelector(".button").addEventListener("mouseover", function () {
    gsap.to(".footer video", {
      opacity: 1,
      duration: 1,
      ease: Power4,
    });
  });
  document.querySelector(".button").addEventListener("mouseleave", function () {
    gsap.to(".footer video", {
      opacity: 0,
      duration: 1,
      ease: Power4,
    });
  });
}
footerAnimation();
