gsap.from("#hero-btn", {
    y: 50,
    opacity: 0,
    duration: 1.5,
  });

gsap.from("#book-btn", {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#book-btn",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from("#care-btn", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#care-btn",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  function toggleDetails(link) {
    const details = link.nextElementSibling;
    if (details.classList.contains("open")) {
        details.classList.remove("open");
        link.textContent = "Show More";
    } else {
        details.classList.add("open");
        link.textContent = "Show Less";
    }
}
