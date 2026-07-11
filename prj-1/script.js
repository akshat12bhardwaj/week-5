/// <reference types="gsap" />

gsap.fromTo(".box",
    {
        x:"-100vw",
        y:"-100vh",
        rotation:720,
        opacity:0,
        scale:0,
        
    },
    {
        x:0,
        y:0,
        opacity:1,
        delay:1,
        scale:1,
        rotation:0,
        duration:3,
        ease:"back.out"
    }
)