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

// Projects Data
const projectsData = [
  {
    id: 1,
    title: "Commodity Price Prediction",
    category: "ts",
    categoryName: "Time Series",
    tools: ["📈", "🛒", "🏝️"],
    description:
      "Time series forecasting project for daily food commodity prices across Indonesian provinces (Datavidia 9.0).",
    github: "https://github.com/Kelvinjojoo/Commodity-Price-Prediction-Datavidia-9-Elimination"
  },
  {
    id: 2,
    title: "Obesity Level Prediction",
    category: "web",
    categoryName: "Web / App Dev",
    tools: ["🍔", "🏋🏻", "🍴"],
    description:
      "Predicting obesity levels using FastAPI and Streamlit web app with BMI and activity data.",
    github: "https://github.com/Kelvinjojoo/Obesity-Level-Prediction"
  },
  {
    id: 3,
    title: "GAN for Pistachio Image Generation",
    category: "dl",
    categoryName: "Deep Learning",
    tools: ["🌰", "💻", "📷"],
    description:
      "Generative Adversarial Network to synthesize pistachio images for classification augmentation.",
    github: "https://github.com/Kelvinjojoo/GAN-for-Pistachio-Image-Generation"
  },
  {
    id: 4,
    title: "Denoising Pistachio Images",
    category: "dl",
    categoryName: "Deep Learning",
    tools: ["🌰", "📉", "📷"],
    description:
      "Image denoising using convolutional autoencoder on noisy pistachio dataset.",
    github: "https://github.com/Kelvinjojoo/Denoising-Pistachio-Images-Using-Convolutional-Autoencoder",
  },
  {
    id: 5,
    title: "Air Quality Forecasting",
    category: "ts",
    categoryName: "Time Series",
    tools: ["🌫️", "🔎", "📊"],
    description:
      "Air quality prediction using LSTM with historical time series data from pollution sensors.",
    github: "https://github.com/Kelvinjojoo/Air-Quality-Time-Series-Forecasting"
  },
  {
    id: 6,
    title: "Osteoarthritis Classification",
    category: "dl",
    categoryName: "Deep Learning",
    tools: ["🦴", "🖼️", "🩻"],
    description:
      "CNN-based classification model for detecting osteoarthritis from X-ray images.",
    github: "https://github.com/Kelvinjojoo/Osteoarthritis-Classification-Using-CNN"
  },
  {
    id: 7,
    title: "Team Productivity Forecast",
    category: "dl",
    categoryName: "Deep Learning",
    tools: ["👕", "🧵", "📈"],
    description:
      "Forecasting productivity of a clothing manufacturing team using deep learning sequential and functional model.",
    github: "https://github.com/Kelvinjojoo/Team-Productivity-from-clothing-manufacturing-company-"
  },
  {
    id: 8,
    title: "Netflix Trends Visualization",
    category: "viz",
    categoryName: "Visualization",
    tools: ["📺", "🍿", "📽️", "🎨"],
    description:
      "Interactive Tableau dashboard analyzing Netflix content trends across time, regions, and genres.",
    github: "https://github.com/Kelvinjojoo/Evolution-of-Netflix-Trends-in-Content-Overtime-",
    demo: "https://public.tableau.com/views/EvolutionofNetflixTrendsinContentOvertime/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    id: 9,
    title: "Amazon-like Website",
    category: "web",
    categoryName: "Web / App Dev",
    tools: ["📱", "🛍️", "💻", "🏬"],
    description:
      "E-commerce website replica built using HTML, CSS, and JavaScript with responsive layout.",
    github: "https://github.com/Kelvinjojoo/Amazon-Like-Website"
  },
  {
    id: 10,
    title: "Game Recommender System",
    category: "ml",
    categoryName: "Machine Learning",
    tools: ["🎮", "⭐", "🕹️"],
    description:
      "Personalized game recommendations using user ratings data and collaborative filtering.",
    github: "https://github.com/Kelvinjojoo/Game-Recommender-System-Machine-Learning"
  },
  {
    id: 11,
    title: "Cirrhosis Prediction",
    category: "ml",
    categoryName: "Machine Learning",
    tools: ["🧬", "📊", "🤖"],
    description:
      "Cirrhosis disease classification using machine learning on patient health records.",
    github: "https://github.com/Kelvinjojoo/Cirrhosis-Prediction-with-Machine-Learning"
  },
  {
    id: 12,
    title: "Travel Insurance Prediction",
    category: "ml",
    categoryName: "Machine Learning",
    tools: ["✈️", "🧳", "📋"],
    description:
      "Machine learning model to predict likelihood of travel insurance claim using booking and user data.",
    github: "https://github.com/Kelvinjojoo/Travel-Insurance-Classification-Machine-Learning"
  },
  {
    id: 13,
    title: "Expense Reimbursement System",
    category: "db",
    categoryName: "Database & Network",
    tools: ["💵", "🗃️", "🧾"],
    description:
      "Structured SQL database system for employee reimbursement workflow at PT Karya Bangun Indonesia.",
    github: "https://github.com/Kelvinjojoo/Expense-Reimbursement-Database-System"
  },
  {
    id: 14,
    title: "BINUS Network Design",
    category: "db",
    categoryName: "Database & Network",
    tools: ["🌐", "📡", "🔌", "🖥️"],
    description:
      "Cisco-based IP network design for BINUS University floors 3-5 with routing, subnetting, and web server.",
    github: "https://github.com/Kelvinjojoo/BINUS-Kemanggisan-Network-Infrastructure-Design"
  },
  {
    id: 15,
    title: "Netflix Recommender System",
    category: "ml",
    categoryName: "Machine Learning",
    tools: ["🎬", "⭐", "📊"],
    description:
      "Content-based movie recommendation system using TF-IDF and cosine similarity.",
    github: "https://github.com/Kelvinjojoo/Netflix-Recommender-System",
    demo: "https://netflix-recommenender-system.streamlit.app/",
  },
  {
    id: 16,
    title: "Loan Approval Predictor",
    category: "ml",
    categoryName: "Machine Learning",
    tools: ["🏦", "✅", "📋"],
    description:
      "An app that Predict loan approval using user financial data and classification models.",
    github: "https://github.com/Kelvinjojoo/Loan-Status-Approval-Prediction",
    demo: "https://loan-status-approval-prediction-kelvinjonathanyusach.streamlit.app/",
  }
];

