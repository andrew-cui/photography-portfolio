# Photography Portfolio
Personal photography portfolio website built with React and TypeScript, deployed on Netlify.

## Tech Stack
- **Framework:** React + TypeScript
- **Styling:** CSS Modules, Bootstrap, Tailwind
- **Hosting:** Netlify
- **Image Formats:** AVIF, WebP
- **Database:** Local, to migrate to Airtable / Neon
- **Build Tool:** Vite

## Project Structure

```
photography-portfolio/
│
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level components
│   ├── data/            # Photo metadata and gallery configs
│   ├── styles/          # CSS modules and global styles
│   ├── utils/           # Helper functions
│   └── types/           # TypeScript type definitions
│
├── public/
│   └── photos/          # Image assets
│
└── config/              # Build and deployment configs
```

## Version History

### v1.0 (2017-2019)
- Static HTML/CSS site and Express application on Github Pages
- [andrew-cui.github.io](https://github.com/andrew-cui/andrew-cui.github.io)

### v2.0 (2022)
- React.js on Github Pages
- Implemented client-side routing with React Router
- Component-based architecture

### v3.0 (2024)
- Site redesign and UX improvements
- Migrated to Amazon S3 for optimized image delivery
- Responsive layout enhancements
- Deployment on Netlify

### v4.0 (December 2024 - Present)
**Status:** In Development: Complete rebuild with TypeScript, modern tooling, and CMS integration.

#### v4.1: TypeScript 
- [x] TypeScript conversion
- [x] CSS modularization
- [x] Defined PhotoProps and metadata schemas
- [x] Modular component architecture

#### v4.2: Platform & Architecture 
- [x] Metadata management system
- [x] Responsive Flexbox grid layout
- [x] Lightbox component with keyboard navigation
- [ ] Images all documented

#### Milestone 3: Database & Performance
- [ ] CMS setup
- [ ] Lazy loading implementation
- [ ] Improved image performance
- [ ] CDN caching strategy

#### Milestone 4: Business Features
- [ ] Contact form
- [ ] Business/booking page functionality
- [ ] Blog/journal
- [ ] Personal projects

## License

**Code:** MIT License  
**Photography:** © Andrew Cui. All rights reserved.

---

**Current Version:** v4.1.5
**Last Updated:** January 2026