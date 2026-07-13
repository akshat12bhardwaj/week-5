/// <reference types='gsap' />

gsap.fromTo(
  "nav a",
  {
    y: -200,
    opacity: 0,
    scale: 0.8,
  },
  {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power1.out",
    stagger: {
      each: 0.2,
      from: "center",
    },
  },
);

gsap.fromTo(
  "section",
  {
    x: -400,
    opacity: 0,
    scale:0.5
  },

  {
    scale:1,
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power2.out",
  },
);

gsap.fromTo(
  ".cards",
  {
    x: 400,
    opacity: 0,
    scale:0.5
  },

  {
    scale:1,
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    stagger:{
        each:0.3,
        from:"start"
    }
  },
);


gsap.fromTo(
  "footer",
  {
    y:400,
    opacity: 0,
    scale:0.5
  },

  {
    scale:1,
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power1.out",
  },
);



