optimal-minds/
│── public/  
│ ├── assets/ # Static assets (images, icons, fonts)
│ │ ├── logo.png
│ │ ├── banner.jpg
│ │ ├── team/
│ │ ├── services/
│ │ ├── blog/
│ │ ├── testimonials/
│ ├── favicon.ico  
│ ├── robots.txt
│ ├── manifest.json
│
│── src/
│ │── assets/ # Importable assets
│ │── components/ # Reusable components
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── Button.jsx
│ │ ├── ServiceCard.jsx
│ │ ├── TestimonialCard.jsx
│ │ ├── DoctorProfileCard.jsx
│ │ ├── BlogCard.jsx
│ │ ├── ContactForm.jsx
│ │ ├── ScrollToTop.jsx
│ │ ├── animations/
│ │ │ ├── FadeIn.jsx
│ │ │ ├── SlideIn.jsx
│ │ │ ├── StaggerEffect.jsx
│ │
│ │── pages/ # Page components
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Services.jsx
│ │ ├── Conditions.jsx
│ │ ├── Neurodiversity.jsx
│ │ ├── CSR.jsx
│ │ ├── Blog.jsx
│ │ ├── BlogPost.jsx
│ │ ├── Contact.jsx
│ │ ├── Booking.jsx
│ │ ├── NotFound.jsx
│ │
│ │── layouts/ # Page layouts
│ │ ├── MainLayout.jsx
│ │
│ │── styles/ # SCSS styles
│ │ ├── global.scss
│ │ ├── variables.scss
│ │ ├── mixins.scss
│ │ ├── components/
│ │ │ ├── navbar.scss
│ │ │ ├── footer.scss
│ │ │ ├── button.scss
│ │ │ ├── cards.scss
│ │ ├── pages/
│ │ │ ├── home.scss
│ │ │ ├── about.scss
│ │ │ ├── services.scss
│ │ │ ├── conditions.scss
│ │ │ ├── blog.scss
│ │ │ ├── contact.scss
│ │
│ │── context/ # Global state management (if needed)
│ │ ├── AuthContext.jsx
│ │ ├── ThemeContext.jsx
│ │
│ │── hooks/ # Custom hooks
│ │ ├── useScrollAnimation.js
│ │ ├── useFormValidation.js
│ │
│ │── routes/ # Route management
│ │ ├── AppRoutes.jsx
│ │
│ │── data/ # Static data (JSON)
│ │ ├── services.json
│ │ ├── testimonials.json
│ │ ├── blogPosts.json
│ │
│ │── App.jsx # Main app entry
│ │── main.jsx # Vite main entry
│
│── .env # Environment variables
│── .gitignore
│── package.json
│── vite.config.js # Vite configuration
│── README.md
