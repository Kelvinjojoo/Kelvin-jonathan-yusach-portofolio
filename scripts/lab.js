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

// Enhanced Tarot Cards Data with interpretations and advice
const tarotCards = [
  {
    name: "The Outlier",
    image: "📊",
    message: "You are the data point that doesn't fit the pattern, and that's your superpower!",
    wisdom: "Don't ignore the weird points — they might be your greatest insight.",
    interpretation: "This card suggests you're encountering unusual patterns in your data that others might dismiss.",
    advice: "Investigate anomalies thoroughly - they often contain the most valuable insights.",
    luckyAlgorithm: "Isolation Forest 🌲",
  },
  {
    name: "The Overfitter",
    image: "🎯",
    message: "Your model knows the training data by heart, but struggles with the real world.",
    wisdom: "When your model is too perfect... beware. Sometimes less complexity leads to better generalization.",
    interpretation: "You may be creating models that are too complex for the problem at hand.",
    advice: "Simplify your approach and focus on cross-validation to ensure robust performance.",
    luckyAlgorithm: "Ridge Regression 📈",
  },
  {
    name: "The Null Prophet",
    image: "❓",
    message: "In the realm of missing values, you find hidden truths.",
    wisdom: "NaNs are not mistakes. They are warnings.",
    interpretation: "This card indicates that you are dealing with incomplete or missing data.",
    advice: "Carefully handle missing values, as they can reveal underlying patterns or biases.",
    luckyAlgorithm: "Imputation Techniques 🛠️",
  },
  {
    name: "The Feature Engineer",
    image: "🔧",
    message: "You transform raw chaos into meaningful patterns.",
    wisdom: "The magic isn't in the algorithm — it's in how you prepare the ingredients.",
    interpretation: "You have a knack for creating new features that improve model performance.",
    advice: "Experiment with different feature combinations and transformations to unlock hidden insights.",
    luckyAlgorithm: "Polynomial Features ⚙️",
  },
  {
    name: "The Cross Validator",
    image: "✂️",
    message: "You split your world into pieces to see the whole truth.",
    wisdom: "Trust, but verify. Your model's performance on unseen data reveals its true character.",
    interpretation: "This card signifies the importance of evaluating your model's generalization ability.",
    advice: "Use cross-validation techniques to ensure your model performs well on unseen data.",
    luckyAlgorithm: "K-Fold Cross Validation ➗",
  },
  {
    name: "The Gradient Descender",
    image: "⛰️",
    message: "You always find the path downhill, even in the darkest loss landscape.",
    wisdom: "Every step down the gradient brings you closer to the minimum.",
    interpretation: "You are on a path of continuous improvement, optimizing your model step by step.",
    advice:
      "Be patient and persistent in your optimization efforts, and you will eventually reach the optimal solution.",
    luckyAlgorithm: "Adam Optimizer 🏃",
  },
  {
    name: "The Ensemble Master",
    image: "🎭",
    message: "You know that many weak voices together create a powerful chorus.",
    wisdom: "Diversity is strength. Combine different perspectives to achieve what no single model can.",
    interpretation: "This card suggests that combining multiple models can lead to better performance.",
    advice: "Experiment with different ensemble techniques to create a robust and accurate model.",
    luckyAlgorithm: "Random Forest 🌲🌲🌲",
  },
  {
    name: "The Bias Detector",
    image: "⚖️",
    message: "You see the hidden prejudices that lurk in algorithms.",
    wisdom: "With great data comes great responsibility. Question your assumptions and check your biases.",
    interpretation: "You are aware of the potential for bias in your data and models.",
    advice: "Actively identify and mitigate bias to ensure fairness and equity in your predictions.",
    luckyAlgorithm: "Fairness Metrics 📊",
  },
   {
    name: "The Data Janitor",
    image: "🧹",
    message: "Before the magic, comes the mess.",
    wisdom: "80% of data science is cleaning — and that's where the real impact begins.",
    interpretation: "You are in the data preprocessing phase, which may feel tedious but is crucial.",
    advice: "Be meticulous in cleaning your data — garbage in means garbage out.",
    luckyAlgorithm: "Pandas DataFrame 🐼",
  },
  {
    name: "The Dimensionality Slayer",
    image: "🌀",
    message: "You cut through the noise and reveal what truly matters.",
    wisdom: "Too many features can blur the truth. Less is often more.",
    interpretation: "You might be working with too many features or suffering from the curse of dimensionality.",
    advice: "Apply dimensionality reduction techniques to find clarity.",
    luckyAlgorithm: "PCA 🧮",
  },
  {
    name: "The Confusion Oracle",
    image: "📉",
    message: "You find clarity in confusion... matrices.",
    wisdom: "Not all accuracy is equal. Look deeper.",
    interpretation: "You are evaluating model performance and need to go beyond accuracy.",
    advice: "Use confusion matrices, precision, recall, and F1-score to understand what really matters.",
    luckyAlgorithm: "Logistic Regression ✅❌",
  },
  {
    name: "The Rebalancer",
    image: "⚖️",
    message: "You bring harmony to imbalanced datasets.",
    wisdom: "Minorities must not be ignored — they hold critical truths.",
    interpretation: "Your dataset might be imbalanced, leading to biased models.",
    advice: "Apply oversampling or undersampling methods to achieve balance.",
    luckyAlgorithm: "SMOTE 🧬",
  },
  {
    name: "The Time Series Seer",
    image: "⏳",
    message: "You see patterns unfold over time.",
    wisdom: "Time holds secrets that static models can’t see.",
    interpretation: "You're working with sequential or temporal data.",
    advice: "Account for seasonality, trends, and temporal dependencies.",
    luckyAlgorithm: "ARIMA 🔮",
  },
  {
    name: "The Model Whisperer",
    image: "🧠",
    message: "You speak the language of models, and they listen.",
    wisdom: "Tuning a model is like tuning a symphony — it takes finesse.",
    interpretation: "You're in a phase of fine-tuning your models.",
    advice: "Adjust hyperparameters carefully. Use grid search or Bayesian methods for best results.",
    luckyAlgorithm: "Grid Search 🔧",
  },
  {
    name: "The Cloud Alchemist",
    image: "☁️",
    message: "You summon compute power from the skies.",
    wisdom: "The cloud isn’t magic — it’s someone else’s computer.",
    interpretation: "You are scaling your work using cloud infrastructure.",
    advice: "Learn to balance cost and performance in cloud computing.",
    luckyAlgorithm: "AutoML on GCP ⚙️☁️",
  },
  {
    name: "The Deep Diver",
    image: "🌊",
    message: "You venture into the depths where layers upon layers build intelligence.",
    wisdom: "The deeper you go, the more abstract the knowledge becomes.",
    interpretation: "You're exploring deep learning models.",
    advice: "Understand your architecture and use regularization to prevent drowning in complexity.",
    luckyAlgorithm: "Convolutional Neural Network 🧠🖼️",
  },
  {
    name: "The Regularizer",
    image: "🪢",
    message: "You prevent the model from flying too close to the variance sun.",
    wisdom: "Constraints don’t limit you — they keep you from overfitting chaos.",
    interpretation: "You are balancing model complexity with generalization.",
    advice: "Use L1 or L2 regularization to rein in overzealous models.",
    luckyAlgorithm: "Lasso Regression 🎯"
  },
  {
    name: "The A/B Tester",
    image: "🧪",
    message: "You believe in evidence, not hunches.",
    wisdom: "Trust your users, but verify with data.",
    interpretation: "You’re in the experimentation phase of your product or model.",
    advice: "Run controlled experiments, monitor metrics carefully, and mind the p-values.",
    luckyAlgorithm: "Statistical Significance Calculator 📊"
  },
  {
    name: "The Prompt Engineer",
    image: "🧭",
    message: "You wield words like weapons in the age of language models.",
    wisdom: "Precision in language leads to power in prediction.",
    interpretation: "You’re crafting interactions with AI — and discovering its quirks.",
    advice: "Experiment with prompt templates and iterate relentlessly.",
    luckyAlgorithm: "OpenAI GPT API 🧠✨"
  },
  {
    name: "The Data Architect",
    image: "🏗️",
    message: "Your structures define the future of insights.",
    wisdom: "Without solid foundations, even the strongest models collapse.",
    interpretation: "You’re designing pipelines or data infrastructure.",
    advice: "Invest in scalable and clean data pipelines — future you will thank you.",
    luckyAlgorithm: "ETL Flow 🛠️"
  },
  {
    name: "The Hidden Layer",
    image: "🧩",
    message: "You work in silence, unseen but essential.",
    wisdom: "Meaning lies not on the surface, but in the transformation between.",
    interpretation: "You are exploring the internals of neural networks or black-box models.",
    advice: "Use model explainability tools to demystify hidden mechanisms.",
    luckyAlgorithm: "SHAP or LIME 🔍"
  }
]

