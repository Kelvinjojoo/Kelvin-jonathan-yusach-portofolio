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

// Project Details Data
const projectDetails = {
  1: {
    title: "Commodity Price Prediction",
    category: "Time Series",
    tools: ["📈", "🛒", "🏝️"],
    description:
    "Time series forecasting project for food commodity prices across 34 Indonesian provinces, submitted for Datavidia 9.0 Preliminary Round (2025). Leveraged LSTM and external macroeconomic indicators (Google Trends, exchange rates, global prices) to improve accuracy. Achieved strong performance with a Private MAPE Score of 0.07445 and Public MAPE Score of 0.07471.",
    whatLearned: [
      "Worked with large-scale multivariate time series data",
      "Integrated and cleaned complex datasets from various sources: food prices, Google Trends, currency exchange rates, and global commodity prices",
      "Implemented advanced data imputation techniques using predictive models instead of relying on simple median or mode values",
      "Conducted extensive trial-and-error to design and optimize deep learning models with LSTM, including tuning lookback window, epochs, and batch size",
      "Improved forecasting accuracy by reducing MAPE through iterative modeling and detailed error analysis",
    ],
    techStack: [
      "Python for data preprocessing and modeling",
      "Pandas & NumPy for handling and transforming large datasets",
      "Matplotlib & Seaborn for exploratory data visualization",
      "Scikit-learn for evaluation metrics and imputation modeling",
      "Keras (TensorFlow backend) for building and training LSTM models",
      "CSV files from various sources as structured input data",
    ],
    image: "images/Commodity Price Prediction.png",
    github: "https://github.com/Kelvinjojoo/Commodity-Price-Prediction-Datavidia-9-Elimination"
  },
  2: {
    title: "Obesity Level Prediction",
    category: "Web / App Dev",
    tools: ["🍔", "🏋🏻", "🍴"],
    description:
      "This app predicts an individual's obesity level based on lifestyle and physiological attributes. It combines machine learning with a user-friendly frontend and a RESTful backend. Predicting obesity levels using FastAPI and Streamlit web app with BMI and activity data.",
    whatLearned: [
      "Designed end-to-end workflow from model training to full-stack deployment",
      "Built interactive frontend using Streamlit for real-time user input and prediction display",
      "Created a RESTful API using FastAPI to serve ML predictions",
      "Managed virtual environments and package dependencies for smooth local deployment",
      "Integrated pickle-based model serving into both backend and frontend",
      "Practiced modular project structure for maintainability and scalability"
    ],
    techStack: [
      "Python for data analysis, model training, and API development",
      "Random Forest & XGBoost for model building",
      "FastAPI for building high-performance REST API",
      "Streamlit for interactive web frontend",
      "Pandas, NumPy, Matplotlib for EDA and preprocessing",
      "Joblib & Pickle for model serialization",
      "Virtualenv & pip for environment management"
    ],
    image: "images/Obesity Level Prediction.png",
    github: "https://github.com/Kelvinjojoo/Obesity-Level-Prediction"
  },
  3: {
    title: "GAN for Pistachio Image Generation",
    category: "Deep Learning",
    tools: ["🌰", "💻", "📷"],
    description:
        "A generative deep learning project that leverages GANs to synthesize realistic pistachio images. It focuses on improving image quality through architectural experimentation and evaluation using FID scores. The modified model achieved a lower FID score of 78.52 compared to the baseline's 89.66 — a significant improvement of 11.14 points in image realism.",
    whatLearned: [
      "Developed a custom GAN architecture in TensorFlow and Keras, training a generator and discriminator adversarially on pistachio images to synthesize realistic outputs.",
      "Explored various design iterations between baseline and modified generators, applying transposed convolutions, batch normalization, and ReLU activations to stabilize learning.",
      "Faced frequent instability and mode collapse during training, which led to multiple rounds of trial-and-error in tuning architectures, hyperparameters, and training strategies.",
      "Persistently optimized the model by analyzing failures and refining key layers, which ultimately resulted in a significant drop in FID score and visual improvements.",
      "Learned to critically evaluate image realism using FID as a guiding metric, balancing theory, experimentation, and intuition throughout the project."
    ],
    techStack: [
      "Python with TensorFlow and Keras for model implementation",
      "NumPy and OpenCV for image processing and manipulation",
      "Matplotlib and Seaborn for training visualization and loss curves",
      "Custom CNN layers for discriminator and generator",
      "Frechet Inception Distance (FID) for image quality evaluation"
    ],
    image: "images/GAN for Pistachio Image Generation.png",
    github: "https://github.com/Kelvinjojoo/GAN-for-Pistachio-Image-Generation"
  },
  4: {
    title: "Denoising Pistachio Images",
    category: "Deep Learning",
    tools: ["🌰", "📉", "📷"],
    description:
      "Implemented a convolutional autoencoder to denoise pistachio images by reconstructing clean outputs from noisy inputs. Through architectural refinement, the modified model achieved a higher SSIM score (0.9579) compared to the baseline (0.9534), resulting in visibly cleaner and more structurally accurate image reconstructions.",
    whatLearned: [
        "Built and trained a convolutional autoencoder for image denoising using noisy pistachio data",
        "Faced challenges in tuning the balance between reconstruction sharpness and overfitting, which led to several iterations of architectural tweaks",
        "Experimented with different encoder-decoder depths, activation functions, and filter sizes to enhance structural recovery",
        "Monitored SSIM to track subtle visual improvements across versions, learning how small design changes affect image quality",
        "Improved model performance through persistent trial-and-error, ultimately achieving better SSIM with a more efficient design"
      ],
    techStack: [
      "Python with TensorFlow/Keras for model building",
      "NumPy and Matplotlib for data manipulation and visualization",
      "Mean Squared Error (MSE) as loss function",
      "SSIM (Structural Similarity Index) as evaluation metric",
    ],
    image: "images/Denoising Pistachio Images.png",
    github: "https://github.com/Kelvinjojoo/Denoising-Pistachio-Images-Using-Convolutional-Autoencoder"
  },
  5: {
    title: "Air Quality Forecasting",
    category: "Time Series",
    tools: ["🌫️", "🔎", "📊"],
    description:
      "A time series forecasting project to predict future air quality levels using LSTM-based deep learning models. The modified model achieved improved performance across all key metrics, reducing MSE and MAE, lowering MAPE to 1.49%, and increasing R² score from 0.9345 to 0.9410 - indicating better predictive accuracy and model fit.",
    whatLearned: [
      "Handled multivariate time series data with environmental indicators like PM2.5, NO2, and O3",
      "Faced challenges in designing robust forecasting pipelines and dealing with noisy air quality data",
      "Iteratively tuned LSTM architecture, lookback windows, and batch sizes through trial-and-error",
      "Engineered time-based features to improve learning of seasonal patterns and temporal dependencies",
      "Analyzed evaluation metrics (MAE, MAPE, RMSE, R²) critically to guide model improvements and validate effectiveness"
    ],
    techStack: [
      "Python with TensorFlow/Keras for deep learning modeling",
      "Pandas and NumPy for time series manipulation and cleaning",
      "Matplotlib and Seaborn for EDA and forecasting visualization",
      "Scikit-learn for evaluation metrics",
    ],
    image: "images/Air Quality Forecasting.png",
    github: "https://github.com/Kelvinjojoo/Air-Quality-Time-Series-Forecasting"
  },
  6: {
    title: "Osteoarthritis Classification",
    category: "Deep Learning",
    tools: ["🦴", "🖼️", "🩻"],
    description:
       "A deep learning project that classifies osteoarthritis severity levels from X-ray images using a Convolutional Neural Network (CNN). After multiple architectural refinements and augmentation strategies, the model achieved strong classification performance with high precision and recall, offering consistent assistance for early diagnosis.",
    whatLearned: [
      "Built a CNN architecture tailored for medical image classification, focusing on multiclass severity prediction",
      "Faced prolonged training time due to large image sizes and deep network depth, requiring resource management and optimization",
      "Conducted numerous tuning experiments on learning rates, convolutional blocks, and data augmentation strategies to improve generalization",
      "Learned to interpret confusion matrices and precision-recall trade-offs to assess real-world diagnostic reliability",
      "Gained patience and resilience by iterating through failed models and gradually improving classification metrics"
    ],
    techStack: [
      "Python with TensorFlow/Keras for deep learning development",
      "Matplotlib and Seaborn for loss/accuracy curve visualization",
      "Scikit-learn for classification reports and metrics"
    ],
    image: "images/Osteoarthritis Classification.png",
    github: "https://github.com/Kelvinjojoo/Osteoarthritis-Classification-Using-CNN"
  },
  7: {
    title: "Team Productivity Forecast",
    category: "Deep Learning",
    tools: ["👕", "🧵", "📈"],
    description:
      "A deep learning project aimed at forecasting team productivity in a clothing manufacturing company using real-world operational data. By comparing sequential and functional model architectures, the optimized model achieved high predictive accuracy with a low MAE and improved R² score — supporting better production planning and efficiency.",
    whatLearned: [
      "Faced challenges cleaning inconsistent production data, including handling missing values and feature scaling",
      "Explored the trade-offs between sequential and functional models, adjusting architectures based on complexity and interpretability",
      "Performed extensive hyperparameter tuning (activation functions, layer sizes, dropout rates) to mitigate underfitting and overfitting",
    ],
    techStack: [
      "Python with TensorFlow/Keras for model development",
      "Pandas & NumPy for preprocessing and feature engineering",
      "Matplotlib & Seaborn for evaluation and result visualization",
      "Scikit-learn for metrics and data splitting",
    ],
    image: "images/Team Productivity Forecast.png",
    github: "https://github.com/Kelvinjojoo/Team-Productivity-from-clothing-manufacturing-company-"
  },
  8: {
    title: "Netflix Trends Visualization",
    category: "Visualization",
    tools: ["📺", "🍿", "📽️", "🎨"],
    description:
      "An interactive data visualization project exploring the evolution of Netflix's content over time, across regions, content types, and genres.",
    whatLearned: [
      "Designed visually engaging and informative dashboards",
      "Applied user-centered design principles for interactivity and clarity",
      "Improved public speaking and storytelling through dashboard presentations",
      "Practiced data preprocessing and transformation for analysis",
      "Communicated complex insights to non-technical audiences"
    ],
    techStack: [
      "Tableau for interactive data visualization",
      "Excel / CSV for Netflix data preprocessing"
    ],
    image: "images/Netflix Trends Visualization.png",
    github: "https://github.com/Kelvinjojoo/Evolution-of-Netflix-Trends-in-Content-Overtime-",
    demo: "https://public.tableau.com/views/EvolutionofNetflixTrendsinContentOvertime/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  9: {
    title: "Amazon-like Website",
    category: "Web / App Dev",
    tools: ["📱", "🛍️", "💻", "🏬"],
    description:
      "A simplified online shopping platform that simulates real-world e-commerce experiences, from product browsing to checkout and delivery scheduling.",
    whatLearned: [
      "Improved frontend-backend integration and architecture",
      "Developed realistic user flows for e-commerce scenarios",
      "Enhanced debugging and problem-solving through iterative testing",
      "Learned to design responsive interfaces with real user behavior in mind",
      "Built discipline and patience in full-stack development"
    ],
    techStack: [
      "HTML/CSS for layout and styling",
      "JavaScript for frontend interactivity",
      "Custom backend (e.g., Node.js or Flask) for processing logic",
      "Git & GitHub for version control and collaboration"
    ],
    image: "images/Amazon-like Website.png",
    github: "https://github.com/Kelvinjojoo/Amazon-Like-Website"
  },
  10: {
    title: "Game Recommender System",
    category: "Machine Learning",
    tools: ["🎮", "⭐", "🕹️"],
    description:
      "A personalized video game recommender system built using collaborative filtering to suggest games based on user preferences and similarity.",
    whatLearned: [
      "Learned how to build user-item rating matrices",
      "Implemented cosine similarity for user-based filtering",
      "Faced lots of trial-and-error moments tuning sparse data",
      "Gained intuition on cold-start problems and data sparsity"
    ],
    techStack: [
      "Python for model development",
      "Pandas & NumPy for data processing",
      "Scikit-learn for similarity calculation",
      "Matplotlib/Seaborn for basic visualization"
    ],
    image: "images/Game Recommender System.png",
    github: "https://github.com/Kelvinjojoo/Game-Recommender-System-Machine-Learning"
  },
  11: {
    title: "Cirrhosis Prediction",
    category: "Machine Learning",
    tools: ["🧬", "📊", "🤖"],
    description:
      "A machine learning project to predict cirrhosis progression stages using clinical data. The workflow includes preprocessing, model training, evaluation, and feature importance analysis.",
    whatLearned: [
      "Gained hands-on experience cleaning messy real-world medical data",
      "Struggled through data imbalance and fixed it with oversampling",
      "Understood clinical metrics and how they impact prediction",
      "Learned how tuning impacts performance, especially in medical contexts",
      "Appreciated the critical balance between precision and recall in health data"
    ],
    techStack: [
      "Python with Jupyter Notebook",
      "Pandas & NumPy for data manipulation",
      "Scikit-learn & XGBoost for model training and evaluation",
      "Matplotlib & Seaborn for data visualization"
    ],
    image: "images/Cirrhosis Prediction.png",
    github: "https://github.com/Kelvinjojoo/Cirrhosis-Prediction-with-Machine-Learning"
  },
  12: {
    title: "Travel Insurance Prediction",
    category: "Machine Learning",
    tools: ["✈️", "🧳", "📋"],
    description:
      "A classification project that predicts whether a customer will purchase travel insurance based on demographic and trip-related data. Achieved solid model performance with CatBoost (72% accuracy), showing potential for real-world application in the insurance industry to boost efficiency and reduce human error.",
    whatLearned: [
      "Built a full ML pipeline from messy dataset to deployment-ready model",
      "Faced struggles with imbalanced classes and tackled it through tuning",
      "Learned CatBoost's strengths for categorical-heavy data",
      "Improved model evaluation and interpretation skills"
    ],
    techStack: [
      "Python with Jupyter Notebook",
      "Pandas & NumPy for data manipulation",
      "Scikit-learn & CatBoost for modeling",
      "Matplotlib & Seaborn for result visualization"
    ],
    image: "images/Travel Insurance Prediction.png",
    github: "https://github.com/Kelvinjojoo/Travel-Insurance-Classification-Machine-Learning"
  },
  13: {
    title: "Expense Reimbursement System",
    category: "Database & Network",
    tools: ["💵", "🗃️", "🧾"],
    description:
      "A relational database project simulating a real-world company reimbursement workflow. Designed for PT Karya Bangun Indonesia to track employees, forms, itemized expenses, approvals, and transactions using SQL Server.",
    whatLearned: [
      "Designed normalized relational schemas from a real document",
      "Handled data transformation from Excel to SQL (including tricky date formats)",
      "Built many-to-many relationships using mapping tables",
      "Faced edge cases in modeling approvals and item grouping",
      "Learned how to translate business requirements into database logic"
    ],
    techStack: [
      "SQL Server (T-SQL) for schema design and querying",
      "Microsoft Excel for data sourcing and preprocessing",
      "Microsoft Word for form structure references",
      "Manual ETL and ID mapping for consistency"
    ],
    image: "images/Expense Reimbursement System.png",
    github: "https://github.com/Kelvinjojoo/Expense-Reimbursement-Database-System"
  },
  14: {
    title: "BINUS Network Infrastructure Design",
    category: "Database & Network",
    tools: ["🌐", "📡", "🔌", "🖥️"],
    description:
      "A full-scale campus network infrastructure design for BINUS University Kemanggisan (3rd-5th floors), using Cisco technologies and static routing. The system supports classroom-to-server communication with zero packet loss and efficient IP allocation.",
    whatLearned: [
      "Designed hierarchical and scalable topologies for large-scale buildings",
      "Practiced real subnetting and static routing across multiple routers",
      "Tested and validated LAN connectivity with 0% packet loss",
      "Simulated realistic infrastructure budgeting and device planning",
      "Learned teamwork and technical communication in group-based deployments"
    ],
    techStack: [
      "Cisco Packet Tracer & MikroTik devices for simulation",
      "Manual IP subnetting and routing table design",
      "Dell PowerEdge server setup for web access",
      "Cat6 Ethernet cabling infrastructure",
      "PDF documentation with AoL report and diagrams"
    ],
    image: "images/BINUS Network Design.png",
    github: "https://github.com/Kelvinjojoo/BINUS-Kemanggisan-Network-Infrastructure-Design"
  },
  15: {
    title: "Netflix Recommender System",
    category: "Machine Learning",
    tools: ["🎬", "⭐", "📊"],
    description:
      "A content-based movie recommender system built using metadata from Netflix titles. Uses TF-IDF vectorization and cosine similarity to suggest the 5 most similar movies based on user input. Deployed with Streamlit for live interaction.",
    whatLearned: [
      "Combined multiple metadata fields into a unified recommendation logic",
      "Explored the mechanics of cosine similarity and vector space models",
      "Faced deployment issues with pickled models and solved them via environment setup",
      "Improved understanding of content-based filtering vs collaborative filtering",
      "Learned to build fast, interactive UIs using Streamlit"
    ],
    techStack: [
      "Python with Pandas & Scikit-learn for data processing and modeling",
      "TF-IDF Vectorizer & Cosine Similarity for recommendations",
      "Streamlit for live web app deployment",
      "Pickle for saving similarity matrix"
    ],
    image: "images/Netflix Recommender System.png",
    github: "https://github.com/Kelvinjojoo/Netflix-Recommender-System",
    demo: "https://netflix-recommenender-system.streamlit.app/"
  },
  16: {
    title: "Loan Approval Predictor",
    category: "Machine Learning",
    tools: ["🏦", "✅", "📋"],
    description:
      "A Streamlit web app that predicts loan approval status based on user input like income, credit history, education, and loan intent. Built as a midterm project to demonstrate real-world classification using XGBoost with interactive UI.",
    whatLearned: [
      "Built a real-time prediction pipeline with live form inputs",
      "Handled diverse features including categorical, numerical, and encoded data",
      "Faced deployment bugs with model loading and fixed them using version control",
      "Learned to balance model performance with user-friendly input forms",
      "Improved model explainability by mapping inputs to real-world decisions"
    ],
    techStack: [
      "Python with Pandas, NumPy for data processing",
      "Scikit-learn & XGBoost for training and evaluation",
      "Streamlit for web interface and deployment",
      "Pickle for model saving and loading"
    ],
    image: "images/Loan Approval Predictor.png",
    github: "https://github.com/Kelvinjojoo/Loan-Status-Approval-Prediction",
    demo: "https://loan-status-approval-prediction-kelvinjonathanyusach.streamlit.app/"
  }
}

