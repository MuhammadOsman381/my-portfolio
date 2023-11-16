

gsap.from("#name",{
    scale:0,
    duration:1,
    delay:0,
    opacity:0,
})

gsap.from(".intro",{
    scale:0,
    duration:1,
    delay:0,
    opacity:0,
    stagger:0.1
})

gsap.from(".me",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
})

gsap.from("#about",{
    scale:0,
    delay:0,
    duration:1.5,
    opacity:-1,
    scrollTrigger:"#page2 #about"
})

gsap.from(".para",{
    scale:0,
    delay:0,
    duration:1.5,
    opacity:-1,
    scrollTrigger:"#page2 #about"
})

gsap.from(".skills",{
    scale:0,
    delay:0,
    duration:1.5,
    opacity:-1,
    scrollTrigger:"#page3"
})

gsap.from(" #html,#css,#js,#react,#tail",{
    scale:0,
    delay:0,
    duration:1,
    opacity:0,
    stagger:0.5,
    rotate:90,
    scrollTrigger:"#page3"
})


gsap.from("#page-4 .title",{
    scale:0,
    delay:0,
    duration:1.5,
    opacity:0,
    scrollTrigger:"#page-4"
})

gsap.from("#cal, .calintro, .calbtn",{
    scale:0,
    delay:0,
    duration:1,
    opacity:0,
    stagger:0.7,
    scrollTrigger:".calculator"
})

gsap.from("#stop, .stopintro, .stopbtn",{
    scale:0,
    delay:0,
    duration:1,
    opacity:0,
    stagger:0.7,
    scrollTrigger:".stopwatch"
})