// Sound Effects - REPLACE THESE URLs WITH YOUR ACTUAL SOUND FILES
const soundEffects = {
  cardReveal: new Audio(
    "sound effect/magic.mp3",
  ), // 🔮 SOUND EFFECT LOCATION 1: Card reveal sound
  buttonClick: new Audio(
    "sound effect/start.mp3",
  ), // 🔮 SOUND EFFECT LOCATION 2: Button click sound
  mysticalAmbient: new Audio(
    "",
  ), // 🔮 SOUND EFFECT LOCATION 3: Mystical ambient sound
}

// Set volume for all sound effects
Object.values(soundEffects).forEach((audio) => {
  audio.volume = 0.3 // Adjust volume (0.0 to 1.0)
})

// Mystical Cursor Trail Effect
const trail = []
const maxTrailLength = 15

function createTrailParticle(x, y) {
  const particle = document.createElement("div")
  particle.className = "cursor-trail"
  particle.style.left = x + "px"
  particle.style.top = y + "px"

  // Random mystical symbols
  const symbols = ["✨", "🔮", "⭐", "💫", "🌟", "✦", "◆", "◇"]
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)]

  document.body.appendChild(particle)

  trail.push({
    element: particle,
    life: 1.0,
  })

  // Remove old particles
  if (trail.length > maxTrailLength) {
    const oldParticle = trail.shift()
    if (oldParticle.element.parentNode) {
      oldParticle.element.parentNode.removeChild(oldParticle.element)
    }
  }
}

