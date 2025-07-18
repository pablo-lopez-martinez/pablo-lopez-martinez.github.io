import lucide from "lucide"

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons()

  // Navbar scroll effect
  const navbar = document.getElementById("navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Smooth scroll for nav links
  document.querySelectorAll(".nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
    })
  })

  // Section fade-in/slide-up animation on scroll (simplified SectionWrapper)
  const sectionWrappers = document.querySelectorAll(".section-wrapper")

  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the section is visible
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        observer.unobserve(entry.target) // Stop observing once visible
      }
    })
  }, observerOptions)

  sectionWrappers.forEach((section) => {
    observer.observe(section)
  })

  // Skill Card hover effect (simplified from 3D flip)
  // This is handled purely by CSS using :hover and transform-style: preserve-3d
  // The JavaScript here is just for demonstration if more complex logic was needed,
  // but for this simplified flip, CSS is sufficient.
})
