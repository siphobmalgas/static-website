# Static Website

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?logo=github)](https://github.com/siphobmalgas/static-website)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

A modern, responsive static website built with pure HTML, CSS, and JavaScript. This repository serves as a foundation for creating fast, lightweight websites that can be easily deployed to various hosting platforms.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development](#development)
  - [Local Development](#local-development)
  - [Building for Production](#building-for-production)
- [Deployment](#deployment)
  - [GitHub Pages](#github-pages)
  - [Netlify](#netlify)
  - [Vercel](#vercel)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 About

This static website project is designed to be a clean, modern, and responsive web presence. Built with vanilla web technologies, it focuses on performance, accessibility, and user experience while maintaining simplicity and ease of maintenance.

### Key Goals
- **Performance**: Fast loading times with optimized assets
- **Accessibility**: WCAG 2.1 AA compliant design
- **Responsive**: Mobile-first approach with cross-device compatibility
- **SEO Friendly**: Semantic HTML and meta tag optimization
- **Modern Design**: Clean, contemporary aesthetic

## ✨ Features

- 📱 Fully responsive design
- ⚡ Fast loading times
- 🎨 Modern CSS with custom properties
- 📈 SEO optimized
- ♿ Accessibility focused
- 🔧 Easy to customize
- 📦 No build tools required
- 🚀 Ready for deployment

## 🚀 Getting Started

### Prerequisites

To work with this project, you'll need:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor or IDE (VS Code, Sublime Text, Atom, etc.)
- Basic knowledge of HTML, CSS, and JavaScript
- Git for version control

Optional but recommended:
- [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code
- [Node.js](https://nodejs.org/) for using npm packages (if needed)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/siphobmalgas/static-website.git
   cd static-website
   ```

2. **Open in your preferred editor**
   ```bash
   # For VS Code
   code .
   
   # Or open the folder in your preferred editor
   ```

3. **Start developing**
   - Open `index.html` in your browser, or
   - Use a local development server for better development experience

## 💻 Usage

### Basic Usage

1. **View the website**: Open `index.html` in your web browser
2. **Edit content**: Modify HTML files to update content
3. **Style changes**: Edit CSS files to customize appearance
4. **Add functionality**: Modify JavaScript files for interactive features

### Customization

- **Colors**: Update CSS custom properties in `:root` selector
- **Fonts**: Modify font imports and font-family declarations
- **Layout**: Adjust grid and flexbox properties
- **Content**: Replace placeholder content with your own

## 📁 Project Structure

```
static-website/
├── README.md              # Project documentation
├── index.html             # Main homepage (to be created)
├── css/                   # Stylesheets directory (to be created)
│   ├── style.css          # Main stylesheet
│   ├── normalize.css      # CSS reset/normalize
│   └── responsive.css     # Responsive design styles
├── js/                    # JavaScript files directory (to be created)
│   ├── main.js            # Main JavaScript file
│   └── utils.js           # Utility functions
├── images/                # Image assets directory (to be created)
│   ├── logo.png           # Site logo
│   └── favicon.ico        # Favicon
├── pages/                 # Additional pages directory (to be created)
│   ├── about.html         # About page
│   └── contact.html       # Contact page
└── assets/                # Other assets directory (to be created)
    ├── fonts/             # Custom fonts
    └── icons/             # Icon files
```

## 🛠 Development

### Local Development

1. **Using Live Server (Recommended)**
   ```bash
   # If using VS Code with Live Server extension
   # Right-click on index.html and select "Open with Live Server"
   ```

2. **Using Python's built-in server**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Then visit http://localhost:8000
   ```

3. **Using Node.js http-server**
   ```bash
   # Install globally
   npm install -g http-server
   
   # Run in project directory
   http-server
   ```

### Building for Production

For a static website, the files are already production-ready. However, you might want to:

1. **Optimize images**: Compress images for web
2. **Minify CSS/JS**: Remove comments and whitespace
3. **Validate HTML**: Check for HTML validation errors
4. **Test accessibility**: Run accessibility audits
5. **Performance testing**: Check loading times and optimization

### Code Quality

- **HTML Validation**: Use [W3C Markup Validator](https://validator.w3.org/)
- **CSS Validation**: Use [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- **Accessibility**: Use [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- **Performance**: Use [Google PageSpeed Insights](https://pagespeed.web.dev/)

## 🚀 Deployment

### GitHub Pages

1. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to Pages section
   - Select source branch (usually `main` or `gh-pages`)
   - Your site will be available at `https://siphobmalgas.github.io/static-website`

2. **Custom Domain** (optional):
   - Add a `CNAME` file with your domain name
   - Configure DNS settings with your domain provider

### Netlify

1. **Connect your repository**:
   - Sign up at [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Deploy automatically on each push

2. **Custom settings**:
   - Build command: (leave empty for static sites)
   - Publish directory: `/` (root directory)

### Vercel

1. **Deploy with Vercel**:
   - Sign up at [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Automatic deployments on each push

### Other Hosting Options

- **Firebase Hosting**: Google's hosting solution
- **Surge.sh**: Simple static hosting
- **AWS S3 + CloudFront**: Amazon's hosting solution
- **Traditional web hosting**: Upload files via FTP

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- Follow semantic HTML practices
- Use consistent coding style
- Test across different browsers
- Ensure accessibility compliance
- Add comments for complex code
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Project Maintainer**: [siphobmalgas](https://github.com/siphobmalgas)

- GitHub: [@siphobmalgas](https://github.com/siphobmalgas)
- Repository: [static-website](https://github.com/siphobmalgas/static-website)

## 🙏 Acknowledgments

- [Normalize.css](https://necolas.github.io/normalize.css/) for CSS reset
- [MDN Web Docs](https://developer.mozilla.org/) for web development resources
- [W3C](https://www.w3.org/) for web standards and validation tools

---

**Happy coding! 🎉**
