document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerOffset = document.querySelector(".header").offsetHeight // Get header height
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }

      // Close mobile menu if open
      const navLinks = document.querySelector(".nav-links")
      const hamburger = document.querySelector(".hamburger")
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
        hamburger.classList.remove("active")
      }
    })
  })

  // Mobile navigation toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Intersection Observer for section animations
  const sections = document.querySelectorAll(".section")
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target) // Stop observing once visible
      }
    })
  }, observerOptions)

  sections.forEach((section) => {
    observer.observe(section)
  })

  // Back to Top button functionality
  const backToTopBtn = document.getElementById("backToTopBtn")

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      // Show button after scrolling 300px
      backToTopBtn.style.display = "block"
    } else {
      backToTopBtn.style.display = "none"
    }
  })

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Highlight active navigation link on scroll
  const header = document.querySelector(".header")
  const navLinksList = document.querySelectorAll(".nav-links a")

  window.addEventListener("scroll", () => {
    let current = ""
    // Get the current scroll position
    const scrollY = window.pageYOffset + header.offsetHeight + 10 // Add some offset for better active state

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    navLinksList.forEach((a) => {
      a.classList.remove("active")
      // Only add active class if the href is a section ID and matches current
      if (a.getAttribute("href").startsWith("#") && a.getAttribute("href").substring(1) === current) {
        a.classList.add("active")
      }
    })
  })

  // NEW: Dynamically generate Tech Stack cards
  const techStackData = [
    {
      name: "Python",
      iconClass: "fab fa-python",
      description: "Versatile language for backend, data science, and AI.",
    },
    {
      name: "Java",
      iconClass: "fab fa-java",
      description: "Robust, object-oriented language for enterprise applications.",
    },
    {
      name: "C",
      iconClass: "fas fa-cogs",
      description: "Low-level language for system programming and performance-critical applications.",
    },
    {
      name: "OCaml",
      iconClass: "fas fa-code",
      description: "Functional programming language known for its strong type system.",
    },
    {
      name: "SQL",
      iconClass: "fas fa-database",
      description: "Standard language for managing and querying relational databases.",
    },
    {
      name: "Git",
      iconClass: "fab fa-git-alt",
      description: "Version control system for tracking changes in source code.",
    },
    {
      name: "Docker",
      iconClass: "fab fa-docker",
      description: "Platform for developing, shipping, and running applications in containers.",
    },
    {
      name: "REST API",
      iconClass: "fas fa-exchange-alt",
      description: "Architectural style for networked applications, widely used for web services.",
    },
    {
      name: "FastAPI",
      iconClass: "fas fa-bolt", // Using a generic bolt icon for FastAPI
      description: "Modern, fast web framework for building APIs with Python.",
    },
    {
      name: "Django",
      iconClass: "fab fa-python", // Reusing Python icon for Django
      description: "High-level Python web framework for rapid development of secure websites.",
    },
    {
      name: "Pandas",
      iconClass: "fas fa-table",
      description: "Python library for data manipulation and analysis.",
    },
    {
      name: "NumPy",
      iconClass: "fas fa-calculator",
      description: "Fundamental package for numerical computing with Python.",
    },
    {
      name: "Matplotlib",
      iconClass: "fas fa-chart-bar",
      description: "Python plotting library for creating static, animated, and interactive visualizations.",
    },
    // REMOVED:
    // {
    //   name: "OpenCV",
    //   iconClass: "fas fa-camera",
    //   description: "Open-source computer vision and machine learning software library.",
    // },
    {
      name: "Streamlit",
      iconClass: "fas fa-chart-line",
      description: "Open-source app framework for Machine Learning and Data Science teams.",
    },
    {
      name: "Power BI",
      iconClass: "fas fa-chart-pie",
      description: "Business intelligence tool for data visualization and reporting.",
    },
  ]

  const techStackGrid = document.querySelector(".tech-stack-grid")

  if (techStackGrid) {
    techStackData.forEach((tech) => {
      const flipCard = document.createElement("div")
      flipCard.classList.add("flip-card")

      const flipCardInner = document.createElement("div")
      flipCardInner.classList.add("flip-card-inner")

      const flipCardFront = document.createElement("div")
      flipCardFront.classList.add("flip-card-front")
      const icon = document.createElement("i")
      icon.classList.add(...tech.iconClass.split(" "))
      const name = document.createElement("h3")
      name.textContent = tech.name
      flipCardFront.appendChild(icon)
      flipCardFront.appendChild(name)

      const flipCardBack = document.createElement("div")
      flipCardBack.classList.add("flip-card-back")
      const description = document.createElement("p")
      description.textContent = tech.description
      flipCardBack.appendChild(description)

      flipCardInner.appendChild(flipCardFront)
      flipCardInner.appendChild(flipCardBack)
      flipCard.appendChild(flipCardInner)
      techStackGrid.appendChild(flipCard)
    })
  }

  // NEW: Dynamically generate Soft Skills cards
  const softSkillsData = [
    {
      name: "Problem Solving",
      iconClass: "fas fa-lightbulb",
      description: "Ability to identify, analyze, and resolve complex issues effectively.",
    },
    {
      name: "Leadership",
      iconClass: "fas fa-user-tie", // Changed icon for Leadership
      description: "Inspiring and guiding teams towards common goals, fostering collaboration.",
    },
    {
      name: "Communication",
      iconClass: "fas fa-comments",
      description: "Clearly conveying ideas and actively listening to others, both verbally and in writing.",
    },
    {
      name: "Team Work",
      iconClass: "fas fa-handshake",
      description: "Collaborating effectively with diverse individuals to achieve shared objectives.",
    },
    {
      name: "Adaptability",
      iconClass: "fas fa-sync-alt",
      description: "Adjusting quickly to new conditions, technologies, and challenges.",
    },
    {
      name: "Critical Thinking",
      iconClass: "fas fa-magnifying-glass",
      description: "Analyzing information objectively and making reasoned judgments.",
    },
    {
      name: "Time Management",
      iconClass: "fas fa-clock",
      description: "Organizing and prioritizing tasks to maximize productivity and meet deadlines.",
    },
    {
      name: "Creativity",
      iconClass: "fas fa-paint-brush",
      description: "Generating innovative ideas and approaches to problems.",
    },
  ]

  const softSkillsGrid = document.querySelector(".soft-skills-grid")

  if (softSkillsGrid) {
    softSkillsData.forEach((skill) => {
      const skillCard = document.createElement("div")
      skillCard.classList.add("soft-skill-card")

      const icon = document.createElement("i")
      icon.classList.add(...skill.iconClass.split(" "))
      skillCard.appendChild(icon)

      const name = document.createElement("h3")
      name.textContent = skill.name
      skillCard.appendChild(name)

      const description = document.createElement("p")
      description.textContent = skill.description
      skillCard.appendChild(description)

      softSkillsGrid.appendChild(skillCard)
    })
  }
})
