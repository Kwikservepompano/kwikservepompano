# KWIK SERVE Convenience Store Website

A modern, futuristic drive-thru convenience store website built for GitHub Pages deployment.

## 🚀 Features

- **Fully Responsive**: Mobile-first design that works on all devices
- **GitHub Pages Ready**: Static site optimized for GitHub Pages hosting
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Modern Design**: Futuristic theme with neon accents and smooth animations
- **Performance Focused**: Optimized for fast loading and smooth scrolling

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Responsive Design** with mobile-first approach

## 📱 Sections

1. **Hero Section**: Eye-catching intro with store branding
2. **Special Deals**: Current promotions and offers
3. **Products & Services**: Categorized product showcase
4. **How It Works**: 3-step process explanation
5. **Contact & Location**: Store info with embedded map

## 🚀 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Fork/clone this repository
2. Go to your repository settings
3. Navigate to Pages → Source → GitHub Actions
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Option 2: Manual Build and Deploy

1. Build the project:
```bash
npm install
npm run build
```

2. Copy the `dist` folder contents to your GitHub Pages repository
3. Ensure your repository settings point to the correct branch/folder

### Custom Domain Setup

1. Add a `CNAME` file to your repository root with your domain:
```
yourdomain.com
```

2. Configure your DNS provider to point to GitHub Pages:
   - For apex domain: A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - For subdomain: CNAME record to `yourusername.github.io`

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 SEO Features

- Meta title and description tags
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- Semantic HTML structure
- Alt text on all images
- Mobile-friendly viewport settings

## 🎨 Customization

### Colors
The site uses a futuristic color scheme defined in Tailwind:
- Primary: Cyan (`#06B6D4`)
- Secondary: Purple (`#8B5CF6`) 
- Accent: Green (`#10B981`)

### Content Updates
- Update store information in `src/components/Contact.tsx`
- Modify deals in `src/components/SpecialDeals.tsx`
- Adjust products in `src/components/Products.tsx`

### Styling
- All styles use Tailwind CSS classes
- Custom animations defined inline
- Responsive breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)

## 📞 Support

For questions about deployment or customization, refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Documentation](https://react.dev/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).