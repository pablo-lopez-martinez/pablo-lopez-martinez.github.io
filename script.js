// You can add any custom JavaScript here if needed.
// For a static portfolio, it might be minimal.
// Example: Smooth scrolling for navigation links (if you add a nav bar)

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})
