//=============================================================================
// LENIS SMOOTH SCROLL
//=============================================================================
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
//=============================================================================
// GSAP ELEMENT ANIMS
//=============================================================================
// we put every H2 in an array then create a gsap animation for each element
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
//=============================================================================
// SVG DRAW
//=============================================================================
var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
};
// read the link on how above code works

var findMe = document.querySelectorAll(".svgtodraw");

window.addEventListener(
    "scroll",
    function (event) {
        // add event on scroll
        findMe.forEach((element) => {
            //for each .thisisatest
            if (isInViewport(element)) {
                //if in Viewport
                element.classList.add("visible");
            }
        });
    },
    false
);
//=============================================================================
// TEXT FANCY UNDERLINE BACKGROUND-SIZE
//=============================================================================

const fancyUnderline = gsap.utils.toArray(".text-fancy-underline");

fancyUnderline.forEach((underlinedText, i) => {
    gsap.to(underlinedText, {
        delay: 0.5 * i,
        backgroundSize: "100% 3px",
        scrollTrigger: {
            trigger: underlinedText,
            start: "-100 center",
        },
        duration: 1,
    });
});

//=============================================================================
// PROCESS STEPS NUMBER REVEAL
//=============================================================================

const processNumbers = gsap.utils.toArray(".point");

processNumbers.forEach((processNumber, i) => {
    gsap.to(processNumber, {
        delay: 0.2 * i,
        scrollTrigger: {
            trigger: processNumber,
            start: "center bottom",
        },
        duration: 0.1,
        onComplete: function () {
            $(processNumber).addClass("visible");
        },
    });
});

//=============================================================================
// GSAP HEADER REVEAL BASED ON SCROLL UP
//=============================================================================

const showAnim = gsap
    .from(".header", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
    })
    .progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
    },
});

//=============================================================================
// FORM
//=============================================================================
// FORM INPUT APPEND BORDER
$(".form-container span").each(function (index) {
    $(this).append('<div class="border"></div>');
});

// FORM SUBMIT PLANE TRANSLATE
//converts viewport units to pixels (like "50vw" or "20vh" into pixels)
function toPX(value) {
    return (
        (parseFloat(value) / 100) *
        (/vh/gi.test(value) ? window.innerHeight : window.innerWidth)
    );
}
var wpcf7Elm = document.querySelector(".wpcf7");
wpcf7Elm.addEventListener(
    "wpcf7mailsent",
    function (event) {
        gsap.timeline()
            .fromTo(
                ".submit-plane",
                {
                    x: 0,
                },
                {
                    x: -20,
                    ease: "power1.inOut",
                    duration: 1,
                }
            )
            .fromTo(
                ".submit-plane",
                {
                    x: -20,
                    scaleX: -1,
                    scaleY: 1,
                },
                {
                    x: toPX("60vw"),
                    scaleX: -1,
                    scaleY: 1,
                    ease: "power1.out",
                    duration: 1,
                }
            )
            .fromTo(
                ".submit-plane",
                {
                    rotation: 0,
                    y: 0,
                },
                {
                    y: -150,
                    rotation: -60,
                    ease: "power2.in",
                    duration: 0.8,
                },
                1
            );
    },
    false
);

// BURGER ANIM
// BURGER ANIM
// BURGER ANIM
$(".burger").addClass("unToggled"),
    $(".burger").click(function () {
        $(".header").toggleClass("active"),
            $(this).toggleClass("toggled"),
            $(this).toggleClass("unToggled"),
            $("body").toggleClass("fixed-position");
        $("html").toggleClass("fixed-position");
    });
