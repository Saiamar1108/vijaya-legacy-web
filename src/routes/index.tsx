import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, MapPin, Mail, Menu, X, GraduationCap, Bus, FlaskConical,
  Monitor, ShieldCheck, Sparkles, BookOpen, Users, Plane, Trophy,
  Library, Trees, Presentation, Brain, MessageCircle, ArrowRight, Quote, Check,
} from "lucide-react";

import logoAsset from "@/assets/logo.jpeg.asset.json";
import founderAsset from "@/assets/founders.jpeg.asset.json";
import staffAsset from "@/assets/staff.jpeg.asset.json";
import annualdayAsset from "@/assets/annualday.jpeg.asset.json";
import tripAsset from "@/assets/trip.jpeg.asset.json";
import independenceAsset from "@/assets/independence.jpeg.asset.json";

const campusHero = independenceAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vijaya High School — Shapur Nagar, Hyderabad" },
      { name: "description", content: "Vijaya High School in Shapur Nagar, Hyderabad — English medium, Government of Telangana recognised. Admissions open for 2026–27." },
      { property: "og:title", content: "Vijaya High School — Knowledge is Power" },
      { property: "og:description", content: "Building bright futures with quality education in Shapur Nagar, Hyderabad." },
      { property: "og:image", content: campusHero },
    ],
  }),
  component: Home,
});

