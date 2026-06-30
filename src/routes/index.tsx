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
  X,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import founderImg from "@/assets/founder.jpeg.asset.json";
import logoBlack from "@/assets/logo-black.png.asset.json";
import logoWhite from "@/assets/logo-white.png.asset.json";
import metaAdsVideo from "@/assets/meta-ads.mp4.asset.json";
import eventsVideo from "@/assets/events.mp4.asset.json";
import sketchesVideo from "@/assets/sketches.mp4.asset.json";
import marketingVideo from "@/assets/marketing.mp4.asset.json";
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

function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  return (
    <img
      src={variant === "light" ? logoWhite.url : logoBlack.url}
      alt="4Vision logo"
      className={`w-auto ${className}`}
    />
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

const videoServices = [
  {
    video: metaAdsVideo.url,
    tag: "Meta Ads",
    title: "Meta Ads",
    text: "Bereik precies de juiste doelgroep met professionele videoadvertenties voor Facebook en Instagram. Wij combineren sterke content met slimme advertenties om meer leads, klanten en omzet te genereren.",
  },
  {
    video: eventsVideo.url,
    tag: "Events & Personal Branding",
    title: "Events & Personal Branding",
    text: "Van aftermovies en bedrijfsevenementen tot content voor ondernemers en sporters. Professionele video's die jouw verhaal krachtig vastleggen.",
  },
  {
    video: sketchesVideo.url,
    tag: "Sketches & Social Content",
    title: "Sketches & Social Content",
    text: "Creatieve en entertainende video's die opvallen, gedeeld worden en zorgen voor meer bereik, betrokkenheid en zichtbaarheid op social media.",
  },
  {
    video: marketingVideo.url,
    tag: "Marketing & Promotievideo's",
    title: "Marketing & Promotievideo's",
    text: "Professionele promotiefilms en bedrijfsvideo's waarmee je jouw merk, product of dienst overtuigend presenteert en meer klanten aantrekt.",
  },
];

const founderStory = [
  "Twee jaar geleden begon ik met het maken van video's, niet met het idee om een bedrijf te starten, maar simpelweg omdat ik het leuk vond. In mijn vrije tijd was ik voortdurend bezig met filmen, monteren en experimenteren met nieuwe ideeën. Urenlang zat ik achter mijn laptop om mezelf alles aan te leren. Er was niemand die mij uitlegde hoe het moest; ik leerde alles door te proberen, fouten te maken en steeds beter te worden.",
  "Na verloop van tijd begon mijn content steeds beter te presteren. Mijn video's bereikten miljoenen views, verzamelden duizenden likes en ik bouwde een community van meer dan 10.000 volgers op. Hierdoor ontdekte ik niet alleen hoe je goede video's maakt, maar vooral hoe je content creëert die mensen blijft boeien en resultaten oplevert.",
  "Steeds vaker kreeg ik dezelfde vraag van ondernemers en bedrijven: \u201CKun jij dit ook voor ons doen?\u201D Dat was het moment waarop ik besefte dat mijn hobby kon uitgroeien tot iets veel groters. Zo ontstond 4Vision.",
  "Vandaag help ik bedrijven met het maken van krachtige short-form content, professionele bedrijfsvideo's, promotievideo's en Meta Ads die niet alleen mooi ogen, maar ook bijdragen aan meer zichtbaarheid, meer vertrouwen en uiteindelijk meer klanten.",
  "Mijn missie is eenvoudig: jouw verhaal vertellen op een manier die mensen onthouden \u00E9n die resultaat oplevert.",
];

function VideoCard({ s }: { s: (typeof videoServices)[number] }) {
  const ref = useRef<HTMLVideoElement>(null);

  function play() {
    const v = ref.current;
    if (v) {
      v.currentTime = 0;
      void v.play();
    }
  }
  function stop() {
    const v = ref.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  }

  return (
    <div className="reveal group">
      <div
        onMouseEnter={play}
        onMouseLeave={stop}
        className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-secondary transition-all duration-500 group-hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]"
      >
        <video
          ref={ref}
          src={s.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
      <div className="mt-5 px-1">
        <h3 className="text-lg font-bold">{s.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
      </div>
    </div>
  );
}

function FounderImage() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-secondary"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
    >
      <img
        src={founderImg.url}
        alt="Oprichter van 4Vision"
        width={1024}
        height={1280}
        className={`h-full w-full object-cover transition-transform duration-700 ${open ? "scale-105" : "scale-100"}`}
      />

      <div
        className={`absolute inset-0 flex flex-col bg-black/80 p-7 transition-all duration-500 md:p-9 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Sluiten"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
        >
          <X className="h-5 w-5" />
        </button>
        <h3 className="text-2xl font-extrabold text-white">Van hobby naar 4Vision.</h3>
        <div className="mt-4 space-y-3 overflow-y-auto pr-1 text-sm leading-relaxed text-white/80">
          {founderStory.map((p, i) => (
            <p
              key={i}
              className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
              style={{ transitionDelay: open ? `${120 + i * 90}ms` : "0ms" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      >
        Hover of tik om mijn verhaal te ontdekken
      </div>
    </div>
  );
}

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
            <Logo className="h-8" />
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#diensten" className="transition-colors hover:text-foreground">Diensten</a>
            <a href="#werk-videos" className="transition-colors hover:text-foreground">Werk</a>
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
              <SecondaryButton href="#werk-videos">Bekijk ons werk</SecondaryButton>
            </div>
          </div>
          <div className="reveal">
            <div className="overflow-hidden rounded-3xl bg-secondary">
              <FounderImage />
            </div>
          </div>
        </div>
      </section>

      {/* ONZE DIENSTEN — VIDEO GRID */}
      <section id="werk-videos" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Onze diensten
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Onze Diensten
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Bekijk een selectie van ons werk. Iedere video laat zien hoe wij
              bedrijven en ondernemers helpen groeien met krachtige content.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {videoServices.map((s) => (
              <VideoCard key={s.title} s={s} />
            ))}
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

      {/* WERKWIJZE — TIMELINE */}
      <section id="werkwijze" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="reveal mb-16 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Werkwijze
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Zo werken wij</h2>
          </div>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-12 md:space-y-0">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className={`reveal relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } md:min-h-[10rem]`}
                >
                  {/* dot */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                    {s.n}
                  </div>
                  {/* content */}
                  <div
                    className={`flex-1 rounded-3xl border border-border bg-card p-7 md:max-w-[calc(50%-2.5rem)] ${
                      i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                    }`}
                  >
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
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
