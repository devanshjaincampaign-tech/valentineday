gsap.to("#navbar",{
    backgroundColor: "#000",
    duration:1,
    delay:1,
    height: "50px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -20%",
        end: "top -21%",
        scrub:  1,
    }
})

gsap.to("#overlay", {
    backgroundColor:"rgba(0,0,0,0.9",
  duration: 1,
  scrollTrigger: {
    trigger: "#main",
    start: "top -30%",
    end: "top -21%",
    scrub: 1,
  }
});