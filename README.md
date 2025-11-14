# SERPRANA Website

A modern, grounded website for SERPRANA - a transformative space for holistic healing through sound, vibration, alchemy, and the wisdom of the Earth.

## About

SERPRANA is founded by Kate Edelstein, an Alchemist of Sound, Energy, and Herbal Medicine based in Playa Venao, Panama. The website showcases her holistic healing services and provides a platform for clients to learn about and book transformative healing sessions.

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Inter & Playfair Display)
- **Hosting**: Vercel

## Features

- Modern, responsive design with earth-tone color palette
- SEO optimized with metadata
- Contact form integration
- Service offerings pages
- About/Bio section
- Mobile-friendly navigation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Hermetic-Serprana
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── meet-kate/         # About Kate page
│   ├── energy-offerings/  # Services page
│   ├── book-online/       # Booking page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Site footer
│   └── ContactForm.tsx    # Contact form
└── lib/                   # Utility functions

scraped-content/           # Original website content
├── pages/                 # Page content from serprana.com
└── services/              # Service descriptions
```

## Design Philosophy

The website features a **modern and grounded** design aesthetic that reflects the holistic wellness nature of SERPRANA:

- **Earth tones**: Warm browns and sage greens
- **Clean typography**: Playfair Display for headings, Inter for body text
- **Spacious layouts**: Ample whitespace for a calm, peaceful feel
- **Nature-inspired**: Colors and imagery connected to the Earth

## Deployment

This site is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

## Content

The website includes:

- **Home**: Hero section, Kate introduction, service preview, contact form
- **Meet Kate**: Full biography and credentials
- **Energy Offerings**: Detailed service descriptions
  - Sound Healing
  - Alchemy Energy Clearing
  - Vibrational Alchemy Medicine Journey
  - Rooted Radiance Immersion
  - Inner Alchemy Guidance
- **Book Online**: Service overview and booking contact form

## Contact

Email: serpranahealing@gmail.com
Location: Playa Venao, Panama

## License

© 2023 by SERPRANA. All rights reserved.
