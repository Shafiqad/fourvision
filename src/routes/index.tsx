import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { Toaster, toast } from "sonner";
import {
  Film,
  Smartphone,
  Building2,
  CalendarHeart,
  UserRound,
  Megaphone,
  Sparkles,
  Clapperboard,
  Layers,
  TrendingUp,
  Phone,
  Instagram,
  ArrowRight,
  Check,
  Volume2,
  X,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import founderImg from "@/assets/founder.jpeg.asset.json";
import metaAdsVideo from "@/assets/meta-ads.mp4.asset.json";
import eventsVideo from "@/assets/events.mp4.asset.json";
import sketchesVideo from "@/assets/sketches.mp4.asset.json";
import marketingVideo from "@/assets/marketing.mp4.asset.json";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "4Vision — Videomarketing Agency | Meer klanten met video" },
      {
        name: "description",
        content:
          "4Vision helpt bedrijven groeien met short-form content, professionele videoproductie en Meta Ads die converteren. Jouw verhaal. Onze visie.",
      },
      { property: "og:title", content: "4Vision — Videomarketing Agency" },
      {
        property: "og:description",
        content:
          "Video's die klanten aantrekken. Content die resultaat oplevert. Plan een gratis kennismaking.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold tracking-tight leading-none ${className}`}>
      4<span className="font-bold">Vision</span>
    </span>
  );
}

function PrimaryButton({
  children,
  href,
  type = "button",
}: {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
}) {
  const cls =
    "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 hover:gap-3";
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-foreground hover:gap-3"
    >
      {children}
    </a>
  );
}

const services = [
  { icon: Smartphone, title: "Short-form content", text: "Instagram Reels, TikToks en YouTube Shorts die aandacht trekken en engagement verhogen." },
  { icon: Film, title: "Reclame- & promotiefilms", text: "Professionele video's die jouw merk, product of dienst krachtig presenteren." },
  { icon: Building2, title: "Bedrijfsvideo's", text: "Video's die vertrouwen opbouwen en jouw bedrijf professioneel positioneren." },
  { icon: CalendarHeart, title: "Eventvideo's", text: "Leg evenementen vast op een manier die impact maakt en gedeeld wordt." },
  { icon: UserRound, title: "Personal branding", text: "Voor ondernemers, sporters, coaches en creators die hun verhaal willen vertellen." },
  { icon: Megaphone, title: "Meta Ads", text: "Advertenties die bereik omzetten in leads en klanten." },
];

const why = [
  { icon: Sparkles, title: "Creatief & strategisch", text: "Geen standaard content, maar video's met een doel." },
  { icon: Clapperboard, title: "Cinematische kwaliteit", text: "Professionele beelden die blijven hangen." },
  { icon: Layers, title: "Alles onder één dak", text: "Concept, opname, montage en advertenties." },
  { icon: TrendingUp, title: "Resultaatgericht", text: "Meer zichtbaarheid, meer leads en meer klanten." },
];

const audience = [
  "Lokale bedrijven",
  "Ondernemers",
  "Restaurants",
  "Sportscholen",
  "Makelaars",
  "Coaches",
  "Sporters",
  "Evenementenorganisaties",
];

const steps = [
  { n: "01", title: "Strategie", text: "We bepalen samen de doelen en boodschap." },
  { n: "02", title: "Productie", text: "Professionele opnames op locatie." },
  { n: "03", title: "Montage", text: "Cinematische montage die aansluit bij jouw merk." },
  { n: "04", title: "Groei", text: "Content publiceren of inzetten voor Meta Ads." },
];

const portfolio = [
  { img: portfolio1, tag: "Horeca", title: "Restaurant brandfilm" },
  { img: portfolio2, tag: "Sport", title: "Athlete personal branding" },
  { img: portfolio3, tag: "Corporate", title: "Bedrijfsverhaal" },
];

