// Start Sound Effect
document.addEventListener("DOMContentLoaded", () => {
  const enterSound = new Audio("sound effect/start.mp3");
  enterSound.volume = 0.8;
  enterSound.play().catch(err => {
    console.warn("Autoplay blocked. Waiting for user interaction.", err);
  });
});

// Theme Toggle Functionality
const themeSwitch = document.getElementById("theme-switch")
const body = document.body

const currentTheme = localStorage.getItem("theme") || "dark"
if (currentTheme === "light") {
  body.setAttribute("data-theme", "light")
  themeSwitch.checked = true
}

themeSwitch.addEventListener("change", function () {
  if (this.checked) {
    body.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
  } else {
    body.removeAttribute("data-theme")
    localStorage.setItem("theme", "dark")
  }
})

// Category card interactions
document.addEventListener("DOMContentLoaded", () => {
  const categoryCards = document.querySelectorAll(".category-card")

  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const category = this.getAttribute("data-category")
      // Filter gallery by category (you can implement this)
      console.log(`Filtering by category: ${category}`)
    })

    card.addEventListener("mouseenter", function () {
      this.style.borderColor = "var(--accent-2)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.borderColor = "var(--text-primary)"
    })
  })

  // Scroll effect for navigation
  let lastScrollTop = 0
  const nav = document.getElementById("pixelNav")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      nav.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      nav.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })
})

