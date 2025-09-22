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

// Interactive Facts Functionality
let coffeeCount = 0
let codeCount = 1337
let isPlaying = false
let currentMoodIndex = 0

const moods = [
  { emoji: "🤓", label: "Currently feeling nerdy" },
  { emoji: "😴", label: "Need more coffee" },
  { emoji: "🚀", label: "Ready to code!" },
  { emoji: "🎨", label: "In creative mode" },
  { emoji: "🔥", label: "On fire today!" },
  { emoji: "🌟", label: "Feeling inspired" },
  { emoji: "🎯", label: "Focused and determined" },
  { emoji: "😎", label: "Cool as a cucumber" },
]

const musicTracks = ["Lo-fi Hip Hop", "Synthwave Vibes", "Coding Jazz", "Ambient Focus", "Chillstep Mix", "Pixel Beats"]

function incrementCounter(type) {
  if (type === "coffee") {
    coffeeCount++
    document.getElementById("coffeeCounter").textContent = coffeeCount

    // Add coffee animation
    const card = document.querySelector('[data-fact="coffee"]')
    card.style.transform = "scale(1.05)"
    setTimeout(() => {
      card.style.transform = ""
    }, 200)
  } else if (type === "code") {
    codeCount += Math.floor(Math.random() * 50) + 10
    document.getElementById("codeCounter").textContent = codeCount

    // Add code animation
    const card = document.querySelector('[data-fact="code"]')
    card.style.transform = "scale(1.05)"
    setTimeout(() => {
      card.style.transform = ""
    }, 200)
  }
}

function toggleMusic() {
  const musicIcon = document.getElementById("musicIcon")
  const nowPlaying = document.getElementById("nowPlaying")

  isPlaying = !isPlaying

  if (isPlaying) {
    musicIcon.textContent = "⏸️"
    const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)]
    nowPlaying.textContent = `♪ ${randomTrack}`
    nowPlaying.style.animation = "pulse 1s infinite"
  } else {
    musicIcon.textContent = "▶️"
    nowPlaying.textContent = "Music Paused"
    nowPlaying.style.animation = "none"
  }
}

function changeMood() {
  currentMoodIndex = (currentMoodIndex + 1) % moods.length
  const currentMood = moods[currentMoodIndex]

  document.getElementById("currentMood").textContent = currentMood.emoji
  document.querySelector(".mood-label").textContent = currentMood.label

  // Add mood change animation
  const moodDisplay = document.getElementById("currentMood")
  moodDisplay.style.transform = "scale(1.3) rotate(360deg)"
  setTimeout(() => {
    moodDisplay.style.transform = ""
  }, 500)
}

// Initialize counters on page load
document.addEventListener("DOMContentLoaded", () => {
  // Set random initial coffee count
  coffeeCount = Math.floor(Math.random() * 5) + 1
  document.getElementById("coffeeCounter").textContent = coffeeCount
})

// Social card hover effects
document.addEventListener("DOMContentLoaded", () => {
  const socialCards = document.querySelectorAll(".social-card")

  socialCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const glow = this.querySelector(".social-glow")
      if (glow) {
        glow.style.opacity = "0.6"
      }
    })

    card.addEventListener("mouseleave", function () {
      const glow = this.querySelector(".social-glow")
      if (glow) {
        glow.style.opacity = "0"
      }
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

  // Add click effects to fact cards
  const factCards = document.querySelectorAll(".fact-card")
  factCards.forEach((card) => {
    card.addEventListener("click", function () {
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = ""
      }, 150)
    })
  })
})

// Add parallax effect to floating elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const floatingElements = document.querySelectorAll(".floating-element")

  floatingElements.forEach((element, index) => {
    const speed = 0.3 + index * 0.1
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Add typing effect to form placeholder
const messageTextarea = document.getElementById("message")
const placeholderTexts = [
  "Tell me about your project! 💼",
  "Want to collaborate? Let's chat! 🤝",
  "Have a question? Ask away! 💭",
  "Just saying hello? That's cool too! 👋",
]

let currentPlaceholder = 0
setInterval(() => {
  messageTextarea.placeholder = placeholderTexts[currentPlaceholder]
  currentPlaceholder = (currentPlaceholder + 1) % placeholderTexts.length
}, 3000)
