# Build Prompt — Kriya marketing site (front end)

> **How to use:** Paste this whole file into your coding agent (Claude Code, Cursor, or v0) at the root of an empty repo. Build exactly to this spec. `Kriya` is a placeholder brand name — if it changes, find-and-replace globally. Ask me before deviating from the design system or adding sections not listed here.

---

## 1. Objective

Build a single-page, dark, cinematic marketing site for **Kriya** — an AI-native transformation company that _embeds senior engineers and ships production AI_, as opposed to selling strategy decks. The company is brand-new, so the site earns trust through **proof of thinking, proof of capability, and proof of method** — not through a client-logo wall it doesn't have yet. Mission-first, visionary tone. The reader should leave feeling these people see where things are going and can actually ship it.

The single job of the homepage: **build credibility and book one working session.**

---

## 2. Brand & thesis (context for voice and copy)

- **What Kriya does:** AI transformation — strategy _and_ delivery — but execution-led. We go into messy, real, legacy stacks and ship working agentic systems in weeks.
- **The wedge:** The transformation industry is slideware theater. Strategy is commoditized; every company already knows it needs AI. The bottleneck is _execution_ — nobody will embed and ship into production. Kriya is the execution layer. We don't advise on the future, we install it.
- **Who it's for:** India + GCC. Mid-market and old-economy CXOs under board pressure to "do AI" who've been sold a deck and have nothing running. Verticals: financial services, manufacturing & logistics, healthcare. **Deliberately NOT retail/e-commerce.**
- **Voice:** Visionary, mission-first, sharp, confident — but never hypey or cocky-for-its-own-sake. Plain verbs, sentence case, specific over clever. Short sentences. The enemy is the slide deck; the hero is the shipped system.

---

## 3. Tech stack & hard constraints

- **Framework:** Next.js (App Router) + TypeScript (strict).
- **Styling:** Tailwind CSS. All design tokens (Section 4) defined as CSS variables in `globals.css` and mapped into `tailwind.config.ts`. Do not hardcode hex values in components.
- **Motion:** Framer Motion only. No other animation libs.
- **Static & free hosting:** Configure `output: 'export'` and `images: { unoptimized: true }` so it deploys to Cloudflare Pages **or** Vercel free tier with zero backend. The whole site is static.
- **No backend, no forms.** Every CTA is an `<a href>` to a Cal.com placeholder: `https://cal.com/kriya/working-session`. Email links use `mailto:`. Do **not** build a contact form or any API route.
- **No browser storage.** No `localStorage` / `sessionStorage`.
- **Fonts via `next/font`** where possible (see Section 4).
- **Performance budget:** Lighthouse Performance ≥ 95, Accessibility ≥ 95. LCP < 2s, zero CLS. No stock hero video — hero atmosphere is lightweight CSS/canvas.

---

## 4. Design system (follow exactly)

This is the part that keeps the site from looking AI-generated. **The brief pins "dark" — honor it — but the accent, type, and signature are chosen specifically for Kriya, not from the default playbook.**

### Color — warm near-black + a single molten accent

```
--bg:          #0B0A09   /* warm near-black, NOT pure #000, NOT cool slate */
--bg-elev:     #15130E   /* slightly warm raised surface for cards */
--text:        #ECE6DA   /* warm bone, primary text */
--text-muted:  #8B857A   /* warm grey, secondary */
--border:      #26231C   /* warm hairline */
--accent:      #F5A524   /* molten saffron-gold — the ONE accent. Hotter alt: #FF8A00 */
--accent-ink:  #0B0A09   /* text sitting on accent fills */
--live:        #3FB950   /* reserved ONLY for the "live in production" status dot */
```

Discipline: `--accent` is the only brand color. `--live` appears _only_ as a small status dot in the signature element. Nothing else gets a second color.

### Typography — characterful grotesk + clean body + meaningful mono

- **Display (headlines):** **Clash Display** (load via Fontshare: `https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap`). Used big, tight tracking. This carries the personality — do not swap it for a generic serif or for Inter.
- **Body / UI:** **Inter** via `next/font/google`.
- **Mono (data, eyebrows, status, the execution motif):** **Geist Mono** (or JetBrains Mono) via `next/font`. The mono is _meaningful_ here — it signals real systems and shipped code, so use it for capability stats, eyebrows, and the signature, never as random decoration.

Type scale: deliberate and large. Hero headline ~clamp(2.75rem, 7vw, 6rem). Section headings ~clamp(2rem, 4vw, 3.25rem). Body 1.0625–1.1875rem with generous line-height. Eyebrows: mono, uppercase, letter-spaced, --text-muted, small.

### Layout, spacing, radius

- Max content width ~1200px, centered, generous side gutters.
- One consistent vertical-rhythm scale (e.g. section padding `py-24 md:py-36`). Keep section spacing uniform to avoid the CSS-specificity padding bugs that come from mixing element/class selectors.
- Border radius: small and restrained (4–8px). This is precise and engineered, not bubbly.
- Hairline `--border` dividers between major bands.

