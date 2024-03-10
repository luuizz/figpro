const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
})

AOS.init({
    once: true,
    duration: 1000,
    disable: "phone",
});