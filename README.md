# Emerge Private Fitness — Website

A cinematic, ultra-premium single-page website for Emerge Private Fitness Studio, Rajarajeshwari Nagar, Bangalore.

## 🛠 Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** — scroll animations, entrance effects
- **Lucide React** — icons

## ✨ Features

- Full-viewport cinematic hero with staggered text animation
- Scroll-driven parallax on About section
- Service cards with hover glow
- 3-tier membership pricing (featured tier highlighted)
- Testimonials, gallery, contact form
- WhatsApp float CTA
- Mobile hamburger menu with slide-in animation
- Grain texture overlay + gradient orbs for premium feel

## 🚀 Deploy to Vercel (One-time setup)

### Option A — Run the deploy script
```bash
node deploy.js
```
This will push the code to GitHub and open the Vercel import link.

### Option B — Manual
```bash
# Push to GitHub
git init
git add .
git commit -m "Emerge Fitness website"
gh repo create emerg-fitness --public --source=. --push

# Then go to https://vercel.com/new and import the repo
```

## 🏃‍♂️ Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Customization

- **Business info:** Edit data in `components/Contact.tsx`, `components/Membership.tsx`
- **Images:** Replace Unsplash URLs in component files
- **Colors:** Update `tailwind.config.js` and `app/globals.css`

## 📄 Business Info (Real)

- **Name:** Emerge Private Fitness Studio
- **Location:** Rajarajeshwari Nagar, Bangalore
- **Phone:** 09606292814
- **Services:** Gym, Aerobics, CrossFit, Zumba, Personal Training
- **Starting:** ₹1,500/month
- **Rating:** 4.9★ on Justdial (520+ reviews)