### The signature element (the one memorable thing — spend your boldness here)

A small, refined component that **visualizes the entire thesis: execution over slideware.** It contrasts the industry's deliverable with Kriya's:

```
  ┌─ what they deliver ────────────────────┐
  │  Q4 · Strategy & alignment phase        │   ← --text-muted, mono, a strikethrough line draws across it
  └─────────────────────────────────────────┘
                    ↓
  ┌─ what we deliver ──────────────────────┐
  │  ● Live in production · shipped in 3 wks │   ← --live dot + --accent text, mono
  └─────────────────────────────────────────┘
```

- Place it as the orchestrated hero moment (just under / beside the hero headline).
- On load: the "strategy phase" line appears, a strikethrough sweeps across it, then it resolves into the live status line. One clean sequence, ~1.5s total.
- `prefers-reduced-motion`: skip the animation, render the final resolved state statically.
- Keep everything _around_ this element quiet so it lands.

---

## 5. Motion direction

- **One orchestrated moment** (the signature, above) + **disciplined scroll reveals** (fade + ~16px translate-up, short stagger on section children). That's it.
- Do **not** over-animate: no full-page parallax, no floating/drifting elements everywhere, no scattered micro-effects. Excess motion is the tell of an AI-generated site.
- Everything respects `prefers-reduced-motion: reduce` → motion off, final states shown.
- 60fps; animate transform/opacity only.

---

## 6. Page structure + real copy (use this copy verbatim — no lorem)

Single page, anchor-nav. Sections in order:

### Nav (sticky, slim)

- Left: `Kriya` wordmark (Clash Display).
- Center/right anchors: `Thesis` · `What we do` · `How we ship` · `Writing` · `Verticals`
- Right CTA button (accent): **Book a working session** → Cal link.
- On scroll past hero: subtle background blur / `--bg` at ~85% opacity, hairline bottom border.

### Hero

- Eyebrow (mono): `AI TRANSFORMATION — MINUS THE THEATER · INDIA & GCC`
- H1 (display, huge): **Everyone's selling the future. We install it.**
- Subhead: _Kriya embeds senior engineers inside your stack and ships production AI in weeks — not roadmaps, not pilots, not a ninety-slide deck._
- Primary CTA (accent): **Book a working session** → Cal link.
- Secondary text link: `See how we ship ↓` (smooth-scrolls to "How we ship").
- Signature element (Section 4) animates here.
- Background: lightweight warm-toned ambient — a slow, subtle grain + faint radial gradient glow in `--accent` at very low opacity. CSS or a tiny canvas. No video, no heavy assets.

### Thesis band (full-bleed, the credibility beat)

- Giant line (display): **Strategy is commoditized. Execution is the moat.**
- Supporting line (--text-muted): _Every company already knows it needs AI. Almost none have shipped it. That gap is the entire business._

### Proof of capability (replaces the logo wall)

- Eyebrow (mono): `PROOF, NOT LOGOS`
- Heading: **We're new as a company. The engineering isn't.**
- Three stat cards (`--bg-elev`, mono numerals, accent on the result):
  - **60% → 90%** — autonomous task completion on a production multi-agent platform.
  - **15s → 5s** — agent step latency, held under real load.
  - **0 → prod** — multi-agent orchestration shipped to live users. Not demos.
- Small honest footnote (--text-muted): _From the founding team's prior work._

### What we do (execution outcomes, not advice)

