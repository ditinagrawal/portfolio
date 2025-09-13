# Portfolio - Ditin Agrawal

![Portfolio Preview](./public/og.webp)

A modern, responsive portfolio website built with Next.js 15, showcasing my work as a Software Engineer and Full Stack Developer. This portfolio features a clean design with smooth animations and comprehensive sections including projects, services, testimonials, and contact information.

## 🚀 Live Demo

Visit the live portfolio at: [https://portfolio.ditin.in](https://portfolio.ditin.in)

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Interactive Components**: Smooth animations and transitions using Motion
- **Contact Form**: Functional contact form for inquiries
- **Project Showcase**: Detailed project presentations with live links
- **Services Section**: Comprehensive overview of offered services
- **Testimonials**: Client feedback and recommendations
- **Social Links**: Easy access to professional social media profiles

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Icons**: Tabler Icons & Lucide React
- **Animations**: Motion (Framer Motion)
- **Package Manager**: Bun
- **Linting**: ESLint
- **Code Formatting**: Prettier

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── home/             # Home page sections
│   │   ├── about/        # About section
│   │   ├── contact/      # Contact form
│   │   ├── experience/   # Experience timeline
│   │   ├── footer/       # Footer component
│   │   ├── hero/         # Hero section
│   │   ├── navbar/       # Navigation bar
│   │   ├── projects/     # Projects showcase
│   │   ├── services/     # Services offered
│   │   └── testimonials/ # Client testimonials
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── assets/          # Images and media
│   ├── avatar.jpg       # Profile picture
│   ├── og.webp          # Open Graph image
│   └── manifest.json    # PWA manifest
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ditinagrawal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install
   ```

3. **Run the development server**

   ```bash
   # Using Bun
   bun dev

   # Or using npm
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📝 Customization

### Personal Information

Update the following files with your information:

- `app/layout.tsx` - Update metadata, title, and description
- `components/home/about/index.tsx` - Update about section content
- `components/home/experience/index.tsx` - Update work experience
- `components/home/projects/projects.json` - Add your projects
- `components/home/services/services.json` - Update services offered
- `components/home/testimonials/testimonials.json` - Add client testimonials
- `public/avatar.jpg` - Replace with your profile picture
- `public/og.webp` - Update Open Graph image

### Styling

- Modify `app/globals.css` for global styles
- Update Tailwind classes in components for custom styling
- Customize colors and themes in `tailwind.config.js`

### Content Management

All content is managed through JSON files in the respective component directories, making it easy to update without touching the code.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 PWA Support

The portfolio includes PWA support with:

- Web App Manifest (`public/manifest.json`)
- Service Worker capabilities
- Offline functionality
- Install prompt for mobile devices

## 🔧 Available Scripts

- `bun dev` / `npm run dev` - Start development server
- `bun build` / `npm run build` - Build for production
- `bun start` / `npm start` - Start production server
- `bun lint` / `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ditinagrawal/portfolio/issues).

## 📞 Contact

**Ditin Agrawal**

- Linktree: [https://ditin.in](https://ditin.in)
- Portfolio: [https://portfolio.ditin.in](https://portfolio.ditin.in)
- Email: [Contact via portfolio](https://portfolio.ditin.in#contact)
- LinkedIn: [Connect with me](https://linkedin.com/in/ditinagrawal)
- Twitter: [@ditinagrawal](https://twitter.com/ditinagrawal)

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!
