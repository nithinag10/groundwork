import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Signature } from "@/components/Signature";
import { BRAND, CAL_LINK, EMAIL, LINKEDIN, X_LINK } from "@/lib/site";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export default function Home() {
  return (
    <div id="top">
      <Nav />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="relative overflow-hidden">
          {/* Lightweight warm ambient: faint radial accent glow + grain. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 50% at 70% 20%, rgba(245,165,36,0.10), transparent 70%)",
            }}
          />
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 pb-24 pt-36 md:grid-cols-[1.2fr_1fr] md:items-center md:pb-36 md:pt-44">
            <div>
              <Reveal>
                <Eyebrow>
                  AI Transformation — Minus the Theater · India &amp; GCC
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.98] tracking-tight">
                  Everyone&apos;s selling the future. We install it.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
                  {BRAND} embeds senior engineers inside your stack and ships
                  production AI in weeks — not roadmaps, not pilots, not a
                  ninety-slide deck.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap items-center gap-6">
                  <a
                    href={CAL_LINK}
                    className="rounded-md bg-accent px-5 py-3 font-medium text-accent-ink transition-opacity hover:opacity-90"
                  >
                    Book a working session
                  </a>
                  <a
                    href="#how-we-ship"
                    className="font-mono text-sm text-text-muted transition-colors hover:text-text"
                  >
                    See how we ship ↓
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="md:justify-self-end">
              <Signature />
            </Reveal>
          </div>
        </section>

        {/* ---------------- Thesis band ---------------- */}
        <section id="thesis" className="border-y border-border bg-bg-elev/40">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36">
            <Reveal>
              <h2 className="max-w-4xl font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight">
                Strategy is commoditized. Execution is the moat.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-2xl text-lg text-text-muted">
                Every company already knows it needs AI. Almost none have
                shipped it. That gap is the entire business.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Proof of capability ---------------- */}
        <section className="mx-auto max-w-[1200px] px-6 py-24 md:py-36">
          <Reveal>
            <Eyebrow>Proof, Not Logos</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight">
              We&apos;re new as a company. The engineering isn&apos;t.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                stat: "60% → 90%",
                body: "autonomous task completion on a production multi-agent platform.",
              },
              {
                stat: "15s → 5s",
                body: "agent step latency, held under real load.",
              },
              {
                stat: "0 → prod",
                body: "multi-agent orchestration shipped to live users. Not demos.",
              },
            ].map((c, i) => (
              <Reveal
                as="article"
                key={c.stat}
                delay={i * 0.08}
                className="rounded-md border border-border bg-bg-elev p-6"
              >
                <div className="font-mono text-3xl font-semibold text-accent">
                  {c.stat}
                </div>
                <p className="mt-3 text-text-muted">{c.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-6 text-sm text-text-muted">
              From the founding team&apos;s prior work.
            </p>
          </Reveal>
        </section>

        {/* ---------------- What we do ---------------- */}
        <section
          id="what-we-do"
          className="border-t border-border bg-bg-elev/40"
        >
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36">
            <Reveal>
              <Eyebrow>What We Actually Do</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight">
                Four things. All of them ship.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
              {[
                {
                  t: "AI-readiness in days, not months.",
                  b: "A working read on where AI moves your numbers — delivered as a running prototype, not a PDF.",
                },
                {
                  t: "Legacy → agentic migration.",
                  b: "We go into the messy, real stack and re-platform it for agents. The part nobody else will touch.",
                },
                {
                  t: "Embedded agent squads.",
                  b: "Senior engineers inside your team, shipping production AI to your users — week one, not quarter three.",
                },
                {
                  t: "We run it until you can.",
                  b: "We operate what we build, then hand it over cleanly. No abandonware, no dependency.",
                },
              ].map((item, i) => (
                <Reveal
                  as="article"
                  key={item.t}
                  delay={i * 0.06}
                  className="bg-bg p-8"
                >
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {item.t}
                  </h3>
                  <p className="mt-3 text-text-muted">{item.b}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- How we ship ---------------- */}
        <section className="mx-auto max-w-[1200px] px-6 py-24 md:py-36" id="how-we-ship">
          <Reveal>
            <Eyebrow>How We Ship</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight">
              Three steps. The first one already produces something real.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-px overflow-hidden rounded-md border border-border bg-border">
            {[
              {
                n: "01",
                t: "Week 0 — Working session.",
                b: "Not a sales call. We sit with your stack and your numbers and leave with one slice worth shipping.",
              },
              {
                n: "02",
                t: "Weeks 1–3 — Embed & ship.",
                b: "Senior engineers go in. A real production slice goes live. You watch it work, not a status deck.",
              },
              {
                n: "03",
                t: "Handover & run.",
                b: "We operate it, then transfer it cleanly to your team — code, context, and control.",
              },
            ].map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 0.06}
                className="flex flex-col gap-4 bg-bg p-8 md:flex-row md:items-baseline md:gap-10"
              >
                <span className="font-mono text-2xl font-semibold text-accent">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {s.t}
                  </h3>
                  <p className="mt-2 max-w-2xl text-text-muted">{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- Writing ---------------- */}
        <section id="writing" className="border-t border-border bg-bg-elev/40">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36">
            <Reveal>
              <Eyebrow>How We Think</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight">
                We write the way we build — sharp and in public.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                { t: "Strategy is the commodity now.", slug: "strategy-is-the-commodity-now" },
                {
                  t: "The consultants left a deck. Here's what we leave.",
                  slug: "the-consultants-left-a-deck",
                },
                {
                  t: "Why your last AI pilot died in staging.",
                  slug: "why-your-last-ai-pilot-died-in-staging",
                },
              ].map((p, i) => (
                <Reveal
                  as="article"
                  key={p.slug}
                  delay={i * 0.08}
                  className="group rounded-md border border-border bg-bg p-6 transition-colors hover:border-accent/40"
                >
                  <a href={`/writing/${p.slug}`} className="block">
                    <div className="eyebrow">Essay</div>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight">
                      {p.t}
                    </h3>
                    <span className="mt-6 inline-block font-mono text-sm text-text-muted transition-colors group-hover:text-accent">
                      Read →
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Verticals ---------------- */}
        <section className="mx-auto max-w-[1200px] px-6 py-24 md:py-36" id="verticals">
          <Reveal>
            <Eyebrow>Where We Go Deep</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight">
              We start where the stakes — and the legacy — run highest.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Financial services",
                b: "Onboarding, compliance, and risk workflows, shipped to production under real regulatory weight.",
              },
              {
                t: "Manufacturing & logistics",
                b: "Operations and supply chains that still run on legacy. We make them agent-native.",
              },
              {
                t: "Healthcare",
                b: "Administrative and coordination load, automated under strict data boundaries.",
              },
            ].map((v, i) => (
              <Reveal
                as="article"
                key={v.t}
                delay={i * 0.08}
                className="rounded-md border border-border bg-bg-elev p-6"
              >
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {v.t}
                </h3>
                <p className="mt-3 text-text-muted">{v.b}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 font-mono text-sm text-text-muted">
              Built in India. Shipping across the GCC.
            </p>
          </Reveal>
        </section>

        {/* ---------------- Founder ---------------- */}
        <section className="border-t border-border bg-bg-elev/40">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36">
            <Reveal>
              <Eyebrow>Who You&apos;re Actually Hiring</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight">
                Early on, you&apos;re not hiring a brand. You&apos;re hiring the
                person who ships.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 grid gap-8 md:grid-cols-[200px_1fr] md:items-start">
                <div
                  className="aspect-square w-full max-w-[200px] rounded-md border border-border bg-bg"
                  aria-label="Founder photo placeholder"
                />
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    Nithin
                  </h3>
                  <p className="mt-4 max-w-2xl text-text-muted">
                    Founding engineer. Built production multi-agent
                    orchestration (60%→90% task completion, 15s→5s latency) and
                    shipped 0→1 systems at multiple startups. Based in Bengaluru.{" "}
                    <span className="italic">Replace with final bio.</span>
                  </p>
                  <div className="mt-5 flex gap-5 font-mono text-sm">
                    <a
                      href={LINKEDIN}
                      className="text-text-muted transition-colors hover:text-text"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={X_LINK}
                      className="text-text-muted transition-colors hover:text-text"
                    >
                      X
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Trust posture ---------------- */}
        <section className="mx-auto max-w-[1200px] px-6 py-24 md:py-36">
          <Reveal>
            <Eyebrow>How We Treat Your Stack</Eyebrow>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "We ship inside your perimeter.",
                b: "Your data never leaves your environment.",
              },
              {
                t: "Least privilege by default.",
                b: "We use your existing permissions — nothing more.",
              },
              {
                t: "Everything auditable.",
                b: "Every change is logged and reviewable.",
              },
            ].map((p, i) => (
              <Reveal
                as="article"
                key={p.t}
                delay={i * 0.08}
                className="rounded-md border border-border bg-bg-elev p-6"
              >
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {p.t}
                </h3>
                <p className="mt-3 text-text-muted">{p.b}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-6 text-sm text-text-muted">
              Formal certifications come as we grow. We won&apos;t show you a
              badge we haven&apos;t earned.
            </p>
          </Reveal>
        </section>

        {/* ---------------- Closing CTA ---------------- */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-28 text-center md:py-40">
            <Reveal>
              <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight">
                Stop planning. Start shipping.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-text-muted">
                One working session. We&apos;ll show you a slice worth deploying
                — usually before the contract is signed.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <a
                href={CAL_LINK}
                className="mt-9 inline-block rounded-md bg-accent px-6 py-3 font-medium text-accent-ink transition-opacity hover:opacity-90"
              >
                Book a working session
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg font-semibold tracking-tight">
              {BRAND}
            </span>
            <span className="font-mono text-sm text-text-muted">
              Built in Bengaluru.
            </span>
          </div>
          <div className="flex flex-wrap gap-5 font-mono text-sm text-text-muted">
            <a href="#writing" className="transition-colors hover:text-text">
              Writing
            </a>
            <a href="#verticals" className="transition-colors hover:text-text">
              Verticals
            </a>
            <a href={LINKEDIN} className="transition-colors hover:text-text">
              LinkedIn
            </a>
            <a href={X_LINK} className="transition-colors hover:text-text">
              X
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="transition-colors hover:text-text"
            >
              {EMAIL}
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-[1200px] px-6 pb-10">
          <p className="font-mono text-xs text-text-muted">
            © 2026 {BRAND}. Replace entity on launch.
          </p>
        </div>
      </footer>
    </div>
  );
}