const PHONE = "+919866059591";
const WHATSAPP = "919866059591";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#founder", label: "Founder" },
  { href: "#why", label: "Why Us" },
  { href: "#academics", label: "Academics" },
  { href: "#gallery", label: "Gallery" },
  { href: "#admissions", label: "Admissions" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Vijaya High School logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-pista-deep" />
          <div className="leading-tight">
            <div className={`font-display text-lg font-bold ${scrolled ? "text-navy" : "text-white"}`}>Vijaya High School</div>
            <div className={`text-[11px] uppercase tracking-widest ${scrolled ? "text-muted-foreground" : "text-pista"}`}>Knowledge is Power</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className={`text-sm font-medium transition hover:text-gold ${scrolled ? "text-navy" : "text-white/90"}`}>{n.label}</a>
          ))}
          <a href="#admissions" className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy shadow-soft transition hover:scale-105">Apply Now</a>
        </nav>
        <button aria-label="Menu" onClick={() => setOpen(v => !v)} className={`lg:hidden ${scrolled ? "text-navy" : "text-white"}`}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-white px-4 py-4 shadow-soft lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-navy font-medium">{n.label}</a>
            ))}
            <a href="#admissions" onClick={() => setOpen(false)} className="rounded-full bg-navy px-5 py-2 text-center text-sm font-semibold text-white">Apply Now</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden">
      <img src={campusHero} alt="Vijaya High School campus" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-4 pt-28 pb-20 sm:px-6">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-pista backdrop-blur ring-1 ring-white/20">
            <Sparkles className="h-3.5 w-3.5" /> Recognised by Government of Telangana
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Vijaya <span className="text-gold">High School</span>
          </h1>
          <p className="mt-4 font-display text-xl italic text-pista sm:text-2xl">"Knowledge is Power"</p>
          <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
            Building bright futures with quality education — nurturing curious minds, strong character and lifelong values in the heart of Shapur Nagar.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#admissions" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-lift transition hover:scale-105">
              Apply for Admission <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition hover:bg-pista">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              <MapPin className="h-4 w-4" /> Visit Campus
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-navy-deep/70 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-4 text-white sm:px-6 md:grid-cols-4">
          {[
            { n: "Nursery – 10", l: "Classes Offered" },
            { n: "E/M", l: "English Medium" },
            { n: "Govt.", l: "Recognised" },
            { n: "2026–27", l: "Admissions Open" },
          ].map(s => (
            <div key={s.l} className="text-center">
              <div className="font-display text-2xl font-bold text-gold">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-pista/80">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</div>
      <h2 className="font-display text-3xl text-navy sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-pista/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="About Our School" title="A trusted home for learning" />
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>Vijaya High School is an established institution focused on academic excellence and character building. For over two decades, families across Shapur Nagar have trusted us to shape confident, kind and capable young learners.</p>
            <p>Our English medium curriculum blends conceptual clarity with strong values — preparing children not just for exams, but for life.</p>
            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {[
                "Recognised by Government of Telangana",
                "English Medium (E/M)",
                "Principal: M. Giridhar",
                "Nursery to High School",
              ].map(x => (
                <li key={x} className="flex items-start gap-2 text-navy">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="font-medium">{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-navy" />
                <p className="text-navy">
                  Plot No. 151 & 152, LB Nagar, Shapur Nagar,<br />Quthbullapur, Hyderabad
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={logoAsset.url} alt="Vijaya High School emblem" className="mx-auto h-72 w-72 rounded-3xl object-contain bg-white p-6 shadow-lift sm:h-96 sm:w-96" />
            <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-navy px-5 py-3 text-sm font-semibold text-white shadow-lift sm:block">
              Estd. for excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">In Loving Memory</div>
          <h2 className="font-display text-3xl sm:text-4xl">Our Founder</h2>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[auto_1fr]">
          <div className="relative mx-auto">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/40 to-pista/30 blur-2xl" />
            <img src={founderAsset.url} alt="Late Manapaati Narayana Garu, Founder" className="relative h-80 w-64 rounded-3xl object-cover shadow-lift ring-4 ring-gold/40 sm:h-96 sm:w-80" />
          </div>
          <div>
            <Quote className="h-10 w-10 text-gold" />
            <p className="mt-4 font-display text-2xl italic leading-snug text-pista sm:text-3xl">
              "A visionary who laid the foundation for quality education and inspired generations."
            </p>
            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-gold">Founder</div>
              <div className="mt-1 font-display text-2xl font-semibold">Late Manapaati Narayana Garu</div>
              <p className="mt-4 max-w-2xl text-white/75">
                His belief that knowledge transforms lives continues to guide every classroom, every teacher and every student of Vijaya High School today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Principal() {
  return (
    <section className="bg-pista/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr]">
          <div className="relative mx-auto">
            <div aria-label="Principal M. Giridhar" className="flex h-80 w-64 flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-8 text-center shadow-lift sm:h-96 sm:w-80">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gold/15 ring-2 ring-gold/40">
                <span className="font-display text-5xl font-bold text-gold">MG</span>
              </div>
              <div className="mt-6 font-display text-xl text-white">M. Giridhar</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-pista/80">Principal</div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white shadow-lift">
              Principal
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Principal's Message</div>
            <h2 className="mt-2 font-display text-3xl text-navy sm:text-4xl">A word from our Principal</h2>
            <Quote className="mt-6 h-9 w-9 text-pista-deep" />
            <p className="mt-3 font-display text-xl italic leading-snug text-navy sm:text-2xl">
              "At Vijaya High School, we believe education is the key to success and character development."
            </p>
            <div className="mt-6">
              <div className="font-semibold text-navy">M. Giridhar</div>
              <div className="text-sm text-muted-foreground">Principal, Vijaya High School</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { i: Users, t: "Experienced Faculty" },
  { i: Presentation, t: "Smart Digital Classrooms" },
  { i: FlaskConical, t: "Science Labs" },
  { i: Monitor, t: "Computer Labs" },
  { i: Bus, t: "Transport Facility" },
  { i: ShieldCheck, t: "Safe Environment" },
  { i: Trophy, t: "Annual Day Celebrations" },
  { i: Plane, t: "Educational Trips" },
  { i: Brain, t: "Personality Development" },
];

function Why() {
  return (
    <section id="why" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Why Choose Us" title="Everything your child needs to thrive" intro="Nine reasons families across Shapur Nagar choose Vijaya High School." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ i: Icon, t }) => (
            <div key={t} className="group rounded-2xl border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:bg-pista/40 hover:shadow-lift">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold transition group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <div className="font-display text-lg font-semibold text-navy">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Academics() {
  const items = [
    "Nursery to High School",
    "English Medium Curriculum",
    "Government Recognized",
    "Focus on Conceptual Learning",
    "Discipline & Values",
    "Co-curricular Activities",
  ];
  return (
    <section id="academics" className="bg-navy py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Academics</div>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl">Learning that shapes minds <span className="text-gold">and hearts</span>.</h2>
            <p className="mt-6 max-w-lg text-white/75">A balanced curriculum built around conceptual understanding, strong values and confident self-expression — from nursery all the way to high school.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map(x => (
              <li key={x} className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
                <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="font-medium">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: staffAsset.url, label: "Staff Group Photo", cat: "Staff" },
  { src: annualdayAsset.url, label: "Annual Day Celebrations", cat: "Annual Day" },
  { src: independenceAsset.url, label: "Independence Day", cat: "Activities" },
  { src: tripAsset.url, label: "Educational Trip — Rashtrapati Nilayam", cat: "Trips" },
  { src: campusHero, label: "School Campus", cat: "Campus" },
  { src: logoAsset.url, label: "Our Emblem", cat: "School" },
];

function Gallery() {
  const cats = ["School Building", "Staff", "Annual Day", "Activities", "Trips", "Transport", "Digital Classrooms", "Science Labs", "Computer Labs"];
  return (
    <section id="gallery" className="bg-pista/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Gallery" title="Moments from our school" intro="A glimpse into everyday life at Vijaya High School." />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map(c => (
            <span key={c} className="rounded-full border border-navy/20 bg-white px-4 py-1.5 text-xs font-medium text-navy shadow-soft">{c}</span>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-2xl shadow-soft">
              <img src={g.src} alt={g.label} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-4 text-white">
                <div className="text-xs uppercase tracking-widest text-gold">{g.cat}</div>
                <div className="font-display text-lg">{g.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="admissions" className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pista/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold ring-1 ring-gold/30">
              <GraduationCap className="h-4 w-4" /> Admissions Open 2026–27
            </div>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">Begin your child's journey with us.</h2>
            <p className="mt-5 max-w-md text-white/75">Fill the quick inquiry form and our admissions team will reach out within a day. You can also call us directly — we'd love to show you around the campus.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:scale-105">
                <Phone className="h-4 w-4" /> Call for Admission
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Get Directions
              </a>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="rounded-3xl bg-white p-6 text-navy shadow-lift sm:p-8"
          >
            <h3 className="font-display text-2xl">Admission Inquiry</h3>
            <p className="mt-1 text-sm text-muted-foreground">We'll get back to you shortly.</p>
            {submitted ? (
              <div className="mt-6 rounded-2xl bg-pista p-6 text-center">
                <Check className="mx-auto h-10 w-10 text-navy" />
                <p className="mt-3 font-semibold">Thank you! Your inquiry has been received.</p>
                <p className="mt-1 text-sm text-muted-foreground">Our team will call you soon.</p>
              </div>
            ) : (
              <div className="mt-5 grid gap-4">
                {[
                  { n: "student", l: "Student Name", t: "text" },
                  { n: "parent", l: "Parent Name", t: "text" },
                  { n: "class", l: "Class (e.g. Nursery, 5, 10)", t: "text" },
                  { n: "phone", l: "Phone Number", t: "tel" },
                ].map(f => (
                  <label key={f.n} className="block">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{f.l}</span>
                    <input required type={f.t} name={f.n} className="mt-1 w-full rounded-xl border border-input bg-white px-4 py-3 outline-none transition focus:border-navy focus:ring-2 focus:ring-pista" />
                  </label>
                ))}
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</span>
                  <textarea name="message" rows={3} className="mt-1 w-full rounded-xl border border-input bg-white px-4 py-3 outline-none transition focus:border-navy focus:ring-2 focus:ring-pista" />
                </label>
                <button type="submit" className="mt-2 rounded-full bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy-deep">Submit Inquiry</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-pista/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Contact" title="Get in touch" intro="We're here to answer your questions — call, email, or visit the campus." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <MapPin className="h-7 w-7 text-navy" />
            <h3 className="mt-4 font-display text-xl text-navy">Visit Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">Plot No. 151 & 152, LB Nagar, Shapur Nagar, Quthbullapur, Hyderabad</p>
            <a target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Vijaya+High+School+Shapur+Nagar+Hyderabad" className="mt-4 inline-flex text-sm font-semibold text-navy hover:text-gold">Open in Maps →</a>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <Phone className="h-7 w-7 text-navy" />
            <h3 className="mt-4 font-display text-xl text-navy">Call Us</h3>
            <div className="mt-3 space-y-1.5 text-sm">
              <a href={`tel:${PHONE}`} className="flex items-center justify-between rounded-lg bg-pista px-3 py-2 font-semibold text-navy">+91 81217 84528 <span className="text-[10px] uppercase tracking-widest text-gold">Admissions</span></a>
              <a href="tel:+919866059591" className="block rounded-lg px-3 py-2 text-navy hover:bg-pista/60">+91 98660 59591</a>
              <a href="tel:+919603599950" className="block rounded-lg px-3 py-2 text-navy hover:bg-pista/60">+91 96035 99950</a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <Mail className="h-7 w-7 text-navy" />
            <h3 className="mt-4 font-display text-xl text-navy">Email Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">For inquiries, please write to:</p>
            <a href="mailto:vijaya_high_school@yahoo.in" className="mt-4 inline-flex rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-deep">vijaya_high_school@yahoo.in</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="Vijaya High School" className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40" />
              <div>
                <div className="font-display text-xl font-bold">Vijaya High School</div>
                <div className="text-xs uppercase tracking-widest text-pista/80">Knowledge is Power</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-white/70">An English medium school recognised by the Government of Telangana — committed to nurturing bright, kind and confident young learners.</p>
          </div>
          <div>
            <div className="font-display text-base text-gold">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {NAV.map(n => <li key={n.href}><a href={n.href} className="hover:text-gold">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="font-display text-base text-gold">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-pista" /> Shapur Nagar, Quthbullapur, Hyderabad</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-pista" /> <a href={`tel:${PHONE}`}>+91 81217 84528</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-pista" /> <a href="mailto:vijaya_high_school@yahoo.in" className="break-all">vijaya_high_school@yahoo.in</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <div>© 2026 Vijaya High School. All Rights Reserved.</div>
          <div>Made with care for our students & families.</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20admissions%20at%20Vijaya%20High%20School.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 animate-float items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <Principal />
      <Why />
      <Academics />
      <Gallery />
      
      <Admissions />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
