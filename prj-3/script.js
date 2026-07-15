/// <reference types='gsap' />

const tl = gsap.timeline()

tl.fromTo('nav',{
  y:-200,
  opacity:0,
},
{
  opacity:1,
  duration:0.8,
  y:0,
  ease:"power1.out"
})
.fromTo('h1',{
  x:-200,
  opacity:0
},{
  opacity:1,
  x:0,
  duration:1,
  ease:"power2.out"
})
.fromTo('section>p',{
  opacity:0
},{
  opacity:1,
  ease:"power2.out",
  duration:1.2,
})
.fromTo('button',{
  scale:0
},{
  scale:1,
  duration:1,
  ease:"power2.out"
})
.from('.cards',{
  y:200,
  opacity:0,
  duration:1,
  ease:"power2.out",
  stagger:{
    each:0.3,
    from:"start"

  }
})
.fromTo('footer',{
  y:200,
  opacity:0,
  
},{
  opacity:1,
  y:0,
  duration:1.2,
  ease:"power3.out"
})
