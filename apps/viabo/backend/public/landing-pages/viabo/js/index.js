function changeBackgroundMainMenu() {
  const e = document.querySelector(".main-menu"),
    n = document.querySelector(".banner-section");
  window.scrollY >= n.offsetTop + n.offsetHeight - e.offsetHeight
    ? document.querySelector(".main-menu").classList.add("scrolled")
    : document.querySelector(".main-menu").classList.remove("scrolled");
}
function sleep(e) {
  return new Promise((n) => setTimeout(n, e));
}
window.addEventListener("scroll", changeBackgroundMainMenu),
  anime
    .timeline({ loop: !1 })
    .add({
      targets: "#animate-banner-title",
      translateX: [100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1e3,
      delay: 1e3,
    })
    .add({
      targets: "#animate-banner-subtitle",
      translateX: [70, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1e3,
    })
    .add({
      targets: ["#animate-banner-button-left", "#animate-banner-button-right"],
      scale: [10, 1],
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 1e3,
      delay: (e, n) => 800 * n,
    }),
  anime({
    targets: ".viabo-safe-shield-image",
    scale: [1, 1.03, 1],
    duration: 900,
    easing: "easeInOutSine",
    loop: !0,
  });
const check_icons = document.querySelector(".check-icon"),
  check_icons_elements = document.querySelectorAll(".check-icon");
let check_icons_played = !1;
function animate_check_icon(e, n) {
  anime({
    targets: e,
    translateX: [0, 5, -5, 0],
    translateY: [0, 5, -5, 0],
    duration: 1e3,
    easing: "linear",
    loop: !0,
    delay: n,
  });
}
const check_icons_2 = document.querySelector(".check-icons"),
  check_icons_elements_2 = document.querySelectorAll(".check-icons");
let check_icons_2_played = !1;
function animate_check_icon_2(e, n) {
  anime({
    targets: e,
    translateX: [0, 3, -3, 0],
    translateY: [0, 3, -3, 0],
    duration: 1800,
    easing: "linear",
    loop: !0,
    delay: n,
  });
}
const circles = document.querySelector(".circles-container"),
  animate_circles = anime({
    targets: ".circle",
    scale: [0, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 1e3,
    delay: (e, n) => 800 * n,
    autoplay: !1,
    loop: !1,
  }),
  services = document.getElementById("viabo-services");
let services_played = !1;
const big_image = document.querySelector(".gallery-ecosystem-image"),
  big_image_animate = anime({
    targets: big_image,
    translateY: ["100%", "0%"],
    opacity: [0, 1],
    duration: 2e3,
    easing: "easeOutExpo",
    autoplay: !1,
    loop: !1,
  }),
  smartphone_image = document.querySelector(".card_in_smarthphone_image"),
  smartphone_image_animate = anime({
    targets: smartphone_image,
    translateY: ["100%", "0%"],
    opacity: [0, 1],
    duration: 2e3,
    easing: "easeOutExpo",
    autoplay: !1,
    loop: !1,
  });
function isInViewport(e) {
  const n = e.getBoundingClientRect(),
    a = window.innerHeight || document.documentElement.clientHeight,
    t = window.innerWidth || document.documentElement.clientWidth;
  return n.bottom > 0 && n.right > 0 && n.top < a && n.left < t;
}
window.addEventListener("scroll", () => {
  isInViewport(circles) && !animate_circles.began && animate_circles.play(),
    isInViewport(check_icons) &&
      !check_icons_played &&
      (animate_check_icon(check_icons_elements[0], 300),
      sleep(300).then(() => {
        animate_check_icon(check_icons_elements[1], 300),
          sleep(300).then(() => {
            animate_check_icon(check_icons_elements[2], 300);
          });
      }),
      (check_icons_played = !0)),
    isInViewport(check_icons_2) &&
      !check_icons_2_played &&
      (animate_check_icon_2(check_icons_elements_2[0], 300),
      sleep(300).then(() => {
        animate_check_icon_2(check_icons_elements_2[1], 300),
          sleep(300).then(() => {
            animate_check_icon_2(check_icons_elements_2[2], 300),
              sleep(300).then(() => {
                animate_check_icon_2(check_icons_elements_2[3], 300),
                  sleep(300).then(() => {
                    animate_check_icon_2(check_icons_elements_2[4], 300),
                      sleep(300).then(() => {
                        animate_check_icon_2(check_icons_elements_2[5], 300);
                      });
                  });
              });
          });
      }),
      (check_icons_2_played = !0)),
    isInViewport(services) &&
      !services_played &&
      (anime
        .timeline({ loop: !1 })
        .add({
          targets: "#viabo-services-pay",
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1e3,
          delay: 1e3,
        })
        .add({
          targets: "#viabo-services-card",
          translateX: [70, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1e3,
        })
        .add({
          targets: "#viabo-services-admin",
          translateX: [70, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1e3,
        }),
      (services_played = !0)),
    isInViewport(big_image) &&
      !big_image_animate.began &&
      big_image_animate.play(),
    isInViewport(smartphone_image) &&
      !smartphone_image_animate.began &&
      smartphone_image_animate.play();
});
