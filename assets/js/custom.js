/**
 * Main JS file for Scriptor behaviours
 */

// Responsive video embeds
// let videoEmbeds = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];
// reframe(videoEmbeds.join(","));

// Menu on small screens


let menuToggle = document.querySelectorAll(".menu-toggle");
if (menuToggle) {
  for (let i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener(
      "click",
      function (e) {
        document.body.classList.toggle("menu--opened");
        e.preventDefault();
      },
      false
    );
  }
}

const nav = document.querySelector("#nav");
const topNav = nav.offsetTop + 1;

function fixNav() {
  //console.log(topNav);
  if (window.scrollY >= topNav) {
    document.body.classList.add("fix-nav");
  } else {
    document.body.classList.remove("fix-nav");
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener("scroll", fixNav);
