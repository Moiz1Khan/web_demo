# web_demo – Project Summary & Change Log

**Last updated:** From conversation analysis  
**Stack:** Next.js 16.1.6, React 19, TypeScript, Tailwind CSS v4, Framer Motion, GSAP

---

## 1. Project Overview

UAE mortgage/home loans site for Dubai, with:
- Residential Finance (homepage)
- Commercial Finance
- Non-Resident Finance
- Admin panel (content, users, settings)

---

## 2. Routes & Pages

| Route | Description | Status |
|-------|-------------|--------|
| `/` | Homepage – residential finance | ✓ |
| `/commercial-finance` | Commercial finance page | ✓ |
| `/non-resident-finance` | Non-resident finance page | ✓ |
| `/residential-finance` | Linked in Header – **no page** (redirects/home?) | Check |
| `/admin` | Admin dashboard | ✓ |
| `/admin/content` | Blog/content management | ✓ |
| `/admin/settings` | Admin settings | ✓ |
| `/admin/users` | User management | ✓ |
| `/about` | About Us | Not present |
| `/faq` | FAQ page | Not present |
| `/reviews` | Reviews/testimonials | Not present |
| `/blog` | Blog listing | Not present |

---

## 3. Homepage Sections (in order)

1. **ScrollAnimations** – GSAP scroll reveals
2. **ScrollProgress** – Top progress bar
3. **Header** – Fixed nav, scroll-aware
4. **Hero** – Full-screen video background
5. **TrustBar** – Count-up stats
6. **WhyChoose** – Benefits grid
7. **ClientMortgageCalculator** – Calculator (ssr: false)
8. **ClientProcess** – Stepper/steps (ssr: false)
9. **CaseStudies** – GSAP CardSwap
10. **RatesTable** – Rate brackets
11. **EligibilityChecklist** – Interactive tabs + checklist
12. **Testimonials** – Customer quotes
13. **ClientFAQ** – FAQDome (3D globe, ssr: false)
14. **BlogSection** – Blog bento grid
15. **ClientCTAAndLeadSection** – Form (ssr: false)
16. **Footer**

---

## 4. Components Implemented / Modified

### MortgageCalculator
- Residency, property value, down payment, loan duration
- Variable rate only, property brackets, residency-based rates
- **Apply Now** button → modal with form ( Financing Type, Employment, Loan amount/duration, Name, Email, Mobile, Address, City, Postal, Send )
- Modal: dark glass look, blue glow, transparent background

### FAQDome
- 3D globe of FAQ tiles, drag to rotate
- 16 FAQs, dark blue outlines (#1e3a5f)
- Left: globe (transparent bg), right: “Have a question?” card (larger)
- Uses @use-gesture/react, no Framer Motion
- Click tile → overlay with answer

### EligibilityChecklist
- Replaced 3 static Framer Motion cards with light version
- Tab switcher: Everyone / Salaried / Self-Employed
- Click items to mark done/undone (interactive checklist)
- Progress: X/Y ready
- No Framer Motion or data-reveal

### Process
- Stepper with phases (Pre-Approval, Document Collection, etc.)
- 2-column grid layout
- Numbered cards for steps
- “Next” / “Previous”

### BlogGrid
- Bento layout (different sizes)
- Large 2×2: First-Time Buyer
- Medium 2×1: Down Payment, Refinancing
- Small 1×1: others

### ClientOnlySections
- Dynamic imports with ssr: false for: MortgageCalculator, Process, FAQ (FAQDome), CTAAndLeadSection
- Avoids hydration mismatch from extensions

### Header
- Dropdown for Finance (Residential, Commercial, Non-Resident)
- Links: Rates, Calculator
- Logo, mobile menu
- Scroll-aware styles (over video vs gradient)

### Apply Now Modal (inside MortgageCalculator)
- Glass card, dark theme, blue accents
- Form fields listed above
- Pre-fills loan amount and duration from calculator

---

## 5. Theme & Styling

- **Primary:** `#28303a`
- **Background gradient:** Sky blue → white (theme-gradient)
- **Fonts:** Geist Sans, Geist Mono
- **Effects:** Glass, orb glow, noise overlay, CursorGlow
- **Scripts in layout:**
  - Theme init (localStorage)
  - Strip `fdprocessedid` (MutationObserver) – hydration fix

---

## 6. Performance Choices

- Heavy sections: `ssr: false` in ClientOnlySections
- Scroll listeners throttled
- FAQ dome: `@use-gesture/react`, no Framer Motion
- EligibilityChecklist: no animation libs
- CardSwap lazy-loaded
- `pointer-events: none` on decorative overlays

---

## 7. Dependencies

- next 16.1.6
- react 19.2.3
- framer-motion 12.34.0
- gsap 3.14.2
- @use-gesture/react 10.3.1
- lucide-react
- tailwindcss 4
- react-hook-form, zod, @hookform/resolvers

---

## 8. Gaps / To Do

1. `/residential-finance` – linked in Header but no page
2. `/about`, `/faq`, `/reviews`, `/blog` – not in app directory (previously discussed)
3. Footer links – may still point to # or old routes
4. Apply modal – form submit not wired to API

---

## 9. File Reference

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage sections |
| `src/app/layout.tsx` | Root layout, scripts |
| `src/app/globals.css` | Theme vars, utilities |
| `src/components/Header.tsx` | Nav, dropdown |
| `src/components/MortgageCalculator.tsx` | Calculator + Apply modal |
| `src/components/FAQDome.tsx` | FAQ globe |
| `src/components/EligibilityChecklist.tsx` | Tabbed checklist |
| `src/components/ClientOnlySections.tsx` | Client wrappers |
| `src/components/BlogGrid.tsx` | Bento grid |
| `src/components/Process.tsx` | Stepper |
| `src/lib/utils.ts` | cn, throttle |
| `src/lib/media.ts` | Image/video paths |