function updateTrail() {
  trail.forEach((particle, index) => {
    particle.life -= 0.05
    particle.element.style.opacity = particle.life
    particle.element.style.transform = `scale(${particle.life}) rotate(${(1 - particle.life) * 360}deg)`

    if (particle.life <= 0) {
      if (particle.element.parentNode) {
        particle.element.parentNode.removeChild(particle.element)
      }
      trail.splice(index, 1)
    }
  })

  requestAnimationFrame(updateTrail)
}

// Mouse move event for cursor trail
document.addEventListener("mousemove", (e) => {
  if (Math.random() < 0.3) {
    // Only create particle 30% of the time for performance
    createTrailParticle(e.clientX, e.clientY)
  }
})

// Start trail animation
updateTrail()

// Create additional stars
function createStars() {
  const starsContainer = document.querySelector(".stars-bg")
  const numberOfStars = 30

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div")
    star.className = "star"
    star.style.cssText = `
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 3}s;
        `
    starsContainer.appendChild(star)
  }
}

// Play sound effect function
function playSound(soundName) {
  try {
    soundEffects[soundName].currentTime = 0
    soundEffects[soundName].play().catch((e) => {
      console.log("Sound play failed:", e)
      // Fallback: create a simple beep using Web Audio API
      createBeep(soundName)
    })
  } catch (e) {
    console.log("Sound not available:", e)
    createBeep(soundName)
  }
}

