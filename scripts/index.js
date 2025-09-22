// Theme Toggle Functionality
const themeSwitch = document.getElementById("theme-switch")
const body = document.body

// Check for saved theme preference 
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



// Typing Effect
const subtitleElement = document.getElementById("typingSubtitle")
const subtitles = [
  "Starting creative core...",
  "Welcome, explorer. Ready to dive in?"
]
let i = 0
let currentLine = 0

function typeWriter() {
  if (i < subtitles[currentLine].length) {
    subtitleElement.innerHTML = subtitles[currentLine].substring(0, i + 1) + '<span class="typing-cursor"></span>'
    i++
    setTimeout(typeWriter, 80)
  } else {
    setTimeout(() => {
      if (currentLine < subtitles.length - 1) {
        currentLine++
        i = 0
        typeWriter()
      } else {
        subtitleElement.innerHTML = subtitles[currentLine]
      }
    }, 1000)
  }
}

// Start typing
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWriter, 800)
})

// Navigation Show/Hide
function showNavigation() {
  const navigation = document.getElementById("navigation")
  const enterBtn = document.querySelector(".enter-btn")

  navigation.classList.remove("hidden")
  setTimeout(() => {
    navigation.classList.add("show")
  }, 100)

  enterBtn.style.display = "none"
}



// Create stars 
function createStars() {
  const starsContainer = document.querySelector(".stars")
  const numberOfStars = 300

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div")
    star.className = "star"
    star.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--text-primary);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: twinkle ${2 + Math.random() * 3}s infinite alternate;
            animation-delay: ${Math.random() * 2}s;
        `
    starsContainer.appendChild(star)
  }
}

// Initialize stars when page loads
document.addEventListener("DOMContentLoaded", createStars)




// Add hover effects to navigation items
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item")

  navItems.forEach((item) => {
    const color = item.getAttribute("data-color")

    item.addEventListener("mouseenter", function () {
      this.style.borderColor = color
      this.style.color = color
    })

    item.addEventListener("mouseleave", function () {
      this.style.borderColor = "var(--text-primary)"
      this.style.color = "var(--text-primary)"
    })
  })
})

// Sound effect functionality
const hoverSound = new Audio('sound effect/hover.mp3');
hoverSound.volume = 0.9; // Atur volume agar tidak terlalu keras

// Add hover effects to navigation items with sound
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item")

  navItems.forEach((item) => {
    const color = item.getAttribute("data-color")

    item.addEventListener("mouseenter", function () {
      this.style.borderColor = color
      this.style.color = color
      
      hoverSound.currentTime = 0;
      hoverSound.play().catch(e => console.log("Audio play error:", e));
    })

    item.addEventListener("mouseleave", function () {
      this.style.borderColor = "var(--text-primary)"
      this.style.color = "var(--text-primary)"
    })
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item2")

  navItems.forEach((item) => {
    const color = item.getAttribute("data-color")

    item.addEventListener("mouseenter", function () {
      this.style.borderColor = color
      this.style.color = color
      
      hoverSound.currentTime = 0;
      hoverSound.play().catch(e => console.log("Audio play error:", e));
    })

    item.addEventListener("mouseleave", function () {
      this.style.borderColor = "var(--text-primary)"
      this.style.color = "var(--text-primary)"
    })
  })
})


const clickSound = new Audio('sound effect/start.mp3')
clickSound.volume = 0.8

document.addEventListener("DOMContentLoaded", () => {
  // Gabungkan semua elemen yang pakai class .nav-item atau .nav-item2
  const navItems = document.querySelectorAll(".nav-item, .nav-item2")

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      clickSound.currentTime = 0
      clickSound.play().catch(e => console.log("Audio play error (click):", e))
    })
  })
})