// Get project ID from URL
function getProjectId() {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get("id") || "1"
}

// Generate project detail content
function generateProjectDetail() {
  const projectId = getProjectId();
  const project = projectDetails[projectId];
  const container = document.getElementById("projectDetail");

  if (!project) {
    container.innerHTML = `
      <div class="project-header">
        <h1 class="project-title">Project Not Found</h1>
        <p class="project-description">Maaf, project yang Anda cari tidak ditemukan.</p>
        <div class="project-links">
          <a href="portfolio.html" class="project-link github-link">Back to Portfolio</a>
        </div>
      </div>`;
    return;
  }

  // Build optional links conditionally
  let linksHTML = "";
  if (project.github && project.github !== "#") {
    linksHTML += `
      <a href="${project.github}" class="project-link github-link" target="_blank">
        View on GitHub
      </a>`;
  }
  if (project.demo && project.demo !== "#") {
    linksHTML += `
      <a href="${project.demo}" class="project-link demo-link" target="_blank">
        Live Demo
      </a>`;
  }

  container.innerHTML = `
    <div class="project-header">
      <h1 class="project-title">${project.title}</h1>
      <span class="project-category">${project.category}</span>
      <div class="project-tools">
        ${project.tools.map((tool) => `<span class="tool-icon">${tool}</span>`).join("")}
      </div>
      <p class="project-description">${project.description}</p>
    </div>
    
    <div class="project-image">
       ${project.image ? `<img src="${project.image}" alt="Screenshot of ${project.title}" class="screenshot-image project-image">` : `<span>📊 Project Screenshot/Demo akan ditampilkan di sini</span>`}
    </div>
    
    <div class="project-content">
      <div class="content-section">
        <h2 class="section-title">🎯 What I Learned</h2>
        <div class="section-content">
          <ul>
            ${project.whatLearned.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
      
      <div class="content-section">
        <h2 class="section-title">🛠️ Tech Stack</h2>
        <div class="section-content">
          <ul>
            ${project.techStack.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>

    ${linksHTML ? `<div class="project-links">${linksHTML}</div>` : ""}
  `;

  generateFloatingIcons(project);
}

// Initialize page
document.addEventListener("DOMContentLoaded", generateProjectDetail)

function generateFloatingIcons(project) {
  const container = document.getElementById("floatingIconsContainer");
  if (!container || !project.tools) return;

  container.innerHTML = "";

  const repeatCount = 4; 
  const allEmojis = [];

  // Gandakan emoji secara acak
  for (let i = 0; i < repeatCount; i++) {
    project.tools.forEach((emoji) => {
      allEmojis.push(emoji);
    });
  }

  allEmojis.forEach((emoji, index) => {
    const span = document.createElement("div");
    span.classList.add("floating-element", `floating-${index % 6}`); // gunakan looping posisi
    span.style.top = `${Math.random() * 80 + 10}%`;
    span.style.left = `${Math.random() * 90 + 5}%`;
    span.style.fontSize = `${1.5 + Math.random()}rem`;
    span.style.animationDelay = `${Math.random() * 6}s`;
    span.textContent = emoji;
    container.appendChild(span);
  });
}
