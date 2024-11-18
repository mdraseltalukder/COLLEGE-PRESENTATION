const tl = gsap.timeline();

tl.from(".heading1", {
    opacity: 0,
    duration: 2,
    scale:0,
  });
tl.to(".heading1", {
    opacity: 0,
    duration: 2,
    delay: 1,
    scale:1,
  });
  tl.to(".animation",{
    opacity: 0,
    duration: 2,
    delay: 1,
   
  })
  tl.to(".animation",{
    y: "-100%",
  })