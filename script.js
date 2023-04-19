// Smooth Scrolling Animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link){
  link.addEventListener("click", function (e){
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  })
});

window.addEventListener('scroll',()=> indicateScrollBar())

function indicateScrollBar() {
const distanceFromPageTop = document.body.scrollTop || document.documentElement.scrollTop;

const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const scrolled = (distanceFromPageTop / height) * 100;

document.querySelector(".scroll-bar").style.width =  `${scrolled}%`;
}