function Index() {
  useReveal();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Bedankt! We nemen zo snel mogelijk contact met je op.");
    }, 600);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" aria-label="4Vision home">
            <Wordmark className="text-2xl" />
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#diensten" className="transition-colors hover:text-foreground">Diensten</a>
            <a href="#werk" className="transition-colors hover:text-foreground">Werk</a>
            <a href="#werkwijze" className="transition-colors hover:text-foreground">Werkwijze</a>
            <a href="#over" className="transition-colors hover:text-foreground">Over ons</a>
          </div>
          <PrimaryButton href="#contact">Plan een gesprek</PrimaryButton>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="px-6 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Jouw verhaal. Onze visie.
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Video's die klanten aantrekken.
              <span className="block text-muted-foreground">Content die resultaat oplevert.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Wij helpen bedrijven groeien met short-form content, professionele
              videoproductie en Meta Ads die converteren.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton href="#contact">
                Plan een gratis kennismaking <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton href="#werk">Bekijk ons werk</SecondaryButton>
            </div>
          </div>
          <div className="reveal">
            <div className="overflow-hidden rounded-3xl bg-secondary">
              <img
                src={heroCamera}
                alt="Professionele cinema camera van 4Vision"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIENSTEN */}
      <section id="diensten" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Onze diensten
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Alles wat jouw merk laat opvallen
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="reveal group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAAROM */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-20">
          <div className="reveal mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/60">
              Waarom 4Vision
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Meer dan alleen mooie video's
            </h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {why.map((w) => (
              <div key={w.title} className="reveal flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/10">
                  <w.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{w.title}</h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/70">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="werk" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Ons werk
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Content die blijft hangen
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {portfolio.map((p) => (
              <div
                key={p.title}
                className="reveal group relative aspect-[3/4] overflow-hidden rounded-3xl bg-secondary"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  width={768}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    {p.tag}
                  </span>
                  <h3 className="mt-1 text-lg font-bold">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Voor wie
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Voor bedrijven die willen groeien
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {audience.map((a) => (
              <span
                key={a}
                className="reveal rounded-full border border-border bg-card px-6 py-3 text-sm font-medium"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section id="werkwijze" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Werkwijze
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Zo werken wij</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="reveal bg-card p-8">
                <span className="text-5xl font-extrabold text-muted-foreground/30">{s.n}</span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVER ONS */}
      <section id="over" className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Over ons
            </p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Jouw verhaal. Onze visie.
            </h2>
          </div>
          <div className="reveal space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Bij 4Vision geloven we dat ieder bedrijf een verhaal heeft dat gezien
              mag worden.
            </p>
            <p>
              Wij combineren storytelling, videoproductie en marketing om content te
              creëren die niet alleen mooi is, maar ook resultaat oplevert.
            </p>
            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {["Creatief & strategisch", "Cinematische kwaliteit", "Alles onder één dak", "Resultaatgericht"].map((i) => (
                <li key={i} className="flex items-center gap-3 text-base text-foreground">
                  <Check className="h-5 w-5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="reveal mx-auto max-w-7xl rounded-[2.5rem] bg-primary px-8 py-20 text-center text-primary-foreground md:px-16 md:py-28">
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Klaar om op te vallen?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/70">
            Laten we samen content maken die jouw bedrijf laat groeien.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
            >
              Plan een gratis gesprek <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Contact
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Plan een gratis kennismaking
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Vrijblijvend kennismaken? Laat je gegevens achter of bel direct — we
              denken graag met je mee.
            </p>
            <div className="mt-8 space-y-4">
              <a href="tel:0685002058" className="flex items-center gap-4 text-foreground">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="font-semibold">0685002058</span>
              </a>
              <a
                href="https://instagram.com/fourvision.nl"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-foreground"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Instagram className="h-5 w-5" />
                </span>
                <span className="font-semibold">@fourvision.nl</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal rounded-3xl border border-border bg-card p-8 md:p-10"
          >
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="naam" className="text-sm font-medium">Naam</label>
                <input
                  id="naam"
                  name="naam"
                  required
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  placeholder="Jouw naam"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  placeholder="jij@bedrijf.nl"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="bericht" className="text-sm font-medium">Bericht</label>
                <textarea
                  id="bericht"
                  name="bericht"
                  rows={4}
                  required
                  className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  placeholder="Vertel kort over jouw project"
                />
              </div>
              <PrimaryButton type="submit">
                {submitting ? "Versturen…" : "Verstuur aanvraag"}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary px-6 py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
          <Wordmark className="text-3xl" />
          <p className="text-lg font-medium">
            Meer zichtbaarheid. Meer klanten. Meer groei.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <a href="tel:0685002058" className="transition-colors hover:text-primary-foreground">
              0685002058
            </a>
            <a
              href="https://instagram.com/fourvision.nl"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary-foreground"
            >
              @fourvision.nl
            </a>
          </div>
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} 4Vision — Jouw verhaal. Onze visie.
          </p>
        </div>
      </footer>
    </div>
  );
}