- Eyebrow: `WHAT WE ACTUALLY DO`
- Heading: **Four things. All of them ship.**
- Four items (no 01/02/03 numbering here — this isn't a sequence):
  1. **AI-readiness in days, not months.** A working read on where AI moves your numbers — delivered as a running prototype, not a PDF.
  2. **Legacy → agentic migration.** We go into the messy, real stack and re-platform it for agents. The part nobody else will touch.
  3. **Embedded agent squads.** Senior engineers inside your team, shipping production AI to your users — week one, not quarter three.
  4. **We run it until you can.** We operate what we build, then hand it over cleanly. No abandonware, no dependency.

### How we ship (the trust engine — a real sequence, so numbering is earned)

- Eyebrow: `HOW WE SHIP`
- Heading: **Three steps. The first one already produces something real.**
- Numbered `01 / 02 / 03` (mono markers — justified here because order carries meaning):
  - **01 · Week 0 — Working session.** Not a sales call. We sit with your stack and your numbers and leave with one slice worth shipping.
  - **02 · Weeks 1–3 — Embed & ship.** Senior engineers go in. A real production slice goes live. You watch it work, not a status deck.
  - **03 · Handover & run.** We operate it, then transfer it cleanly to your team — code, context, and control.

### Writing / worldview (essays = credibility for a mission-first brand)

- Eyebrow: `HOW WE THINK`
- Heading: **We write the way we build — sharp and in public.**
- Three essay cards (titles below are real; bodies are written separately — link each to `/writing/[slug]` placeholder):
  - **Strategy is the commodity now.**
  - **The consultants left a deck. Here's what we leave.**
  - **Why your last AI pilot died in staging.**
- (Note to builder: leave clean card components; these become real posts. Do not fabricate body text.)

### Verticals (where we go deep)

- Eyebrow: `WHERE WE GO DEEP`
- Heading: **We start where the stakes — and the legacy — run highest.**
- Three cards: **Financial services** · **Manufacturing & logistics** · **Healthcare**.
  - FS: _Onboarding, compliance, and risk workflows, shipped to production under real regulatory weight._
  - Mfg & logistics: _Operations and supply chains that still run on legacy. We make them agent-native._
  - Healthcare: _Administrative and coordination load, automated under strict data boundaries._
- Footer line: _Built in India. Shipping across the GCC._
- **Do not add a retail or e-commerce card.**

### Founder (in services, people buy people)

- Eyebrow: `WHO YOU'RE ACTUALLY HIRING`
- Heading: **Early on, you're not hiring a brand. You're hiring the person who ships.**
- Photo slot (leave a placeholder image container) + bio:
  - **Nithin** — Founding engineer. Built production multi-agent orchestration (60%→90% task completion, 15s→5s latency) and shipped 0→1 systems at multiple startups. Based in Bengaluru. _Replace with final bio._
  - Links: LinkedIn, X (placeholder hrefs).

### Trust posture (principles, NOT fake certs)

- Eyebrow: `HOW WE TREAT YOUR STACK`
- Three principles (plain cards, no badge graphics):
  - **We ship inside your perimeter.** Your data never leaves your environment.
  - **Least privilege by default.** We use your existing permissions — nothing more.
  - **Everything auditable.** Every change is logged and reviewable.
- Honest line (--text-muted): _Formal certifications come as we grow. We won't show you a badge we haven't earned._

### Closing CTA

- Giant line (display): **Stop planning. Start shipping.**
- Sub: _One working session. We'll show you a slice worth deploying — usually before the contract is signed._
- CTA (accent): **Book a working session** → Cal link.

### Footer

- `Kriya` wordmark · _Built in Bengaluru._
- Links: Writing · Verticals · LinkedIn · X · `hello@kriya.dev` (mailto placeholder).
- `© 2026 Kriya. Replace entity on launch.`

---

## 7. SEO / meta

- `<title>`: `Kriya — We don't advise on the future. We install it.`
- Meta description: `AI transformation, execution-led. We embed senior engineers and ship production AI into your stack in weeks — India & GCC.`
- Open Graph + Twitter card (title, description, and an OG image placeholder at `/og.png`).
- Favicon placeholder.
- Semantic HTML, correct heading hierarchy (one `h1`), descriptive `alt` on all images.

---

## 8. Definition of done (acceptance checklist)

- [ ] `next build` succeeds with `output: 'export'`; static output deploys on Cloudflare Pages / Vercel free tier with no backend.
- [ ] Lighthouse: Performance ≥ 95, Accessibility ≥ 95. LCP < 2s, zero CLS.
- [ ] Fully responsive, 360px → 1440px+, no horizontal scroll, no overlap.
- [ ] `prefers-reduced-motion: reduce` fully respected — all motion resolves to final static states.
- [ ] Visible keyboard focus on every interactive element; logical tab order.
- [ ] No console errors or warnings. No `localStorage` / `sessionStorage`.
- [ ] All copy is the real copy above — zero lorem ipsum.
- [ ] Design tokens come only from Section 4; single accent discipline holds (gold everywhere, `--live` green only on the status dot).
- [ ] The signature element renders and animates as specified.

---

## 9. Do NOT (anti-patterns — avoid these explicitly)

- ❌ The generic AI-startup look: pure-black `#000` + vermilion/acid-green accent + a giant gradient number in the hero. Ours is **warm** near-black, **saffron-gold** accent, and a **thesis** hero with the execution signature.
- ❌ A client-logo wall, fake testimonials, or invented metrics. We have no clients yet — the capability section stands in.
- ❌ Compliance badges (SOC2 / ISO). We haven't earned them; showing them is dishonest and off-brand.
- ❌ `01 / 02 / 03` numbered markers anywhere except "How we ship" (the one real sequence).
- ❌ Over-animation: full-page parallax, drifting/floating elements, scattered micro-effects. One orchestrated moment + disciplined reveals only.
- ❌ A generic high-contrast-serif-on-cream editorial look. We're warm-black + Clash Display + mono.
- ❌ Any backend, API route, contact form, or stock hero video.
- ❌ A retail / e-commerce vertical card.
- ❌ Lorem ipsum. The copy is provided.
