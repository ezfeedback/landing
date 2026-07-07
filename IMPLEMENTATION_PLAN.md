# EzFeedback - Landing Service Plan

## Project Overview
The landing website for EzFeedback built with Next.js. It handles marketing, pricing, FAQs, and legal documentation (Privacy Policy & Terms of Service) to attract local business owners.

## Technology Stack
- **Framework**: Next.js (App Router)
- **Styling**: TailwindCSS 4 (using standard vanilla variables and imported themes)
- **Fonts**: Inter and Poppins
- **Features**: Responsive layout, SEO metadata, interactive mockups, custom Tailwind gradients

## Structure
- `/app/page.tsx` — Main marketing page
- `/app/privacy/page.tsx` — Privacy Policy page
- `/app/terms/page.tsx` — Terms of Service page
- `/app/globals.css` — Global styles, customized phone mockup classes, float/fade animations
- `/app/layout.tsx` — Layout wrapper specifying SEO title, meta description, and fonts

## Key Features Implemented
1. **Hero Badges**: Trust signals showing "No app needed", "Setup in 5 min", "Hinglish support", "No auto-submit".
2. **"How it Works" Visual Flow**: 3-step phone mockup showing:
   - Step 1: Customer scan & star rating
   - Step 2: Interactive MCQ question selector
   - Step 3: AI review output selection (Regular, Hinglish, Detailed)
3. **Review Styles Preview**: Showcase of 4 generated AI review formats (Regular, Hinglish, Detailed, Quick Take).
4. **Try It Yourself**: CTA demo card leading to registration.
5. **Legal Pages**: Modern Privacy Policy and Terms of Service pages routing dynamically from footer.

## Deployment & CI/CD
- **Docker**: Local `Dockerfile` using Multi-stage Node build generating Next.js standalone output.
- **Compose**: Local `docker-compose.yml` exposing port 3001.
- **Workflow**: Local `.github/workflows/ci.yml` running Next lint and type check.
