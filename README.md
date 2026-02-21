
Ambika Prasad Parida - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React to showcase professional experience, skills, projects, and achievements.
🚀 Live Demo

https://portfolio.parida.in

View Portfolio

✨ Features

    Responsive Design - Optimized for all devices (mobile, tablet, desktop)

    Dark Mode Toggle - Seamless switching between light and dark themes

    Interactive UI - Smooth animations with Framer Motion

    Particle Effects - Subtle background animations

    Project Showcase - Categorized professional and personal projects

    Skills Visualization - Progress bars for technical skills

    Testimonials - Client and colleague recommendations

    Contact Form - Integrated with Formspree

    Cookie Consent - GDPR compliant cookie banner

    PDF Resume Download - One-click resume download

    SEO Optimized - Meta tags for better search visibility

🛠️ Technologies Used
Frontend

    React 18 - UI library

    React DOM - DOM rendering

    Framer Motion - Animations

    AOS - Scroll animations

    Boxicons - Icon library

Styling

    CSS3 - Custom styles with CSS variables

    Google Fonts - Poppins font family

    Responsive Design - Mobile-first approach

Build Tools

    React Scripts - Build and development

    ESLint - Code linting

    Netlify - Hosting and deployment

External Services

    Formspree - Contact form handling

    Google Analytics - Visitor tracking (optional)

    Particles.js - Background effects

📁 Project Structure
text

ambika-portfolio/
├── public/
│   ├── assets/
│   │   ├── img/          # Profile and project images
│   │   └── pdf/          # Resume PDF
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Achievements/
│   │   ├── Analytics/
│   │   ├── Contact/
│   │   ├── CookieConsent/
│   │   ├── DarkModeToggle/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Process/
│   │   ├── Projects/
│   │   ├── Resume/
│   │   ├── Skills/
│   │   └── Testimonials/
│   ├── context/
│   │   └── DarkModeContext.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env
├── netlify.toml
├── package.json
└── README.md

🚦 Getting Started
Prerequisites

    Node.js (v14 or higher)

    npm or yarn

Installation

    Clone the repository

bash

git clone https://github.com/amk-18/ambika-portfolio.git
cd ambika-portfolio

    Install dependencies

bash

npm install
# or
yarn install

    Start the development server

bash

npm start
# or
yarn start

    Open http://localhost:3000 to view it in your browser

📜 Available Scripts

In the project directory, you can run:
npm start

Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.
npm test

Launches the test runner in interactive watch mode.
npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for best performance.
npm run eject

Note: this is a one-way operation. Once you eject, you can't go back!
🌙 Dark Mode

The portfolio includes a fully implemented dark mode feature:

    Toggle button in the header with sun/moon icons

    Persists user preference in localStorage

    Respects system dark mode preference on first visit

    Smooth CSS transitions between themes

    All components adapt with dark mode styles

📱 Mobile Responsiveness

Fully optimized for mobile devices:

    Hamburger menu for navigation

    Touch-friendly buttons (44px minimum tap target)

    Responsive typography using clamp()

    Flexible grid layouts

    Optimized images for different screen sizes

    Viewport meta tag for proper scaling

🚀 Deployment

The site is configured for easy deployment on Netlify:
Netlify Configuration (netlify.toml)
toml

[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  CI = "false"

Environment Variables

Create a .env file for local development:
text

CI=false

Deploy to Netlify

    Push code to GitHub

    Connect repository to Netlify

    Netlify automatically detects build settings

    Site deploys with every push to main branch

🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

    Fork the repository

    Create your feature branch (git checkout -b feature/AmazingFeature)

    Commit your changes (git commit -m 'Add some AmazingFeature')

    Push to the branch (git push origin feature/AmazingFeature)

    Open a Pull Request

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
👨‍💻 Author

Ambika Prasad Parida

    Role: Full Stack Developer

    Experience: 3+ years

    Specialization: Java, Spring Boot, Microservices, AWS

📞 Contact Information

    Email: ambikaparida08@gmail.com

    Phone: +91 7327838578

    LinkedIn: Ambika Prasad Parida

    GitHub: @amk-18

    HackerRank: @ambikaparida08

    WhatsApp: +91 7327838578

    Portfolio: portfolio.parida.in

🏢 Current Position

Software Engineer at Ikontel Solutions Pvt. Ltd., Bangalore
🎓 Education

B.Tech - Gandhi Engineering College, Bhubaneswar (2017-2021)
