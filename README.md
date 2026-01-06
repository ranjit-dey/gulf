# Gulf

A modern, animated corporate website showcasing an organization's leadership, financial performance, global partnerships, and board of directors. Built with React, Vite, and cutting-edge animation libraries.

## Features

-   **Responsive Design**: Fully responsive layout optimized for all screen sizes using Tailwind CSS
-   **Smooth Animations**: Professional animations powered by GSAP and Framer Motion
-   **Hero Section**: Eye-catching hero with animated text and image gallery
-   **Leadership Showcase**: Display of leadership team with organizational hierarchy
-   **Board of Directors**: Interactive board member showcase with detailed profiles and roles
-   **Financial Dashboard**: Dynamic carousel displaying key financial metrics
-   **Global Partnerships**: Logo marquee featuring partner organizations and brands
-   **Interactive Navigation**: Smooth navbar with scroll-aware functionality
-   **Performance Optimized**: Built with Vite for fast development and production builds

## Tech Stack

-   **Frontend Framework**: React 19
-   **Build Tool**: Vite 7
-   **Styling**: Tailwind CSS 4 with Vite support
-   **Animations**: GSAP 3 (GreenSock Animation Platform)
-   **Icons**: Lucide React
-   **Code Quality**: ESLint 9
-   **Node Module**: ES6 Modules

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ranjit-dey/gulf.git
    cd gulf
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build

Create a production-ready build:

```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Project Structure

```
gulf/
├── src/
│   ├── components/
│   │   ├── About.jsx              # About section with GSAP animations
│   │   ├── Anim.jsx               # Animation component
│   │   ├── BoardOfDirectors.jsx   # Board members showcase
│   │   ├── FinancialDashboard.jsx # Financial metrics carousel
│   │   ├── Footer.jsx             # Footer component
│   │   ├── GlobalPartnership.jsx  # Partner logos display
│   │   ├── Hero.jsx               # Hero section
│   │   ├── HeroMomentum.jsx       # Hero momentum animation
│   │   ├── Leadership.jsx         # Leadership team display
│   │   ├── LogoMarquee.jsx        # Animated logo carousel
│   │   └── Navbar.jsx             # Navigation bar
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   ├── App.css                    # App styles
│   └── index.css                  # Global styles
├── public/                        # Static assets (images, logos)
├── package.json                   # Project dependencies
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint configuration
├── index.html                     # HTML entry point
└── README.md                      # This file
```

## Key Components

### Hero Section

Animated hero landing page with dynamic image positioning and smooth text entrance animations powered by GSAP.

### Board of Directors

Interactive showcase of board members with profile images, roles, and organizational tags. Features smooth scroll-triggered animations.

### Financial Dashboard

Carousel component displaying key financial metrics with navigation controls. Responsive card layout that adjusts based on screen size.

### Global Partnerships

Animated logo marquee featuring partner brands and organizations with continuous scrolling effect.

### Leadership Section

Dedicated section highlighting the organization's leadership team with professional presentation.

## Animation Libraries

-   **GSAP**: Used for scroll-triggered animations, timeline-based animations, and complex motion sequences
-   **CSS Animations**: Tailwind CSS for utility-based animations and transitions

## Styling

The project uses **Tailwind CSS 4** with Vite integration for efficient utility-first styling. Custom CSS files are included for component-specific styling.

## Browser Support

Works on all modern browsers that support ES6 modules and CSS Grid/Flexbox.



## Made by

Made with `cretivity` by [ranjit](https://ranjitdey.vercel.app)
