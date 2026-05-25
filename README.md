# Noise & Waves

Modern landing page for innovative audio products and modular synthesizers.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx         # Navigation header
│   ├── Hero.jsx           # Hero section
│   ├── Features.jsx       # Features showcase
│   └── Footer.jsx         # Footer with links
├── App.jsx                # Main component
├── main.jsx               # Entry point
└── index.css              # Tailwind CSS styles

vite.config.js            # Vite configuration
tailwind.config.js        # Tailwind CSS configuration
postcss.config.js         # PostCSS configuration
```

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The site will be available at \`http://localhost:5173/\`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

This generates an optimized build in the \`dist/\` folder.

### Preview Build

\`\`\`bash
npm run preview
\`\`\`

## Technology Stack

- **Vite** - Next generation frontend build tool
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations

## Customization Guide

### Colors
Edit \`tailwind.config.js\` to customize the color palette. The project includes a \`dark\` color scale that can be extended.

### Components
Each component in \`src/components/\` is self-contained and can be easily modified:
- \`Header.jsx\` - Change navigation links and branding
- \`Hero.jsx\` - Update headline, description, and CTA buttons
- \`Features.jsx\` - Modify feature cards (edit the \`features\` array)
- \`Footer.jsx\` - Update footer links and social media

### Styles
- Global styles and custom components are in \`src/index.css\`
- Use Tailwind CSS utility classes in your JSX
- Define custom classes in the \`@layer components\` section of \`index.css\`

## Deployment to GitHub Pages

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. Commit changes:
\`\`\`bash
git add .
git commit -m "Deploy to GitHub Pages"
\`\`\`

3. Push to main branch:
\`\`\`bash
git push origin main
\`\`\`

GitHub Pages will automatically deploy the contents of the \`dist/\` folder.

## Next Steps

- [ ] Add more sections (team, testimonials, blog)
- [ ] Create product showcase pages
- [ ] Add contact form
- [ ] Implement dark mode toggle
- [ ] Add animations and transitions
- [ ] Setup analytics
- [ ] Create blog section

## License

MIT
