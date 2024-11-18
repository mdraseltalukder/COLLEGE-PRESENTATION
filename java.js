const tl = gsap.timeline();

tl.from(".heading1", {
    delay: 2,
    opacity: 0,
    duration: 2,
    scale:0,
  });
tl.to(".heading1", {
    opacity: 0,
    duration: 2,
    delay: 2,
scale: 0,
  });
  

  tl.from(".logo-img",{
    opacity: 0,
    duration: 2,
  })
  tl.from(".heading2",{
    x: "-100%",
    opacity: 0,
    duration: 1.5,
    

   
  })
  tl.from(".heading3",{
    x: "200%",
    duration: 1.5,
    opacity: 0,

   
  })
  tl.to(".main-animation",{
    opacity: 0,
    duration: 2,
    delay:2,
  
   
  })
  tl.to(".animation",{
    opacity: 0,
    duration: 2,
    delay: 1,
   
  })
  tl.to(".animation",{
    y: "-100%",
  })
  