// Generate Projects
function generateProjects(projects = projectsData) {
  const projectsGrid = document.getElementById("projectsGrid")
  projectsGrid.innerHTML = ""

  projects.forEach((project) => {
    const projectCard = document.createElement("div")
    projectCard.className = `project-card ${project.category}`
    projectCard.setAttribute("data-category", project.category)

    // Generate tools
    const toolsHTML = project.tools
      .map((tool) => `<span class="tool-icon">${tool}</span>`)
      .join("")

    // Generate project links conditionally
    let linksHTML = ""
    if (project.github && project.github !== "#") {
      linksHTML += `<a href="${project.github}" class="project-link github-link" target="_blank">GitHub</a>`
    }
    if (project.demo && project.demo !== "#") {
      linksHTML += `<a href="${project.demo}" class="project-link demo-link" target="_blank">Live Demo</a>`
    }

    projectCard.innerHTML = `
      <div class="project-header">
        <div>
          <h3 class="project-title">${project.title}</h3>
          <span class="project-category">${project.categoryName}</span>
        </div>
      </div>
      <div class="project-tools">
        ${toolsHTML}
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
        ${linksHTML}
      </div>
    `

    projectCard.addEventListener("click", () => {
      window.location.href = `portfolio-detail.html?id=${project.id}`
    })

    projectsGrid.appendChild(projectCard)
  })
}


// Filter Functionality
const filterButtons = document.querySelectorAll(".filter-btn")
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    button.classList.add("active")

    const filter = button.getAttribute("data-filter")

    if (filter === "all") {
      generateProjects(projectsData)
    } else {
      const filteredProjects = projectsData.filter((project) => project.category === filter)
      generateProjects(filteredProjects)
    }
  })
})

// Photo Slider Functionality
let currentSlide = 0
const slides = document.querySelectorAll(".slide")
const totalSlides = slides.length

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"))
  slides[index].classList.add("active")
}

function changeSlide(direction) {
  currentSlide += direction

  if (currentSlide >= totalSlides) {
    currentSlide = 0
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1
  }

  showSlide(currentSlide)
}

// Auto-play slider
setInterval(() => {
  changeSlide(1)
}, 4000)

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  generateProjects()

  // Add animation to project cards on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  })

  // Observe project cards for animation
  setTimeout(() => {
    const projectCards = document.querySelectorAll(".project-card")
    projectCards.forEach((card, index) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(50px)"
      card.style.transition = `all 0.6s ease ${index * 0.1}s`
      observer.observe(card)
    })
  }, 100)
})


const clickSound = new Audio('sound effect/start.mp3')
clickSound.volume = 0.6

document.addEventListener("DOMContentLoaded", () => {
  // Gabungkan semua elemen yang pakai class .nav-item atau .nav-item2
  const navItems = document.querySelectorAll(".filter-btn")

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      clickSound.currentTime = 0
      clickSound.play().catch(e => console.log("Audio play error (click):", e))
    })
  })
})
