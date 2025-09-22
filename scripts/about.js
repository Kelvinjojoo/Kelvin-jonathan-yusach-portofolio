// Start Sound Effect
document.addEventListener("DOMContentLoaded", () => {
  const enterSound = new Audio("sound effect/start.mp3");
  enterSound.volume = 0.8;
  enterSound.play().catch(err => {
    console.warn("Autoplay blocked. Waiting for user interaction.", err);
  });
});


// Theme Toggle Functionality (same as index.js)
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

// Scroll effect for navigation
document.addEventListener("DOMContentLoaded", () => {
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

// Profile Image Toggle with Flip Effect and Click Indicator
const profileImg = document.getElementById("profileImg")
const profileImgAlt = document.getElementById("profileImgAlt")
const pixelOverlay = document.getElementById("pixelOverlay")
const clickIndicator = document.getElementById("clickIndicator")
let isFlipped = false
let hasBeenClicked = false

// Sound Effects for About Page - 🔮 SOUND EFFECT LOCATION 4: Profile photo flip sound
const profileSounds = {
  flip: new Audio(
    "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT",
  ), // Profile flip sound
}

profileSounds.flip.volume = 0.4

// Play sound function for about page
function playProfileSound(soundName) {
  try {
    profileSounds[soundName].currentTime = 0
    profileSounds[soundName].play().catch((e) => {
      console.log("Profile sound play failed:", e)
      // Fallback beep
      createProfileBeep()
    })
  } catch (e) {
    console.log("Profile sound not available:", e)
    createProfileBeep()
  }
}

// Fallback beep for profile
function createProfileBeep() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.2)
  } catch (e) {
    console.log("Web Audio API not available")
  }
}

function handleProfileClick() {
  // Play flip sound
  playProfileSound("flip")

  // Hide click indicator after first click
  if (!hasBeenClicked) {
    clickIndicator.classList.add("hidden")
    hasBeenClicked = true
  }

  if (!isFlipped) {
    profileImg.classList.add("flipped")
    profileImgAlt.classList.add("flipped")
    isFlipped = true
  } else {
    profileImg.classList.remove("flipped")
    profileImgAlt.classList.remove("flipped")
    isFlipped = false
  }
}

profileImg.addEventListener("click", handleProfileClick)
profileImgAlt.addEventListener("click", handleProfileClick)

pixelOverlay.addEventListener("click", function () {
  this.classList.remove("active")
})

// Timeline Data
const timelineData = [
  {
    year: "Aug 2025 - Sept 2025",
    title: "Djarum Internship",
    description: "Developed PB Djarum’s first centralized athlete database, streamlining fragmented records into an accessible system with analytics and reporting tools. Strengthened both technical and soft skills through real-world collaboration and problem-solving."
  }
]

// Generate Timeline
function generateTimeline() {
  const timeline = document.getElementById("timeline")

  timelineData.forEach((item, index) => {
    const timelineItem = document.createElement("div")
    timelineItem.className = "timeline-item"

    timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-desc">${item.description}</div>
            </div>
            <div class="timeline-dot"></div>
        `

    timeline.appendChild(timelineItem)
  })
}

// Initialize timeline when page loads
document.addEventListener("DOMContentLoaded", generateTimeline)

// Add animation to timeline items on scroll
function animateOnScroll() {
  const timelineItems = document.querySelectorAll(".timeline-item")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  })

  timelineItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(50px)"
    item.style.transition = "all 0.6s ease"
    observer.observe(item)
  })
}

// Initialize animations
document.addEventListener("DOMContentLoaded", animateOnScroll)

// Add hover effects to skill tags
document.addEventListener("DOMContentLoaded", () => {
  const skillTags = document.querySelectorAll(".skill-tag")

  skillTags.forEach((tag) => {
    tag.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.05)"
    })

    tag.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
})
