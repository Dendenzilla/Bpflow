// LENIS SMOOTH SCROLL
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: !0,
    mouseMultiplier: 1,
    smoothTouch: !1,
    touchMultiplier: 2,
    infinite: !1,
});
function raf(t) {
    lenis.raf(t), requestAnimationFrame(raf);
}
lenis.on(
    "scroll",
    ({ scroll: t, limit: e, velocity: r, direction: o, progress: i }) => {
        console.log({
            scroll: t,
            limit: e,
            velocity: r,
            direction: o,
            progress: i,
        });
    }
),
    requestAnimationFrame(raf),
    document.querySelectorAll("a.anchor__form").forEach((t, e) => {
        t.addEventListener("click", () => {
            event.preventDefault(),
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: ".form-container", offsetY: 70 },
                });
        });
    });
// END LENIS SMOOTH SCROLL
// END LENIS SMOOTH SCROLL
const titles = gsap.utils.toArray("h2");
titles.forEach((t) => {
    gsap.to(t, {
        scrollTrigger: { trigger: t, start: "center 800" },
        y: 0,
        opacity: 1,
        duration: 0.625,
    });
});

const stepsAnim = gsap.utils.toArray(".goal");
stepsAnim.forEach((t, e) => {
    gsap.to(t, {
        delay: 0.25 * e,
        scrollTrigger: { trigger: t, start: "center bottom" },
        duration: 0.625,
        x: 0,
        opacity: 1,
    });
});