// Fallback beep function using Web Audio API
function createBeep(type) {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    // Different frequencies for different sounds
    const frequencies = {
      cardReveal: 800,
      buttonClick: 1000,
      mysticalAmbient: 600,
    }

    oscillator.frequency.setValueAtTime(frequencies[type] || 800, audioContext.currentTime)
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.3)
  } catch (e) {
    console.log("Web Audio API not available")
  }
}

// Draw card functionality with enhanced rotation and sound
function drawCard() {
  const drawButton = document.getElementById("drawButton")
  const cardReveal = document.getElementById("cardReveal")
  const revealedCard = document.getElementById("revealedCard")
  const readingSection = document.getElementById("readingSection")
  const readingContent = document.getElementById("readingContent")
  const cards = document.querySelectorAll(".card-back")

  // Play button click sound
  playSound("buttonClick")

  // Dim the cards and button instead of hiding them
  cards.forEach((card) => card.classList.add("dimmed"))
  drawButton.classList.add("dimmed")

  // Select random card
  const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)]

  // Generate card content with enhanced rotation effect
  setTimeout(() => {
    // Play card reveal sound
    playSound("cardReveal")

    // Apply the rotation effect you requested
    revealedCard.style.transform = "rotateY(0deg) scale(1)"

    revealedCard.innerHTML = `
    <div class="card-header">
      <h2 class="card-name">${randomCard.name}</h2>
      <div class="card-image">${randomCard.image}</div>
    </div>
    <div class="card-content">
      <p class="card-message">${randomCard.message}</p>
      <div class="card-wisdom">${randomCard.wisdom}</div>
    </div>
  `

    // Generate reading interpretation
    readingContent.innerHTML = `
    <p><strong>Interpretation:</strong> ${randomCard.interpretation}</p>
    <p><strong>Advice:</strong> ${randomCard.advice}</p>
    <p><strong>Lucky Algorithm:</strong> ${randomCard.luckyAlgorithm}</p>
  `

    cardReveal.classList.add("show")

    // Play mystical ambient sound after card is revealed
    setTimeout(() => {
      playSound("mysticalAmbient")
    }, 500)
  }, 1000)
}

// Draw again functionality with sound
function drawAgain() {
  const drawButton = document.getElementById("drawButton")
  const cardReveal = document.getElementById("cardReveal")
  const cards = document.querySelectorAll(".card-back")

  // Play button click sound
  playSound("buttonClick")

  // Hide revealed card
  cardReveal.classList.remove("show")

  // Reset cards and button
  setTimeout(() => {
    cards.forEach((card) => card.classList.remove("dimmed"))
    drawButton.classList.remove("dimmed")
  }, 600)
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  createStars()

  // Add sound to draw button
  document.getElementById("drawButton").addEventListener("click", drawCard)

  // Add sound to draw again button
  document.getElementById("drawAgainButton").addEventListener("click", drawAgain)

  // Add hover effects to cards with sound
  const cards = document.querySelectorAll(".card-back")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      if (!this.classList.contains("dimmed")) {
        this.style.boxShadow = "0 20px 40px rgba(156, 89, 182, 0.6)"
        // Subtle hover sound (optional)
        // playSound('buttonClick') // Uncomment if you want hover sounds
      }
    })

    card.addEventListener("mouseleave", function () {
      this.style.boxShadow = ""
    })
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


document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bgMusic")
  const musicToggle = document.getElementById("musicToggle")

  // Simpan preferensi user
  const isMuted = localStorage.getItem("bgMusicMuted") === "true"
  bgMusic.muted = isMuted
  musicToggle.textContent = isMuted ? "🔇" : "🔊"

  musicToggle.addEventListener("click", () => {
    bgMusic.muted = !bgMusic.muted
    localStorage.setItem("bgMusicMuted", bgMusic.muted)
    musicToggle.textContent = bgMusic.muted ? "🔇" : "🔊"
  })

  // Catch autoplay restriction
  bgMusic.play().catch((err) => {
    console.warn("Autoplay blocked. Waiting for user interaction.")
  })
})
