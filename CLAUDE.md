# CLAUDE.md - AI Assistant Guide for SERPRANA

This document provides comprehensive guidance for AI assistants working on the SERPRANA website codebase.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Directory Structure](#directory-structure)
4. [Key Components](#key-components)
5. [Styling System](#styling-system)
6. [Development Workflows](#development-workflows)
7. [Key Conventions](#key-conventions)
8. [Configuration Files](#configuration-files)
9. [Common Tasks](#common-tasks)

---

## Project Overview

**Project Name**: SERPRANA
**Purpose**: Marketing and booking website for holistic healing services
**Business**: Kate Edelstein's transformative healing practice
**Location**: Playa Venao, Panama
**Tagline**: "To be a Life Force. To be in the flow of life force."

### Services Offered
- Sound Healing (1:1, Group, Retreat)
- Alchemy Energy Clearing
- Vibrational Alchemy Medicine Journey
- Rooted Radiance Immersion (3-night retreat)
- Inner Alchemy Guidance (mentorship)

### Contact Information
- Email: serpranahealing@gmail.com
- WhatsApp: +507 6565-2565
- Payment Methods: Yappy, Cash, Bank Transfer, PayPal

---

## Technology Stack

### Core Framework
- **Next.js**: v16.0.3 (App Router architecture)
- **React**: v19.2.0
- **TypeScript**: v5.9.3 with strict mode
- **Node.js**: 18+ required

### Styling
- **Tailwind CSS**: v4.1.17 (latest version with @tailwindcss/postcss)
- **PostCSS**: v8.5.6
- **Autoprefixer**: v10.4.22

### Development Tools
- **ESLint**: v9.39.1 with Next.js configuration
- **TypeScript Compiler**: Integrated with Next.js

### Fonts
- **Google Fonts**:
  - Inter (400, 500, 600, 700) - body text
  - Playfair Display (400, 500, 600, 700) - headings and display text

### Deployment
- **Platform**: Vercel (optimized for Next.js)
- **Build Output**: `.next` directory
- **Framework Detection**: Automatic

---

## Directory Structure

```
/home/user/Hermetic-Serprana/
├── src/                              # Source code root
│   ├── app/                          # Next.js App Router (v16)
│   │   ├── layout.tsx                # Root layout with metadata, fonts, nav, footer
│   │   ├── page.tsx                  # Home page (hero, about, offerings, contact)
│   │   ├── globals.css               # Global styles, CSS variables, dark mode colors
│   │   ├── meet-kate/
│   │   │   └── page.tsx              # Kate's biography and credentials
│   │   ├── energy-offerings/
│   │   │   └── page.tsx              # Detailed service descriptions
│   │   └── book-online/
│   │       └── page.tsx              # Service overview and booking form
│   └── components/                   # Reusable React components
│       ├── Navigation.tsx            # Sticky header (client component with mobile menu)
│       ├── Footer.tsx                # Footer with links and contact (server component)
│       └── ContactForm.tsx           # Contact/booking form (client component with state)
├── scraped-content/                  # Original website content (reference only)
│   └── pages/                        # Archived content from serprana.com
├── tailwind.config.ts                # Tailwind configuration with custom sage palette
├── postcss.config.mjs                # PostCSS setup for Tailwind v4
├── next.config.js                    # Next.js configuration
├── tsconfig.json                     # TypeScript compiler options
├── package.json                      # Dependencies and npm scripts
├── package-lock.json                 # Locked dependency versions
├── vercel.json                       # Vercel deployment configuration
├── .gitignore                        # Git ignore patterns
├── README.md                         # Project documentation
└── CLAUDE.md                         # This file (AI assistant guide)
```

### File Path Reference

All absolute paths for quick reference:
- Layout: `/home/user/Hermetic-Serprana/src/app/layout.tsx`
- Home: `/home/user/Hermetic-Serprana/src/app/page.tsx`
- Meet Kate: `/home/user/Hermetic-Serprana/src/app/meet-kate/page.tsx`
- Energy Offerings: `/home/user/Hermetic-Serprana/src/app/energy-offerings/page.tsx`
- Book Online: `/home/user/Hermetic-Serprana/src/app/book-online/page.tsx`
- Navigation: `/home/user/Hermetic-Serprana/src/components/Navigation.tsx`
- Footer: `/home/user/Hermetic-Serprana/src/components/Footer.tsx`
- Contact Form: `/home/user/Hermetic-Serprana/src/components/ContactForm.tsx`
- Global Styles: `/home/user/Hermetic-Serprana/src/app/globals.css`
- Tailwind Config: `/home/user/Hermetic-Serprana/tailwind.config.ts`

---

## Key Components

### 1. Root Layout (`src/app/layout.tsx`)
**Type**: Server Component
**Purpose**: Wraps all pages with consistent structure

**Responsibilities**:
- SEO metadata configuration
- Google Fonts loading (preconnect optimization)
- Navigation component integration
- Main content wrapper
- Footer component integration
- Font variable setup

**Metadata**:
```typescript
title: "SERPRANA - To be a Life Force"
description: "Transformative space for holistic healing..."
keywords: ["holistic healing", "sound healing", "energy healing", ...]
```

### 2. Navigation Component (`src/components/Navigation.tsx`)
**Type**: Client Component (`"use client"`)
**Purpose**: Sticky header navigation with mobile responsiveness

**Features**:
- Desktop navigation menu (hidden on mobile)
- Mobile hamburger menu with slide-down
- Logo/brand link
- Social media icons (Instagram, Facebook)
- Smooth transitions and hover states
- Mobile menu state management with React hooks

**Navigation Links**:
- Home (`/`)
- Meet Kate (`/meet-kate`)
- Energy Offerings (`/energy-offerings`)
- Book Online (`/book-online`)

**State Management**:
```typescript
const [isOpen, setIsOpen] = useState(false);
```

### 3. Footer Component (`src/components/Footer.tsx`)
**Type**: Server Component
**Purpose**: Global footer with brand information

**Structure** (4-column grid on desktop):
1. **Brand Column**: Logo, description, social icons
2. **Quick Links**: Navigation links
3. **Contact**: Email, location, payment methods
4. **Copyright**: Copyright notice

**Styling**: Dark sage background (`bg-sage-900`) with light text

### 4. Contact Form Component (`src/components/ContactForm.tsx`)
**Type**: Client Component with form state management
**Purpose**: Reusable contact and booking form

**Form Fields**:
- First Name (required)
- Last Name (required)
- Email (required)
- Phone (optional, placeholder: "PA +507")
- Message/What to work on (required)

**Features**:
- React hook-based state management
- Form validation (required fields)
- Loading state with disabled button
- Success/error messaging
- WhatsApp direct contact button
- Form reset on successful submission

**Important Note**:
```typescript
// Line 22: TODO - Implement actual form submission logic
// Currently simulates successful submission with 1-second delay
```

**WhatsApp Integration**:
- URL: `https://wa.me/50765652565`
- Display: "+507 6565-2565"

### 5. Page Components

#### Home Page (`src/app/page.tsx`)
**Sections**:
1. Hero: Gradient background with tagline and introduction
2. About Kate: 2-column layout with bio excerpt
3. Energy Offerings Preview: 4-column service cards
4. Contact Section: Contact form with email link

#### Meet Kate Page (`src/app/meet-kate/page.tsx`)
**Sections**:
1. Hero: Greeting with italic styling
2. Profile: 2-column layout with full biography
3. Quote: Inspirational block quote
4. CTA: Link to energy offerings
5. Contact: Contact form

**Key Information**:
- Founder: Kate Edelstein
- Title: Alchemist of Sound, Energy, and Herbal Medicine
- Started: 2015
- Certifications: Reiki 1 & 2, Herbalism, Permaculture, SRT
- Influences: Kogi and Wiwa Tribes

#### Energy Offerings Page (`src/app/energy-offerings/page.tsx`)
**Implementation**: Data-driven with offerings array

**Sections**:
1. Hero: Page title with image placeholder
2. Offerings List: 5 services with detailed descriptions
3. CTA: Contact button
4. Contact Section: Contact form

**Data Structure**:
```typescript
const offerings = [
  {
    title: string,
    type: string,          // Format/availability
    description: string,
    forWhom: string,       // Target audience
    emphasis: string       // Key highlight (optional)
  }
]
```

#### Book Online Page (`src/app/book-online/page.tsx`)
**Sections**:
1. Hero: Call to action
2. Important Notice: Contact before booking prompt
3. Services Overview: 6-card grid (5 services + discovery call)
4. Booking Form: Contact form integration
5. Payment Info: Accepted payment methods

---

## Styling System

### Design Philosophy
**Theme**: Modern and grounded holistic wellness aesthetic
**Approach**: Utility-first with Tailwind CSS
**Mode**: Dark mode with dark sage backgrounds

### Color Palette

The website uses a custom **dark sage** color palette for a calming, earthy aesthetic.

#### Custom Sage Colors (Primary)
Defined in `tailwind.config.ts`:

```typescript
sage: {
  50: '#f4f7f4',   // Lightest (used for light text)
  100: '#e8f0e9',  // Very light text
  200: '#d1e1d2',  // Light text, nav links
  300: '#b0cdb2',  // Body text, secondary content
  400: '#82af85',  // Accents, placeholders
  500: '#618b63',  // Mid-tone accent (original brand color)
  600: '#4f7251',  // Button backgrounds
  700: '#405d42',  // Borders, card backgrounds
  800: '#364d37',  // Section backgrounds
  900: '#2d3f2e',  // Main page background, darkest
}
```

**Usage Guidelines**:
- **Backgrounds**: sage-900 (main), sage-800 (sections), sage-700 (cards)
- **Text**: sage-100 (headings), sage-200 (primary), sage-300 (body), sage-400 (muted)
- **Borders**: sage-700 (primary), sage-600 (subtle)
- **Buttons**: sage-600 background, sage-50 text, sage-500 hover

#### Additional Color Families
Available but used sparingly:

```typescript
clay: {    // Warm terracotta tones
  500: '#b5825f'  // Error messages
}
cream: {   // Soft neutral tones (legacy)
  500: '#c9bba9'
}
earth: {   // Dark accent tones (legacy)
  500: '#b89372'
}
```

### CSS Variables

Defined in `src/app/globals.css`:

```css
:root {
  /* Dark sage backgrounds */
  --background: #2d3f2e;           /* sage-900 */
  --background-secondary: #364d37;  /* sage-800 */

  /* Light text colors for dark mode */
  --foreground: #e8f0e9;           /* sage-100 */
  --foreground-muted: #b0cdb2;     /* sage-300 */

  /* Accent colors - lighter sage for visibility */
  --accent: #82af85;               /* sage-400 */
  --accent-hover: #b0cdb2;         /* sage-300 */

  /* Borders - subtle in dark mode */
  --border: #405d42;               /* sage-700 */
  --border-light: #4f7251;         /* sage-600 */

  /* Fonts */
  --font-inter: 'Inter', -apple-system, ...;
  --font-playfair: 'Playfair Display', Georgia, serif;
}
```

### Typography

**Font Families**:
```css
font-sans: 'var(--font-inter)'      /* Body text, UI elements */
font-display: 'var(--font-playfair)' /* Headings, titles */
```

**Global Rules**:
- All headings (h1-h6): Playfair Display, `text-sage-100` (light color)
- Body text: Inter, antialiased
- Feature settings: "rlig", "calt" (ligatures enabled)

**Utility Classes**:
```css
.text-accent      /* Italic text with sage-400 color */
em.italic         /* Italic emphasis with accent color */
em.not-italic     /* Override italic styling */
.text-balance     /* Text wrapping balance */
```

### Component Styling Patterns

#### Buttons
```html
<!-- Primary Button -->
<button className="px-8 py-3 bg-sage-600 text-sage-50 rounded-md hover:bg-sage-500 transition-colors font-medium shadow-md hover:shadow-lg">
  Button Text
</button>
```

#### Cards
```html
<!-- Service Card -->
<div className="bg-sage-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-sage-700">
  <h3 className="text-xl font-display text-sage-100">Title</h3>
  <p className="text-sage-300">Description</p>
</div>
```

#### Form Inputs
```html
<!-- Dark Mode Input -->
<input className="w-full px-4 py-2 bg-sage-700 text-sage-100 border border-sage-600 rounded-md focus:ring-2 focus:ring-sage-400 focus:border-transparent outline-none transition-colors placeholder:text-sage-400" />
```

#### Sections
```html
<!-- Alternating Section Backgrounds -->
<section className="py-20 px-4 bg-sage-900">...</section>
<section className="py-20 px-4 bg-sage-800">...</section>
```

### Responsive Design

**Breakpoints** (Tailwind defaults):
- `sm`: 640px
- `md`: 768px  (primary breakpoint for nav, grids)
- `lg`: 1024px
- `xl`: 1280px

**Common Patterns**:
```html
<!-- Mobile-first grid -->
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<!-- Hidden on mobile, shown on desktop -->
<div className="hidden md:flex">

<!-- Mobile menu toggle -->
<button className="md:hidden">
```

### Accessibility

**Best Practices Implemented**:
- ARIA labels on interactive elements
- Form labels with `htmlFor` attributes
- Semantic HTML (`<nav>`, `<footer>`, `<section>`)
- Color contrast compliance (WCAG AA) with dark sage palette
- Alt text placeholders for images (to be added)
- Focus states on all interactive elements

---

## Development Workflows

### NPM Scripts

Defined in `package.json`:

```bash
npm run dev     # Start development server (localhost:3000)
npm run build   # Build for production (.next output)
npm start       # Start production server
npm run lint    # Run ESLint checks
```

### Development Server

Start the development server:
```bash
npm install     # First time only
npm run dev     # Starts on http://localhost:3000
```

**Hot Reload**: Enabled automatically (React Fast Refresh)

### Building for Production

```bash
npm run build   # Creates optimized production build
npm start       # Serves production build locally
```

**Output**: `.next` directory (auto-generated, git-ignored)

### Git Workflow

**Current Branch**: `claude/claude-md-mhy7ttlaazepn9ub-017TDA5hFGk3Bnv6uBBb6NYb`

**Commit Guidelines**:
1. Check status: `git status`
2. Review changes: `git diff`
3. Stage changes: `git add .`
4. Commit with message: `git commit -m "message"`
5. Push to remote: `git push -u origin <branch-name>`

**Git Ignore**:
- `node_modules/`
- `.next/`
- `out/`
- `.env*`
- `.DS_Store`

---

## Key Conventions

### Component Organization

**Server vs Client Components**:
- **Server Components** (default): Layout, pages, Footer
  - No "use client" directive
  - Cannot use hooks or browser APIs
  - Better performance, smaller bundle

- **Client Components**: Navigation, ContactForm
  - Requires "use client" directive
  - Can use React hooks and state
  - Needed for interactivity

**Component Location**:
- **Pages**: `src/app/[route]/page.tsx`
- **Reusable Components**: `src/components/[ComponentName].tsx`

### Import Patterns

**Path Aliases** (configured in `tsconfig.json`):
```typescript
// Use @ alias for src directory
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";

// NOT: import Navigation from "../../components/Navigation";
```

### Naming Conventions

**Files**:
- Pages: `page.tsx` (Next.js convention)
- Components: `PascalCase.tsx` (e.g., `ContactForm.tsx`)
- Configs: `kebab-case.js/ts` (e.g., `next.config.js`)

**Components**:
```typescript
// Default export for page components
export default function Home() { }

// Default export for reusable components
export default function Navigation() { }

// Named exports for utilities
export const formatDate = () => { }
```

**CSS Classes**:
- Use Tailwind utility classes (no CSS modules)
- Order: layout → spacing → typography → colors → effects
- Example: `flex items-center px-4 py-2 text-lg text-sage-100 bg-sage-800 rounded-md`

### Content Conventions

**Italic Text for Emphasis**:
```html
<!-- Use em tag with italic class for special phrases -->
<p>
  This is <em className="italic">the alchemical journey</em> of healing.
</p>
```

**Placeholder Content**:
```html
<!-- Image placeholders -->
<div className="bg-sage-700 rounded-lg flex items-center justify-center text-sage-500">
  [Kate's Photo]
</div>
```

---

## Configuration Files

### TypeScript (`tsconfig.json`)

**Key Settings**:
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,              // All strict checks enabled
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]         // Path alias for imports
    }
  }
}
```

**What This Means**:
- Strict type checking enabled
- Modern ES features supported
- Import from `@/` maps to `src/`
- No emit (Next.js handles compilation)

### Next.js (`next.config.js`)

```javascript
const nextConfig = {
  reactStrictMode: true,         // Development warnings
  images: {
    domains: [],                 // Add external image hosts here
  }
};
```

**Important**: To add external image optimization, add domains to the `images.domains` array.

### Tailwind CSS (`tailwind.config.ts`)

**Content Paths** (files to scan for classes):
```typescript
content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
]
```

**Custom Colors**: See [Styling System](#styling-system) section above.

**Extending Theme**:
```typescript
theme: {
  extend: {
    colors: { /* custom sage palette */ },
    fontFamily: {
      sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      display: ['var(--font-playfair)', 'serif'],
    }
  }
}
```

### PostCSS (`postcss.config.mjs`)

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},  // Tailwind v4 PostCSS plugin
  },
};
```

**Note**: Tailwind v4 uses a new PostCSS architecture.

### Vercel (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install"
}
```

**Deployment**: Push to GitHub → Vercel auto-deploys

---

## Common Tasks

### Adding a New Page

1. Create page file:
```bash
mkdir -p src/app/new-page
touch src/app/new-page/page.tsx
```

2. Add page component:
```typescript
export default function NewPage() {
  return (
    <div className="py-20 px-4 bg-sage-900">
      <h1 className="text-4xl font-display text-sage-100">New Page</h1>
    </div>
  );
}
```

3. Add navigation link in `src/components/Navigation.tsx`:
```typescript
const navLinks = [
  // ... existing links
  { href: "/new-page", label: "New Page" },
];
```

4. Add footer link in `src/components/Footer.tsx`:
```tsx
<Link href="/new-page" className="text-sage-200 hover:text-sage-100">
  New Page
</Link>
```

### Modifying Color Scheme

1. Edit `tailwind.config.ts` to update sage palette
2. Update CSS variables in `src/app/globals.css` if needed
3. Run `npm run dev` to see changes (hot reload)

### Adding a New Component

1. Create component file:
```bash
touch src/components/NewComponent.tsx
```

2. Add component code:
```typescript
"use client"; // Only if component needs state/interactivity

export default function NewComponent() {
  return (
    <div className="bg-sage-800 p-6 rounded-lg">
      {/* Component content */}
    </div>
  );
}
```

3. Import and use:
```typescript
import NewComponent from "@/components/NewComponent";

<NewComponent />
```

### Updating Form Submission

**Current State**: Form submission is mocked (see `src/components/ContactForm.tsx:22`)

**To Implement Real Submission**:

1. Choose backend service (e.g., Formspree, SendGrid, custom API)

2. Update `handleSubmit` function:
```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Submission failed');

    setSubmitStatus("success");
    setFormData({ /* reset */ });
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

3. Create API route (if using Next.js API):
```bash
touch src/app/api/contact/route.ts
```

### Adding Images

**Current State**: Image placeholders throughout

**To Add Real Images**:

1. Place images in `public/images/` directory:
```bash
mkdir -p public/images
# Add images: kate-profile.jpg, hero-bg.jpg, etc.
```

2. Import Next.js Image component:
```typescript
import Image from "next/image";
```

3. Replace placeholders:
```typescript
// Before (placeholder):
<div className="bg-sage-700 rounded-lg">
  [Kate's Photo]
</div>

// After (real image):
<Image
  src="/images/kate-profile.jpg"
  alt="Kate Edelstein"
  width={400}
  height={400}
  className="rounded-lg"
/>
```

4. Add external domains to `next.config.js` if using external images:
```javascript
images: {
  domains: ['example.com'],
}
```

### Styling Dark Mode Adjustments

**To Adjust Dark Mode Colors**:

1. Update global CSS variables in `src/app/globals.css`:
```css
:root {
  --background: #2d3f2e;  /* Adjust darkness */
}
```

2. Update component classes:
```html
<!-- Lighter background for better contrast -->
<section className="bg-sage-800">  <!-- was bg-sage-900 -->
```

3. Test contrast:
- Headings: Should use `text-sage-100` or `text-sage-50`
- Body text: Should use `text-sage-200` or `text-sage-300`
- Muted text: Should use `text-sage-400`

---

## Important Notes for AI Assistants

### Do's ✅

1. **Always use path aliases**: `@/components/...` not `../../components/...`
2. **Maintain dark mode consistency**: Use sage palette colors
3. **Keep server/client components separate**: Add "use client" only when needed
4. **Follow Tailwind utility-first**: No custom CSS unless absolutely necessary
5. **Preserve accessibility**: ARIA labels, semantic HTML, proper contrast
6. **Use TypeScript strictly**: No `any` types, proper interfaces
7. **Test responsive design**: Check mobile (`md:` breakpoint)
8. **Update both nav and footer**: When adding new pages
9. **Maintain italic emphasis convention**: Use `<em className="italic">` for special phrases
10. **Check color contrast**: Ensure readability with dark backgrounds

### Don'ts ❌

1. **Don't use light mode colors**: No `bg-white`, `text-gray-900`, etc.
2. **Don't create CSS modules**: Use Tailwind utilities
3. **Don't add "use client" unnecessarily**: Server components are preferred
4. **Don't bypass TypeScript**: No `@ts-ignore` without good reason
5. **Don't hard-code colors**: Use Tailwind classes or CSS variables
6. **Don't forget mobile**: Always test with `md:` breakpoints
7. **Don't mix color palettes**: Stay within sage family
8. **Don't remove accessibility features**: Keep ARIA labels, alt text
9. **Don't commit node_modules or .next**: Already git-ignored
10. **Don't use old Tailwind syntax**: This project uses v4

### Quick Reference: Dark Mode Color Map

When updating or creating components, use this quick reference:

| Element Type | Background | Text | Border |
|-------------|-----------|------|--------|
| Page | `bg-sage-900` | `text-sage-100` | - |
| Section (alt) | `bg-sage-800` | `text-sage-200` | - |
| Card | `bg-sage-800` | `text-sage-100` | `border-sage-700` |
| Button | `bg-sage-600` | `text-sage-50` | - |
| Button (hover) | `bg-sage-500` | - | - |
| Input/Textarea | `bg-sage-700` | `text-sage-100` | `border-sage-600` |
| Input (focus) | - | - | `ring-sage-400` |
| Placeholder | `bg-sage-700` | `text-sage-500` | - |
| Nav/Footer | `bg-sage-900` | `text-sage-200` | `border-sage-800` |
| Link (default) | - | `text-sage-200` | - |
| Link (hover) | - | `text-sage-100` | - |
| Heading | - | `text-sage-100` | - |
| Body text | - | `text-sage-300` | - |
| Muted text | - | `text-sage-400` | - |

### Testing Checklist

Before completing a task, verify:

- [ ] Dark mode colors are consistent
- [ ] Text has proper contrast against background
- [ ] Responsive design works on mobile (viewport < 768px)
- [ ] Navigation links are updated if new page added
- [ ] Footer links are updated if new page added
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] Component uses correct server/client designation
- [ ] Accessibility attributes are present (ARIA, alt text)
- [ ] Hover states are visible and appropriate
- [ ] Forms have proper validation and labels

---

## Additional Resources

### Official Documentation
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

### Project-Specific
- **README.md**: General project overview and setup
- **package.json**: Dependencies and scripts
- **scraped-content/**: Original website reference material

### Contact
For business questions or content updates, contact:
- Email: serpranahealing@gmail.com
- WhatsApp: +507 6565-2565

---

**Last Updated**: 2024-11-14
**Version**: 1.0.0
**Codebase State**: Dark mode with sage palette fully implemented
